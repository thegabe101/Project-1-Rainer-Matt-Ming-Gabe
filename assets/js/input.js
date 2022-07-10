var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');

function getApi() {

    
    // fetch request gets a list of all the repos for the node.js organization
    var postmanAPIURL = 'https://api.thedogapi.com/v1/breeds'

    fetch(postmanAPIURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            //TODO: if statement
            // TODO: Remember to have .includes(contain user input variable.)

            function findRadioBreedValue () {
            var breeds = document.getElementsByName('group1');
            var breed_value;
            for(i = 0; i < breeds.length; i++) {
                if (breeds[i].checked){
                    console.log("breeds[i]: "+breeds[i])
                    breed_value = breeds[i].value
                    console.log("CHOSEN ONE: "+breed_value);
                    localStorage.setItem('breed_value', breed_value.toLowerCase())
                }
            }
            }

            findRadioBreedValue();

            function findDogSizeValue() {
                var dogSize = document.getElementById('doggoSize');
                var dogSizeValue = dogSize.options[dogSize.selectedIndex].value;
                console.log(dogSizeValue)
            }

            findDogSizeValue();

            var cleanedData = data.filter(group => group.breed_group)
            for (let i = 0; i < cleanedData.length; i++) {
                console.log(cleanedData[i].breed_group)   
            }
            var chosenBreed = localStorage.getItem('breed_value')
            console.log(cleanedData);
            // var filtered = cleanedData.filter(breed => breed.breed_group.toLowerCase().includes(chosenBreed) && parseInt(breed.life_span) > 7)
            var filtered = cleanedData.filter(breed => breed.breed_group.toLowerCase().includes(chosenBreed) && parseInt(breed.weight.imperial) > 84 && parseInt(breed.life_span) > 8)
            console.log(cleanedData.filter(breed => breed.breed_group))
            console.log(chosenBreed);
            console.log(filtered);

            // TODO: Save information for next page to see.
            localStorage.setItem("searchResult", JSON.stringify(filtered))

            //in other script for the new page:
            const resultFromStorage = JSON.parse(localStorage.getItem("searchResult"));

            //TODO: switch over to new page.
            // window.location.href = "confirmation.html"
            //Loop over the data to generate a table, each table row will have a link to the repo url
            for (var i = 0; i < filtered.length; i++) {
                // Creating elements, tablerow, tabledata, and anchor
                var createTableRow = document.createElement('tr');
                var tableData = document.createElement('td');
                var img = document.createElement('img')
                var h2 = document.createElement("h2")
                var link = document.createElement('a');

                // Setting the text of link and the href of the link
                link.textContent = filtered[i].breed_group
                // when Links get clicked on you go to results and the dog name = breedInput
                //TODO: 
                link.href = "https://en.wikipedia.org/wiki/" + filtered[i].name;

                // Appending the link to the tabledata and then appending the tabledata to the tablerow
                // The tablerow then gets appended to the tablebody
                tableData.appendChild(link);
                createTableRow.appendChild(tableData);
                tableBody.appendChild(createTableRow);
            }
        });
}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});



fetchButton.addEventListener('click', getApi);