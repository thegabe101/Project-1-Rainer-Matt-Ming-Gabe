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

// getParkApi()
//TODO: Incorporate this somehow.
// var tableBody = document.getElementById('repo-table');
// var fetchButton = document.getElementById('fetch-button');

// function getApi() {
//     // fetch request gets a list of all the repos for the node.js organization
//     var postmanAPIURL = 'https://api.thedogapi.com/v1/breeds'

//     fetch(postmanAPIURL)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
//             //TODO: if statement

//             //Loop over the data to generate a table, each table row will have a link to the repo url
//             for (var i = 0; i < data.length; i++) {
//                 // Creating elements, tablerow, tabledata, and anchor
//                 var createTableRow = document.createElement('tr');
//                 var tableData = document.createElement('td');
//                 var link = document.createElement('a');

//                 // Setting the text of link and the href of the link
//                 link.textContent = data[i].breed_group + " " + data[i].name + " " + data[i].life_span
//                 // when Links get clicked on you go to results and the dog name = breedInput
//                 //TODO:
//                 link.href = "https://en.wikipedia.org/wiki/" + data[i].name;

//                 // Appending the link to the tabledata and then appending the tabledata to the tablerow
//                 // The tablerow then gets appended to the tablebody
//                 tableData.appendChild(link);
//                 createTableRow.appendChild(tableData);
//                 tableBody.appendChild(createTableRow);
//             }
//         });
// }

// var tableBody = document.getElementById('repo-table');
// var fetchButton = document.getElementById('fetch-button');

// function getApi() {
//     // fetch request gets a list of all the repos for the node.js organization
//     var postmanAPIURL = 'https://api.thedogapi.com/v1/breeds'

//     fetch(postmanAPIURL)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
//             //TODO: if statement

//             //Loop over the data to generate a table, each table row will have a link to the repo url
//             for (var i = 0; i < data.length; i++) {
//                 // Creating elements, tablerow, tabledata, and anchor
//                 var createTableRow = document.createElement('tr');
//                 var tableData = document.createElement('td');
//                 var link = document.createElement('a');

//                 // Setting the text of link and the href of the link
//                 link.textContent = data[i].breed_group + " " + data[i].name + " " + data[i].life_span
//                 // when Links get clicked on you go to results and the dog name = breedInput
//                 //TODO:
//                 link.href = "https://en.wikipedia.org/wiki/" + data[i].name;

//                 // Appending the link to the tabledata and then appending the tabledata to the tablerow
//                 // The tablerow then gets appended to the tablebody
//                 tableData.appendChild(link);
//                 createTableRow.appendChild(tableData);
//                 tableBody.appendChild(createTableRow);
//             }
//         });
// }

//fetchButton.addEventListener('click', getApi)