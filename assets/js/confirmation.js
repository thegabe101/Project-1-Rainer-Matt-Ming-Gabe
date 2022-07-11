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

// function appendDogItems() {
//     var imgOfDog = `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`;
//     fetch(imgOfDog)
// 		.then((response) => {
// 			return response.json()
// 		})
// 		.then((url) => {
//             console.log(url.message);
//             var image = document.createElement("img");
//             image.src = url.message;
//             console.log(image.src);
//             document.getElementById("dogImage").appendChild(image);
//         })
    
// 	var wikiContent = localStorage.getItem('wiki')
// 	console.log(wikiContent)
// 	$('.title').text(title)
// 	document.getElementById("wikiContentP").textContent = wikiContent;
//     localStorage.clear();
// }

// var postmanAPIimgURL = `https://api.thedogapi.com/v1/images/:image_id/breeds`
// var image = 
var imgByBreed = "https://dog.ceo/api/breed/affenpinscher/images/random"

function appendDogItem() {
    // var imgByBreed = `https://dog.ceo/api/breed/${breedName}/images/random`

fetch(imgByBreed)
		.then((response) => {
			return response.json()
		})
		.then((url) => {
            console.log(image);
            var image = document.createElement("img");
            image.src = url.message;
            console.log(image.src);
            document.getElementById("matchCard1").appendChild(image);
        })
    }


appendDogItem()