//in other script for the new page:

const resultFromStorage = JSON.parse(localStorage.getItem("searchResult"));
console.log(resultFromStorage)
function appendDogInfo () {
    for (var i = 0; i < resultFromStorage.length; i++) {
            // var image = document.createElement("img");
            // image.src = resultFromStorage[i].image.url
            // document.getElementById("matchCard${i}").appendChild(image);
            // var dogName = document.createElement("h3")
            // dogName.textContent = resultFromStorage[i].name;
            // document.getElementById("matchCard${i}").appendChild(dogName)
            //make card
            var doggyCard = $(`
                        <article class="matchCard" id="matchCard${i}">
                            <img src="${resultFromStorage[i].image.url}" alt="Picture of dog" class = "matchImg">
                            <p class="matchContent" id = 'pId${i}'>${resultFromStorage[i].name}</p>
                            <button class="btn btn-danger" id="fetch-button${i}">Choose me!</button>
                        </article>
            `)
            $('#dog-card').append(doggyCard)
        }
        call()
    }
    

appendDogInfo()

function call() {
    var button = document.getElementsByClassName('btn');
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function() {
            console.log('clicked card button '+ i);
            var breedName = document.getElementById('pId'+i).innerHTML
            console.log(breedName.toLowerCase())
            localStorage.setItem('breed', breedName.toLowerCase())  

setTimeout(function() {
  window.location.href = "results.html"
}, 1000);
            
        }) 
    }
}


document.getElementById("fetch-button0").addEventListener("click", function() {
    console.log('clicked first card button');
    var breedName = document.getElementById('')
});


// if (document.addEventListener) {
//     document.addEventListener("click", handleClick, false);
// }
// else if (document.attachEvent) {
//     document.attachEvent("onclick", handleClick);
// }

// function handleClick(event) {
//     event = event || window.event;
//     event.target = event.target || event.srcElement;

//     var element = event.target;

//     // Climb up the document tree from the target of the event
//     while (element) {
//         if (element.nodeName === "BUTTON" && /foo/.test(element.className)) {
//             // The user clicked on a <button> or clicked on an element inside a <button>
//             // with a class name called "foo"
//             doSomething(element);
//             break;
//         }

//         element = element.parentNode;
//     }
// }

// function doSomething(button) {
//     // do something with button
// }

// function goToResults(e) {
//     e.preventDefault
//     const fetchButton = document.getElementById("fetch-button");
//     fetchButton.addEventListener("click", () => {
//     window.location.href = "results.html"
//   })

// //Loop over the data to generate a table, each table row will have a link to the repo url
// for (var i = 0; i < filtered.length; i++) {
//     // Creating elements, tablerow, tabledata, and anchor
//     var createTableRow = document.createElement('tr');
//     var tableData = document.createElement('td');
//     var img = document.createElement('img')
//     var h2 = document.createElement("h2")
//     var link = document.createElement('a');
    
//     // Setting the text of link and the href of the link
//     link.textContent = filtered[i].breed_group
//     // when Links get clicked on you go to results and the dog name = breedInput
//     //TODO: 
//     link.href = "https://en.wikipedia.org/wiki/" + filtered[i].name;

//     // Appending the link to the tabledata and then appending the tabledata to the tablerow
//     // The tablerow then gets appended to the tablebody
//     tableData.appendChild(link);
//     createTableRow.appendChild(tableData);
//     tableBody.appendChild(createTableRow);
// }

// fetch(imgByBreed)
// 		.then((response) => {
// 			return response.json()
// 		})
// 		.then((url) => {
//             console.log(image);
//             var image = document.createElement("img");
//             image.src = url.message;
//             console.log(image.src);
//             document.getElementById("matchCard1").appendChild(image);
//         })
//     


// appendDogItem()