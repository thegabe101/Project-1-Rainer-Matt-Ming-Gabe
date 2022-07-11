
loadChooseABreed();

// Result page displays a random image of the dog breed, the dog breed name, and its wikipedia content 
function loadChooseABreed() {
    // Store localStorage values
    var breedName = localStorage.getItem('breed');
    var title = localStorage.getItem("title");
    var wikiContent = localStorage.getItem('wiki');

    console.log(breedName);
    // imgBreed stores the dog images API, and display the images randomly.
    var imgBreed = `https://dog.ceo/api/breed/${breedName}/images/random`;
    fetch(imgBreed)
		.then((response) => {
			return response.json();
		})
		.then((url) => {
            console.log(url.message);
            // Creates an image element and append under the element ID: dogImage
            var image = document.createElement("img");
            // image src obtains the random image url 
            image.src = url.message;    
            console.log(image.src);
            document.getElementById("dogImage").appendChild(image);
        })
    $('.title').text(title);
    
    console.log(wikiContent);
    // The title contains the dog breed name
    // Wikipedia content is stored in element id - wikiContentP (paragraph)
    document.getElementById("wikiContentP").textContent = wikiContent;
    // Reset localStorage keys and values
    localStorage.clear();
}

