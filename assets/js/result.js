loadChooseABreed()
function loadChooseABreed() {
	var breedName = localStorage.getItem('breed')
	var doggyImage = localStorage.getItem('coolImage')
	console.log(doggyImage)
	var title = localStorage.getItem('title')
	console.log(breedName)
	var imgBreed = `https://dog.ceo/api/breed/${breedName}/images/random`;
    var wikiContent = localStorage.getItem('wiki')
	console.log(wikiContent)
	$('.title').text(title)
	document.getElementById('wikiContentP').textContent = wikiContent
	// localStorage.clear()
// 	var dogImgAppend = $(`
// 	<div class="column left" id="dogImage"><img src="${doggyImage}"></div>
// `)
if (doggyImage == null) {
	fetch(imgBreed)
		.then((response) => {
			return response.json()
		})
		.then((url) => {
            console.log(url);
			if (url.message != 'Breed not found (master breed does not exist)')
			{
				var image = document.createElement("img");
            	image.src = url.message;
            	console.log(image.src);
            	document.getElementById("dogImage").appendChild(image);
			} else {
				return;
			}
        })
	}
	else {
		var dogImgAppend = $(`
		<div class="column left" id="dogImage"><img src="${doggyImage}"></div>
`)
$('#doggs').append(dogImgAppend)}
localStorage.clear()
// 	// var image2 = document.createElement('img')
// 	// if (doggyImage != "" && image2.src != null) {
// 	// 	image2.src = doggyImage
// 	// 	document.getElementById('dogImage').appendChild(image2)
// 	// }
	}

