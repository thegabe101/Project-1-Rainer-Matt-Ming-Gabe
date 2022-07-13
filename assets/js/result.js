loadChooseABreed()
function loadChooseABreed() {
	var breedName = localStorage.getItem('breed')
	var doggyImage = localStorage.getItem('coolImage')
	var title = localStorage.getItem('title')

	var imgBreed = `https://dog.ceo/api/breed/${breedName}/images/random`;
    fetch(imgBreed)
		.then((response) => {
			return response.json()
		})
		.then((url) => {
            console.log(url.message);
			if (url.message != null)
			{
				var image = document.createElement("img");
            	image.src = url.message;
            	console.log(image.src);
            	document.getElementById("dogImage").appendChild(image);
			} else {
				return;
			}
        })
	var image2 = document.createElement('img')
	console.log(doggyImage);
	if (doggyImage != "") {
		image2.src = doggyImage
		document.getElementById('dogImage').appendChild(image2)
	}
	var wikiContent = localStorage.getItem('wiki')
	console.log(wikiContent)
	$('.title').text(title)
	document.getElementById('wikiContentP').textContent = wikiContent
	localStorage.clear()
}
