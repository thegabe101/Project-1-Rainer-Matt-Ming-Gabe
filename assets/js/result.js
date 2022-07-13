loadChooseABreed()

// Displays the title, an image of the breed, and its wikipedia content on result page
function loadChooseABreed() {
	var breedName = localStorage.getItem('breed')
	var doggyImage = localStorage.getItem('coolImage')
	console.log(doggyImage)
	var title = localStorage.getItem('title')
	console.log(breedName)
	var imgBreed = `https://dog.ceo/api/breed/${breedName}/images/random`
    var wikiContent = localStorage.getItem('wiki')
	var nameGenn = localStorage.getItem('gennedName')
	console.log(wikiContent)
	$('.title').text(title)
	document.getElementById('wikiContentP').textContent = wikiContent
	$('.doggyName').text(nameGenn)
	

	if (doggyImage == null) {
		fetch(imgBreed)
			.then((response) => {
				return response.json()
			})
			.then((url) => {
				console.log(url);
				if (url.message != 'Breed not found (master breed does not exist)')
				{
					var image = document.createElement("img")
					image.src = url.message;
					console.log(image.src);
					document.getElementById("dogImage").appendChild(image)
				} else {
					return;
				}
			})
		}
	else {
		var dogImgAppend = $(`<div class="column left" id="dogImage"><img src="${doggyImage}"></div>`)
		$('#doggs').append(dogImgAppend)
	}

localStorage.clear()
}

