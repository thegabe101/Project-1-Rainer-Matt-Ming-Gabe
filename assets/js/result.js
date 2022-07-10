
loadChooseABreed()
function loadChooseABreed() {
    var breedName = localStorage.getItem('breed');
    var title = localStorage.getItem("title");
    // https://dog.ceo/api/breed/hound/images/random
    var imgBreed = `https://dog.ceo/api/breed/${breedName}/images/random`;
    fetch(imgBreed)
		.then((response) => {
			return response.json()
		})
		.then((url) => {
            console.log(url.message);
            var image = document.createElement("img");
            image.src = url.message;
            console.log(image.src);
            document.getElementById("dogImage").appendChild(image);
        })
    
	var wikiContent = localStorage.getItem('wiki')
	console.log(wikiContent)
	$('.title').text(title)
	document.getElementById("wikiContentP").textContent = wikiContent;
    localStorage.clear();
}

var image = 'https://images.dog.ceo/breeds/hound-ibizan'
var imgBreed = 'https://dog.ceo/api/breed/affenpinscher/images/random';
