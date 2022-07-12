loadChooseABreed()
function loadChooseABreed() {
	var breedName = localStorage.getItem('breed')
	var title = localStorage.getItem('title')
	console.log(breedName)

	let url = 'https://en.wikipedia.org/w/api.php?'
	var breedGroup = breedName.split(' ').join('%20')
	const words = breedName.split(' ')

	var imageName = words
		.map((word) => {
			return word[0].toUpperCase() + word.substring(1)
		})
		.join('%20')

	console.log(
		words
			.map((word) => {
				return word[0].toUpperCase() + word.substring(1)
			})
			.join('%20')
	)
	const params = {
		action: 'query',
		format: 'json', //requests the data in JSON format
		prop: 'images',
		titles: breedGroup,
		origin: '*',
	}

	Object.keys(params).forEach((key) => {
		url += `&${key}=${params[key]}`
	})
	var rawUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&list=&titles=${imageName}&pithumbsize=500&origin=*`

	fetch(rawUrl)
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			console.log(data)
			let Info = Object.keys(data.query.pages).map(
				(pageid) => data.query.pages[pageid].thumbnail.source
			)
			console.log(Info)
			var image = document.createElement('img')
			image.src = Info
			document.getElementById('dogImage').appendChild(image)
		})
		.catch((error) => {
			aaa()
			console.log(error)
		})

	var wikiContent = localStorage.getItem('wiki')
	console.log(wikiContent)
	$('.title').text(title)
	document.getElementById('wikiContentP').textContent = wikiContent
}

var image = 'https://images.dog.ceo/breeds/hound-ibizan'
var imgBreed = 'https://dog.ceo/api/breed/affenpinscher/images/random'

function aaa() {
	breedName = localStorage.getItem('breed') + ' (dog)'
	var breedGroup = breedName.split(' ').join('%20')
	const words = breedName.split(' ')

	var imageName = words
		.map((word) => {
			return word[0].toUpperCase() + word.substring(1)
		})
		.join('%20')

	console.log(
		'CATCH' +
			words
				.map((word) => {
					return word[0].toUpperCase() + word.substring(1)
				})
				.join('%20')
	)
	var rawUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&list=&titles=${imageName}&pithumbsize=500&origin=*`
	fetch(rawUrl)
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			console.log(data)
			let Info = Object.keys(data.query.pages).map(
				(pageid) => data.query.pages[pageid].thumbnail.source
			)
			console.log(Info)
			var image = document.createElement('img')
			image.src = Info
			document.getElementById('dogImage').appendChild(image)
		})
		.catch((error) => {
			console.log(error)
		})
}
