var tableBody = document.getElementById('repo-table')
var fetchButton = document.getElementById('fetch-button')
var small = 22
var medium = 50
var large = 100
var dogSizeValueInteger = 0
var dogMinimumAgeInteger = 0

function getApi() {
	// fetch request gets a list of all the repos for the node.js organization
	var postmanAPIURL = 'https://api.thedogapi.com/v1/breeds'

	fetch(postmanAPIURL)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			function findDogTemperament() {
				var temperamentChoiceEl = document.getElementById('temperamentInput')
				var temperamentValue = temperamentChoiceEl.value
				console.log('You would like your dog to be ' + temperamentValue + '.')
				localStorage.setItem(
					'temperament_Value',
					temperamentValue.toLowerCase()
				)
			}

			findDogTemperament()

			function findRadioBreedValue() {
				var breeds = document.getElementsByName('group1')
				var breed_value
				for (i = 0; i < breeds.length; i++) {
					if (breeds[i].checked) {
						// console.log("breeds[i]: " + breeds[i])
						breed_value = breeds[i].value
						// console.log("CHOSEN ONE: " + breed_value);
						localStorage.setItem('breed_value', breed_value.toLowerCase())
					}
				}
			}

			findRadioBreedValue()

			function findDogSizeValue() {
				var dogSize = document.getElementById('doggoSize')
				// change dogSizeValue to dogSizeValueCategory ex. small med large -MHH 7/10/2022
				var dogSizeValueCategory = dogSize.options[dogSize.selectedIndex].value
				if (dogSizeValueCategory == 'Medium') {
					dogSizeValueInteger = medium
				} else if (dogSizeValueCategory === 'Small') {
					dogSizeValueInteger = small
				} else {
					dogSizeValueInteger = large
				}
			}
			
			findDogSizeValue()

			//FUNCTION Added 10:03 Am 7/10/2022 will test. -MH
			function findDogLifeSpan() {
				var dogLifeSpanEl = document.getElementById('dogLifeSpanSlider')
				var dogLifeSpanValue = dogLifeSpanEl.value
				// console.log(dogLifeSpanValue);
				//Turns a string into an integer
				dogLifeSpanValue = parseInt(dogLifeSpanValue)
				// console.log(dogLifeSpanValue)
				dogMinimumAgeInteger = dogLifeSpanValue

				// localStorage.setItem('breed_life_span', dogLifeSpanValue)
			}
			findDogLifeSpan()

			var cleanedData = data.filter((breed) => breed.breed_group)
			// Change breed.weight to Simple Integers
			for (let i = 0; i < cleanedData.length; i++) {
				var breed = cleanedData[i]
				var stringWeightData = cleanedData[i].weight.imperial
				var arrayWeightData = stringWeightData.split(' ', 5)
				var stringLifeSpan = cleanedData[i].life_span
				var parsedLifeSpan = parseInt(stringLifeSpan)
				if (arrayWeightData.length < 2) {
					var weightValue = arrayWeightData[0]
					breed.weight = parseInt(weightValue)
				} else {
					var weightValue = arrayWeightData[2]
					breed.weight = parseInt(weightValue)
				}
			}
			var chosenBreed = localStorage.getItem('breed_value')
			// creates a new array with the matching indexes
			var includedBreeds = cleanedData.filter((breed) => {
				return breed.breed_group.toLowerCase().includes(chosenBreed)
			})

			// revises the array with additional filtering criteria
			includedBreeds = includedBreeds.filter((breed) => {
				console.log(breed.weight, dogSizeValueInteger)
				if (dogSizeValueInteger === 50) {
					return breed.weight > 22 && breed.weight < 50
				} else if (dogSizeValueInteger === 100) {
					return breed.weight > 50
				} else {
					return breed.weight < dogSizeValueInteger
				}
			})
			console.log(includedBreeds)

			includedBreeds = includedBreeds.filter((breed) => {
				return parsedLifeSpan >= dogMinimumAgeInteger
			})
			var chosenTemperament = localStorage.getItem('temperament_Value')
			includedBreeds = includedBreeds.filter((breed) => {
				console.log(chosenTemperament)
				return breed.temperament.toLowerCase().includes(chosenTemperament)
			})

			localStorage.setItem('searchResult', JSON.stringify(includedBreeds))

			//in other script for the new page:
			const resultFromStorage = JSON.parse(localStorage.getItem('searchResult'))
			console.log(resultFromStorage)
			if (resultFromStorage.length === 0) {
				console.log('no dog fits criteria')
				$('#error').text('No dog fits criteria')
			} else {
				window.location.href = 'confirmation.html'
			}
		})
}

document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('select')
	var instances = M.FormSelect.init(elems, options)
})

fetchButton.addEventListener('click', getApi)
