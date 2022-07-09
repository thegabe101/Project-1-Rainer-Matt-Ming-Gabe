const dogBreedAPIKey = '5982d498-0ef4-4fe3-96b7-a547ee0abaf1'

var dogBreed = 'https://dog.ceo/api/breeds/list/all'
var imgBreed = 'https://dog.ceo/api/breed/hound/images'
var postmanAPIURL = 'https://api.thedogapi.com/v1/breeds?limit=172&page=0'
var dogBreeds = [
	'affenpinscher',
	'african',
	'airendale',
	'akita',
	'appenzeller',
	'australian',
	'basenji',
	'beagle',
	'bluetick',
	'borzoi',
	'bouvier',
	'boxer',
	'brabancon',
	'briard',
	'buhund',
	'bulldog',
	'bullterrier',
	'cattledog',
	'chihuahua',
	'chow',
	'clumber',
	'cockapoo',
	'collie',
	'coonhound',
	'corgi',
	'cotondetulear',
	'dachshund',
	'dalmation',
	'dane',
	'deerhound',
	'dhole',
	'dingo',
	'doberman',
	'elkhound',
	'entlebucher',
	'eskimo',
	'finnish',
	'frise',
	'germanshepherd',
	'greyhound',
	'groenendael',
	'havanese',
	'hound',
	'husky',
	'keeshond',
	'kelpie',
	'komondor',
	'kuvasz',
	'labradoodle',
	'labrador',
	'leonberg',
	'lhasa',
	'malamute',
	'malinois',
	'maltese',
	'mastiff',
	'mexicanhairless',
	'mix',
	'mountain',
	'newfoundland',
	'otterhound',
	'ovcharka',
	'papillon',
	'pekinese',
	'pembroke',
	'pinscher',
	'pitbull',
	'pointer',
	'pomeranian',
	'poodle',
	'pug',
	'puggle',
	'pyrenees',
	'redbone',
	'retriever',
	'ridgeback',
	'rottweiler',
	'saluki',
	'samoyed',
	'schipperke',
	'schnauzer',
	'setter',
	'sharpei',
	'sheepdog',
	'shiba',
	'shihtzu',
	'spaniel',
	'springer',
	'stbernard',
	'terrier',
	'tervuren',
	'vizsla',
	'waterdog',
	'weimaraner',
	'whippet',
	'wolfhound',
]

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

const contentTag = document.getElementById('breedDoggo');
fetch(postmanAPIURL)
	.then(res => res.json())
	.then(data => {
		console.log(data)

		const jsonToString = JSON.stringify(data[1].breed_group);
		console.log('jsonToString', jsonToString);

		contentTag.textContent = `
    You have chosen a ${data[1].breed_group}!
    `;
		console.log("name", data[1].breed_group);
	});

var options
document.addEventListener('DOMContentLoaded', function (e) {
	e.preventDefault();
	var elems = document.querySelectorAll('.dropdown-trigger')
	var instances = M.Dropdown.init(elems)
})

function autocomplete(inp, arr) {
	var currentFocus
	inp.addEventListener('input', function (e) {
		var a,
			b,
			i,
			val = this.value
		closeAllLists()
		if (!val) {
			return false
		}
		currentFocus = -1
		a = document.createElement('div')
		a.setAttribute('id', this.id + 'autocomplete-list')
		a.setAttribute('class', 'autocomplete-items')
		this.parentNode.appendChild(a)
		for (i = 0; i < arr.length; i++) {
			if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
				b = document.createElement('div')
				b.innerHTML = '<strong>' + arr[i].substr(0, val.length) + '</strong>'
				b.innerHTML += arr[i].substr(val.length)
				b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>"
				b.addEventListener('click', function (e) {
					inp.value = this.getElementsByTagName('input')[0].value
					closeAllLists()
				})
				a.appendChild(b)
			}
		}
	})
	inp.addEventListener('keydown', function (e) {
		var x = document.getElementById(this.id + 'autocomplete-list')
		if (x) x = x.getElementsByTagName('div')
		if (e.keyCode == 40) {
			currentFocus++
			addActive(x)
		} else if (e.keyCode == 38) {
			currentFocus--
			addActive(x)
		} else if (e.keyCode == 13) {
			e.preventDefault()
			if (currentFocus > -1) {
				if (x) x[currentFocus].click()
			}
		}
	})
	function addActive(x) {
		if (!x) return false
		removeActive(x)
		if (currentFocus >= x.length) currentFocus = 0
		if (currentFocus < 0) currentFocus = x.length - 1
		x[currentFocus].classList.add('autocomplete-active')
	}
	function removeActive(x) {
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove('autocomplete-active')
		}
	}
	function closeAllLists(elmnt) {
		var x = document.getElementsByClassName('autocomplete-items')
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inp) {
				x[i].parentNode.removeChild(x[i])
			}
		}
	}
	document.addEventListener('click', function (e) {
		closeAllLists(e.target)
	})
}

autocomplete(document.getElementById('breedInput'), dogBreeds)

// Wiki API matching the closest name
function wikiSearchBreed(breedGroup) {
	let url = 'https://en.wikipedia.org/w/api.php?'
	const params = {
		action: 'query',
		format: 'json', //requests the data in JSON format
		list: 'search',
		utf8: '1',
		srsearch: breedGroup,
		origin: '*',
	}

	Object.keys(params).forEach((key) => {
		url += `&${key}=${params[key]}`
	})

	fetch(url)
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			console.log(data)
			let search = data.query.search[0].title
			console.log(search)
			fetchWikiExtract(search)
		})
		.catch((error) => {
			console.log(error)
		})
}

// let dogBreedEl = 'golden retriever'.split(' ').join('%20')
// wikiSearchBreed(dogBreedEl)

function fetchWikiExtract(param) {
	let url = 'https://en.wikipedia.org/w/api.php?'
	const params = {
		action: 'query',
		format: 'json', //requests the data in JSON format
		titles: param,
		prop: 'extracts', //an 'extract' is the type of property being requested
		exintro: '1', //requests the first content from the wikipedia page
		explaintext: '1',
		origin: '*',
	}

	Object.keys(params).forEach((key) => {
		url += `&${key}=${params[key]}`
	})

	fetch(url)
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			console.log(data)
			let pages = data.query.pages
			var wikiContent = Object.keys(pages).map((id) => pages[id].extract)

			// TODO; PASS WIKICONTENT TO NEW HTML AND GET A DOG IMAGE

			console.log(wikiContent)
		})
		.catch((error) => {
			console.log(error)
		})
}
document.getElementById('wikiDogBtn').addEventListener('click', function () {
	console.log('wiki dog button pressed')
	console.log(document.getElementById('breedInput').value)
	//if else check for breed name
	var text = document.getElementById('breedInput').value

	if (dogBreeds.includes(text)) {
		console.log('NAISUU')
		wikiSearchBreed(text)
		//
	} else {
		console.log('idiot')
		const para = document.createElement('p')
		para.innerHTML = 'NOT IN ARRAY'
		document.getElementById('wikiDogBtn').appendChild(para)
	}
})

//functions for dog name generation
function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateDogName(){
	var dogName = ['Abby',
		'Ace',
		'Addie',
		'Adele',
		'Annie',
		'Apollo',
		'Aspen',
		'Bailey',
		'Beamer',
		'Bear',
		'Belle',
		'Bella',
		'Birdie',
		'Bling',
		'Blue',
		'Bogey',
		'Body',
		'Boomer',
		'Bowen',
		'Breeze',
		'Brie',
		'Brody',
		'Buzz',
		'Callaway',
		'Casey',
		'Cash',
		'Catcher',
		'Chaos',
		'Chase',
		'Chili',
		'CiCi',
		'Cody',
		'Cole',
		'Comet',
		'Cooper',
		'Cruise',
		'Crush',
		'Daisy',
		'Dare',
		'Dash',
		'Dawson',
		'Dazzle',
		'Demi',
		'Denali',
		'Diva',
		'Dixie',
		'Echo',
		'Eli',
		'Ellie',
		'Emmy',
		'Evie',
		'Finn',
		'Flash',
		'Frankie',
		'Frisco',
		'Gator',
		'Georgia',
		'Ginger',
		'Grace',
		'Haley',
		'Happy',
		'Harley',
		'Hattie',
		'Hope',
		'Hunter',
		'Indy',
		'Jack',
		'Jamie',
		'Jax',
		'Jazz',
		'Jenna',
		'Jersey',
		'Jet',
		'Jinx',
		'JoJo',
		'Josie',
		'Joy',
		'Juno',
		'Karma',
		'Kenzi',
		'Kiva',
		'Kona',
		'Kyra',
		'Lacie',
		'Lark',
		'Laser',
		'Latte',
		'Levi',
		'Lilly',
		'Linx',
		'Logan',
		'Lucy',
		'Luke',
		'Max',
		'Mia',
		'Mojo',
		'Molly',
		'Murphy',
		'Nike',
		'Nova',
		'Obie',
		'Ollie',
		'Peach',
		'Penny',
		'Pepper',
		'Piper',
		'Prada',
		'Ranger',
		'Raven',
		'Reggie',
		'Remington',
		'Riley',
		'Ripley',
		'Riot',
		'River',
		'Roxie',
		'Ruby',
		'Rumor',
		'Salsa',
		'Scarlett',
		'Scout',
		'Shadow',
		'Shiloh',
		'Skye',
		'Slater',
		'Sophie',
		'Spark',
		'Spencer',
		'Spirit',
		'Spring',
		'Star',
		'Storm',
		'Strider',
		'Summer',
		'Tally',
		'Tango',
		'Tank',
		'Taylor',
		'Tease',
		'Tessa',
		'Token',
		'Tori',
		'Tripp',
		'Trooper',
		'Tucker',
		'Tux',
		'Whip',
		'Wyatt',
		'Zeke',
		'Zip'];

	var genName = capFirst(dogName[getRandomInt(0, dogName.length + 1)]) + ' ';
    document.getElementById("random_name").innerHTML = genName;
}
//end functions for dog name generation

//TODO: take user input on breed group 
//TODO: fetch data
//TODO: determine where in the array the breed group lies
//TODO: run against array and compare and load dog 





