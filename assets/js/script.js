// const dogBreedAPIKey = '5982d498-0ef4-4fe3-96b7-a547ee0abaf1'

// var breed_id = 'https://api.thedogapi.com/v1/breeds/:breed_id'
// var randomDogIMG =
// 	'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'
// // var dogIMGrequestSpecificBreed = "https://api.thedogapi.com//api/v1/images/?limit=10";
// // var getBreedID = "https://api.thedogapi.com/v1/breeds/:breed_id/";

// fetch(breed_id)
// 	.then((response) => {
// 		if (response.ok) {
// 			return response.json()
// 		} else {
// 			throw new Error('NETWORK RESPONSE ERROR')
// 		}
// 	})
// 	.then((data) => {
// 		console.log(data)
// 		showDog(data)
// 	})
// 	.catch((error) => console.error('FETCH ERROR:', error))

// function showDog(data) {
// 	let newDog
// 	if (typeof data === Array) {
// 		newDog = data[1]
// 	} else {
// 		newDog = data
// 	}
// 	console.log(newDog)
// 	const dogContainer = document.getElementById('container')
// 	const dogImg = document.createElement('img')
// 	dogImg.src = newDog.url
// 	dogContainer.appendChild(dogImg)
// }

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

var options
document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.dropdown-trigger')
	var instances = M.Dropdown.init(elems)
})

// getParkApi()