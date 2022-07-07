const dogBreedAPIKey = "5982d498-0ef4-4fe3-96b7-a547ee0abaf1"

var dogBreed = 'https://dog.ceo/api/breeds/list/all'
var imgBreed = 'https://dog.ceo/api/breed/hound/images'

// function getParkApi() {
// 	let queryURL = 'https://data.seattle.gov/resource/2cer-njie.json'
// 	fetch(queryURL)
// 		.then(function (response) {
// 			return response.json()
// 		})
// 		.then(function (data) {
// 			console.log(data)
// 			console.log(data[0].feature_id)
// 			for (let i = 0; i < 1000; i++) {
// 				if (data[i].feature_id == '12') {
// 					console.log(data[i].name)
// 					console.log(data[i].xpos)
// 					console.log(data[i].ypos)
// 				}
// 			}
// 		})
// }

fetch (dogBreed)
    .then((response)=> {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error ('network response error');
        }
    })
    .then (data => {
        console.log(data);
            printDog (data)
    })
            .catch((error) => console.error("FETCH ERROR:", error));

        function printDog(data) {
            const breedType = data.message.corgi[0];
            console.log(breedType);
            const breedTypeDiv = document.getElementById("breedName");
            breedTypeDiv.innerHTML = breedType;
    }
//dropdown menu for breed group
var options
document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.dropdown-trigger')
	var instances = M.Dropdown.init(elems)
})

// getParkApi()