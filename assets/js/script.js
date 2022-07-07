const dogBreedAPIKey = "5982d498-0ef4-4fe3-96b7-a547ee0abaf1"
const NPSAPIKey = "q8ZT2POs7KbwwJesIE4eQrfakQMCrWpZ2SKC75U0"


var dogIMGrequest = 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'
var NPSRequest = "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=q8ZT2POs7KbwwJesIE4eQrfakQMCrWpZ2SKC75U0"


function fetchData (){
fetch(dogIMGrequest)
.then(function (response) {
    if (!response.ok) {
        console.log("error retrieving data")
    }
    else return response.json();
})
.then(function (data) {
    console.log(data)})
}

fetchData();

function fetchData2 (){
    fetch(NPSRequest)
    .then(function (response) {
        if (!response.ok) {
            console.log("error retrieving data")
        }
        else return response.json();
    })
    .then(function (data) {
        console.log(data)})
    }
    
fetchData2();