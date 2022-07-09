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
            const cleanedData = data.filter(group => group.breed_group)
            // TODO: Remember to have .includes(contain user input variable.)

            // const filteredByAge = cleanedData.filter(doge => parseInt(doge.life_span) > 13)
            // console.log(filteredByAge)
            const filtered = cleanedData.filter(breed => breed.breed_group.toLowerCase().includes("hound" /* turn into user input VAR from drop down button */) && parseInt(breed.life_span) > 14/*turn into user input VAR from age slider*/)
            console.log(filtered)

            // TODO: Save information for next page to see.
            localStorage.setItem("searchResult", JSON.stringify(filtered))

            //in other script for the new page:
            //const resultFromStorage = JSON.parse(localStorage.getItem("searchResult"));

            //TODO: switch over to new page.
            window.location.href = "confirmation.html"
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

fetchButton.addEventListener('click', getApi);