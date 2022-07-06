var requestUrl = 'https://api.spacexdata.com/v5/launches/latest'

function fetchData (){
fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)})
}

fetchData();