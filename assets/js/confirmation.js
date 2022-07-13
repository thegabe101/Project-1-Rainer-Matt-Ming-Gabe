//in other script for the new page:

const resultFromStorage = JSON.parse(localStorage.getItem('searchResult'))

function appendDogInfo() {
	for (var i = 0; i < resultFromStorage.length; i++) {
		var doggyCard = $(`
                        <article class="matchCard" id="matchCard${i}">
                            <img src="${resultFromStorage[i].image.url}" alt="Picture of dog" class = "matchImg" id = "doggyImage${i}">
                            <p class="matchContent" id = 'pId${i}'>${resultFromStorage[i].name}</p>
                            <button class="btn btn-danger" id="fetch-button${i}">Choose me!</button>
                        </article>
            `)
		$('#dog-card').append(doggyCard)
	}
	call()
}

appendDogInfo()

function call() {
	var button = document.getElementsByClassName('btn')
	for (let i = 0; i < button.length; i++) {
		button[i].addEventListener('click', function () {
			console.log('clicked card button ' + i)
			var breedName = document.getElementById('pId' + i).innerHTML
			var imageDog = document.getElementById('doggyImage'+i).src
			console.log(imageDog)
			console.log(breedName.toLowerCase())
			localStorage.setItem('coolImage', imageDog)
			localStorage.setItem('breed', breedName.toLowerCase())

			wikiSearchBreed(breedName)

			setTimeout(function () {
				window.location.href = 'results.html'
			}, 1000)
		})
	}
}

function wikiSearchBreed(breedGroup) {
	// the dog breed group's name will have %20 between spacing (wiki requirement), and add (dog) for precision
	breedGroup = breedGroup.split(' ').join('%20') + '(dog)'
	console.log(breedGroup)

	// url = https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${'breedGroup'}&origin=*
	var url = 'https://en.wikipedia.org/w/api.php?'
	const params = {
		action: 'query',
		format: 'json', //requests the data in JSON format
		list: 'search', //forms a search list of the given srsearch
		utf8: '1',
		srsearch: breedGroup, // searches for page titles or content matching this value.
		origin: '*', //required
	}

	// for the object params, place '&' before object key, and '=' before the object value
	Object.keys(params).forEach((key) => {
		url += `&${key}=${params[key]}`
	})
	fetch(url)
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			console.log(data)
			var search = data.query.search[0].title
			console.log(search)
			// store localStorage value of the first wiki title appeared in search list
			localStorage.setItem('title', search)
			// go to function
			fetchWikiExtract(search)
		})
		.catch((error) => {
			console.log(error)
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
	}
	// for the object params, place '&' before object key, and '=' before the object value
	Object.keys(params).forEach((key) => {
		url += `&${key}=${params[key]}`
	})
	fetch(url)
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			console.log(data)
			var pages = data.query.pages
			// wikiInfo stores in the first content from the wikipedia page
			var wikiInfo = Object.keys(pages).map((id) => pages[id].extract)
			console.log(wikiInfo.toString())
			// convert to string type
			resultWikiText = wikiInfo.toString()
			// localStorage the wikipedia content for result page
			localStorage.setItem('wiki', resultWikiText)
			// go to results.html page
			window.location.href = 'results.html'
		})
		.catch((error) => {
			console.log(error)
		})
		var image2 = document.createElement('img') 
	if (doggyImage != "") {
		image2.src = doggyImage
		document.getElementById('dogImage').appendChild(image2)
	}
	var wikiContent = localStorage.getItem('wiki')
	console.log(wikiContent)
	$('.title').text(title)
	document.getElementById('wikiContentP').textContent = wikiContent
}



