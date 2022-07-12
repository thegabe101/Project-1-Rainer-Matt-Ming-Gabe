var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');
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
            return response.json();
        })
        .then(function (data) {
            // console.log(data)
            //TODO: if statement
            // TODO: Remember to have .includes(contain user input variable.)

            function findRadioBreedValue() {
                var breeds = document.getElementsByName('group1');
                var breed_value;
                for (i = 0; i < breeds.length; i++) {
                    if (breeds[i].checked) {
                        // console.log("breeds[i]: " + breeds[i])
                        breed_value = breeds[i].value
                        // console.log("CHOSEN ONE: " + breed_value);
                        localStorage.setItem('breed_value', breed_value.toLowerCase())
                    }
                }
            }

            findRadioBreedValue();

            function findDogSizeValue() {
                var dogSize = document.getElementById('doggoSize');
                // change dogSizeValue to dogSizeValueCategory ex. small med large -MHH 7/10/2022
                var dogSizeValueCategory = dogSize.options[dogSize.selectedIndex].value;
                // console.log(dogSizeValueCategory)
                if (dogSizeValueCategory == "Medium") {
                    dogSizeValueInteger = medium
                    // console.log(dogSizeValueInteger)
                } else if (dogSizeValueCategory === "Small") {
                    dogSizeValueInteger = small
                    // console.log(dogSizeValueInteger)
                } else {
                    dogSizeValueInteger = large
                    // console.log(dogSizeValueInteger)
                }
            }
            findDogSizeValue();

            //FUNCTION Added 10:03 Am 7/10/2022 will test. -MH
            function findDogLifeSpan() {
                var dogLifeSpanEl = document.getElementById('dogLifeSpanSlider');
                var dogLifeSpanValue = dogLifeSpanEl.value
                //Turns a string into an integer
                dogLifeSpanValue = parseInt(dogLifeSpanValue)
                dogMinimumAgeInteger = dogLifeSpanValue

                // localStorage.setItem('breed_life_span', dogLifeSpanValue)
            }
            findDogLifeSpan()

            var cleanedData = data.filter(breed => breed.breed_group)
            // Change breed.weight to Simple Integers
            for (let i = 0; i < cleanedData.length; i++) {
                var breed = cleanedData[i]
                var stringWeightData = cleanedData[i].weight.imperial
                var arrayWeightData = stringWeightData.split(" ", 5)
                var stringLifeSpan = cleanedData[i].life_span
                var parsedLifeSpan = parseInt(stringLifeSpan)
                // console.log(arrayWeightData)
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

                return breed.weight < dogSizeValueInteger
            })
            console.log(includedBreeds)

            includedBreeds = includedBreeds.filter((breed) => {


                return parsedLifeSpan >= dogMinimumAgeInteger
            })



            localStorage.setItem("searchResult", JSON.stringify(includedBreeds))

            //in other script for the new page:
            const resultFromStorage = JSON.parse(localStorage.getItem("searchResult"));
            console.log(resultFromStorage)


            // window.location.href = "confirmation.html"

        });
}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});



fetchButton.addEventListener('click', getApi);