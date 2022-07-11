const dogBreedAPIKey = '5982d498-0ef4-4fe3-96b7-a547ee0abaf1'

var dogBreed = 'https://dog.ceo/api/breeds/list/all'
var imgBreed = 'https://dog.ceo/api/breed/hound/images'
var postmanAPIURL = 'https://api.thedogapi.com/v1/breeds?limit=172&page=0'
var dogBreeds = [ 'affenpinscher', 'african', 'airendale', 'akita', 'appenzeller', 'australian', 'basenji', 'beagle', 'bluetick', 'borzoi', 'bouvier', 'boxer', 'brabancon', 'briard', 'buhund', 'bulldog', 'bullterrier', 'cattledog', 'chihuahua', 'chow', 'clumber', 'cockapoo', 'collie', 'coonhound', 'corgi', 'cotondetulear', 'dachshund', 'dalmatian', 'dane', 'deerhound', 'dhole', 'dingo', 'doberman', 'elkhound', 'entlebucher', 'eskimo', 'finnish', 'frise', 'germanshepherd', 'greyhound', 'groenendael', 'havanese', 'hound', 'husky', 'keeshond', 'kelpie', 'komondor', 'kuvasz', 'labradoodle', 'labrador', 'leonberg', 'lhasa', 'malamute', 'malinois', 'maltese', 'mastiff', 'mexicanhairless', 'mix', 'mountain', 'newfoundland', 'otterhound', 'ovcharka', 'papillon', 'pekinese', 'pembroke', 'pinscher', 'pitbull', 'pointer', 'pomeranian', 'poodle', 'pug', 'puggle', 'pyrenees', 'redbone', 'retriever', 'ridgeback', 'rottweiler', 'saluki', 'samoyed', 'schipperke', 'schnauzer', 'setter', 'sharpei', 'sheepdog', 'shiba', 'shihtzu', 'spaniel', 'springer', 'stbernard', 'terrier', 'tervuren', 'vizsla', 'waterdog', 'weimaraner', 'whippet', 'wolfhound', ]
var dogTemperamentsArray = ['active', 'adaptable', 'affectionate', 'aggressive', 'agile', 'alert', 'assertive', 'athletic', 'attentive', 'bold', 'bossy', 'brave', 'bright', 'bubbly', 'calm', 'cat-like', 'cautious', 'charming', 'cheerful', 'clever', 'clownish', 'companionable', 'confident', 'courageous', 'devoted', 'dignified', 'docile', 'dominant', 'eager', 'easy-going', 'energetic', 'even tempered', 'extroverted', 'faithful', 'familial', 'fearless', 'friendly', 'fun-loving', 'gentle', 'good-natured', 'happy', 'hard-working', 'hardy', 'independent', 'inquisitive', 'intelligent', 'joyful', 'keen', 'kind', 'lively', 'loving', 'loyal', 'mischievous', 'obedient', 'opinionated', 'outgoing', 'patient', 'playful', 'protective', 'proud', 'quick', 'quiet', 'rational', 'receptive', 'reserved', 'responsive', 'self-assured', 'self-confidence', 'sociable', 'spirited', 'spunky', 'stable', 'steady', 'strong', 'strong-willed', 'stubborn', 'suspicious', 'sweet-tempered', 'tenacious', 'territorial', 'tolerant', 'trainable', 'vocal', 'watchful']

// fetch(postmanAPIURL)
// 	.then((res) => res.json())
// 	.then((data) => {
// 		console.log(data)

// 		const jsonToString = JSON.stringify(data[1].breed_group)
// 		console.log('jsonToString', jsonToString)

var options
document.addEventListener('DOMContentLoaded', function (e) {
	e.preventDefault();
	var elems = document.querySelectorAll('.dropdown-trigger');
	var instances = M.Dropdown.init(elems);

})

function autocompvare(inp, arr) {
	var currentFocus;
	inp.addEventListener('input', function (e) {
		console.log('in input');
		var a,
			b,
			i,
			val = this.value
		closeAllLists();
		if (!val) {
			return false;
		}
		currentFocus = -1;
		a = document.createElement('div');
		a.setAttribute('id', this.id + 'autocompvare-list');
		a.setAttribute('class', 'autocompvare-items');
		this.parentNode.appendChild(a);
		for (i = 0; i < arr.length; i++) {
			if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
				b = document.createElement('div');
				b.innerHTML = '<strong>' + arr[i].substr(0, val.length) + '</strong>';
				b.innerHTML += arr[i].substr(val.length);
				b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
				b.addEventListener('click', function (e) {
					inp.value = this.getElementsByTagName('input')[0].value;
					closeAllLists();
				})
				a.appendChild(b);

			}
		}
	})
	inp.addEventListener('keydown', function (e) {
		console.log('in keydown');
		var x = document.getElementById(this.id + 'autocompvare-list')
		if (x) x = x.getElementsByTagName('div');
		if (e.keyCode == 40) {
			currentFocus++;
			addActive(x);
		} else if (e.keyCode == 38) {
			currentFocus--;
			addActive(x);
		} else if (e.keyCode == 13) {
			e.preventDefault();
			if (currentFocus > -1) {
				if (x) x[currentFocus].click();
			}
		}
	})
	function addActive(x) {
		if (!x) return false;
		removeActive(x)
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = x.length - 1;
		x[currentFocus].classList.add('autocompvare-active');

	}
	function removeActive(x) {
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove('autocompvare-active');
		}
	}
	function closeAllLists(elmnt) {
		var x = document.getElementsByClassName('autocompvare-items');
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inp) {
				x[i].parentNode.removeChild(x[i]);
			}
		}
	}
	document.addEventListener('click', function (e) {
		closeAllLists(e.target);
	})
} 
// This Checks if ID breedInput is available then do the autocompvare
// Autocompvare function will only run in inputs.html
if (document.getElementById('breedInput')) {
	autocompvare(document.getElementById('breedInput'), dogBreeds);
}


// If choose a breed form exist, goes to result page and execute wikipedia search
if (document.getElementById('wikiDogBtn')) {
	// Choose a breed form function
	document.getElementById('wikiDogBtn').addEventListener('click', function () {
		var text = document.getElementById('breedInput').value;
		// if else check if the dogBreeds array includes user input text
		if (dogBreeds.includes(text)) {
			// localStorage value under key breed
			localStorage.setItem('breed',text)
			// Runs the wikipedia function 
			wikiSearchBreed(text);
		} else {
			var paragraph = document.createElement('p');
			paragraph.innerHTML = 'NOT IN ARRAY';
			document.getElementById('wikiDogBtn').appendChild(paragraph);
		}
	})
}

// search the dog breed group's name in wikipedia search list, and stores in breed group's name for random image in result page.

if (document.getElementById('temperamentInput')) {
	autocomplete(document.getElementById('temperamentInput'), dogTemperamentsArray)
}
//breedgROUP = TEXT

function wikiSearchBreed(breedGroup) {
	// the dog breed group's name will have %20 between spacing (wiki requirement), and add (dog) for precision
	breedGroup = breedGroup.split(' ').join('%20') +('(dog)');
	console.log(breedGroup);
	// searchWikiImage stores in the breed group's name
	var searchWikiImage = breedGroup.replace('(dog)','');
	console.log(searchWikiImage);
	// store searchWikiImage value for random image in result page
	localStorage.setItem('breed',searchWikiImage);

	// url = https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${'breedGroup'}&origin=*
	var url = 'https://en.wikipedia.org/w/api.php?'
	const params = {
		action: 'query',
		format: 'json', //requests the data in JSON format
		list: 'search', //forms a search list of the given srsearch
		utf8: '1',
		srsearch: breedGroup, // searches for page titles or content matching this value.
		origin: '*',	//required  
	};

	// for the object params, place '&' before object key, and '=' before the object value
	Object.keys(params).forEach((key) => {
		url += `&${key}=${params[key]}`;
	})
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
			var search = data.query.search[0].title;
			console.log(search);
			// store localStorage value of the first wiki title appeared in search list
			localStorage.setItem("title", search);
			// go to function 
			fetchWikiExtract(search);
		})
		.catch((error) => {
			console.log(error);
		})
}

// Fetches the wiki information and post the content onto the result page
function fetchWikiExtract(wikiTitle) {
	// url = https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${'param'}&prop=extracts&exintro=1&explaintext=1&origin=*
	var url = 'https://en.wikipedia.org/w/api.php?'
	const params = {
		action: 'query',
		format: 'json', //requests the data in JSON format
		titles: wikiTitle,
		prop: 'extracts', //an 'extract' is the type of property being requested
		exintro: '1', //requests the first content from the wikipedia page
		explaintext: '1',
		origin: '*',
	};
	// for the object params, place '&' before object key, and '=' before the object value
	Object.keys(params).forEach((key) => {
		url += `&${key}=${params[key]}`;
	})
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
			var pages = data.query.pages;
			// wikiInfo stores in the first content from the wikipedia page
			var wikiInfo = Object.keys(pages).map((id) => pages[id].extract);
            console.log(wikiInfo.toString());
			// convert to string type
			resultWikiText = wikiInfo.toString();
			// localStorage the wikipedia content for result page
			localStorage.setItem('wiki', resultWikiText);
			// go to results.html page
			window.location.href= 'results.html';
		})
		.catch((error) => {
			console.log(error);
		})
}


//functions for dog name generation
function capFirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function generateDogName() { 
	var dogName = [ 'Abby', 'Ace', 'Addie', 'Adele', 'Annie', 'Apollo', 'Aspen', 'Bailey', 'Beamer', 'Bear', 'Belle', 'Bella', 'Birdie', 'Bling', 'Blue', 'Bogey', 'Body', 'Boomer', 'Bowen', 'Breeze', 'Brie', 'Brody', 'Buzz', 'Callaway', 'Casey', 'Cash', 'Catcher', 'Chaos', 'Chase', 'Chili', 'CiCi', 'Cody', 'Cole', 'Comet', 'Cooper', 'Cruise', 'Crush', 'Daisy', 'Dare', 'Dash', 'Dawson', 'Dazzle', 'Demi', 'Denali', 'Diva', 'Dixie', 'Echo', 'Eli', 'Ellie', 'Emmy', 'Evie', 'Finn', 'Flash', 'Frankie', 'Frisco', 'Gator', 'Georgia', 'Ginger', 'Grace', 'Haley', 'Happy', 'Harley', 'Hattie', 'Hope', 'Hunter', 'Indy', 'Jack', 'Jamie', 'Jax', 'Jazz', 'Jenna', 'Jersey', 'Jet', 'Jinx', 'JoJo', 'Josie', 'Joy', 'Juno', 'Karma', 'Kenzi', 'Kiva', 'Kona', 'Kyra', 'Lacie', 'Lark', 'Laser', 'Latte', 'Levi', 'Lilly', 'Linx', 'Logan', 'Lucy', 'Luke', 'Max', 'Mia', 'Mojo', 'Molly', 'Murphy', 'Nike', 'Nova', 'Obie', 'Ollie', 'Peach', 'Penny', 'Pepper', 'Piper', 'Prada', 'Ranger', 'Raven', 'Reggie', 'Remington', 'Riley', 'Ripley', 'Riot', 'River', 'Roxie', 'Ruby', 'Rumor', 'Salsa', 'Scarvart', 'Scout', 'Shadow', 'Shiloh', 'Skye', 'Slater', 'Sophie', 'Spark', 'Spencer', 'Spirit', 'Spring', 'Star', 'Storm', 'Strider', 'Summer', 'Tally', 'Tango', 'Tank', 'Taylor', 'Tease', 'Tessa', 'Token', 'Tori', 'Tripp', 'Trooper', 'Tucker', 'Tux', 'Whip', 'Wyatt', 'Zeke', 'Zip', ]

	var genName = capFirst(dogName[getRandomInt(0, dogName.length + 1)]) + ' ';
	document.getElementById('random_name').innerHTML = genName;

}
//end functions for dog name generation

//TODO: take user input on breed group
//TODO: fetch data
//TODO: determine where in the array the breed group lies
//TODO: run against array and compare and load dog