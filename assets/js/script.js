const dogBreedAPIKey = "5982d498-0ef4-4fe3-96b7-a547ee0abaf1"

var dogBreed = 'https://dog.ceo/api/breeds/list/all'
var imgBreed = 'https://dog.ceo/api/breed/hound/images'
var dogBreeds = ['affenpinscher', 'african', 'airendale', 'akita', 'appenzeller', 'australian', 'basenji', 'beagle', 'bluetick', 'borzoi', 'bouvier', 'boxer', 'brabancon', 'briard', 'buhund', 'bulldog', 'bullterrier', 'cattledog', 'chihuahua', 'chow', 'clumber', 'cockapoo', 'collie', 'coonhound', 'corgi', 'cotondetulear', 'dachshund', 'dalmation', 'dane', 'deerhound', 'dhole', 'dingo', 'doberman', 'elkhound', 'entlebucher', 'eskimo', 'finnish', 'frise', 'germanshepherd', 'greyhound', 'groenendael', 'havanese', 'hound', 'husky', 'keeshond', 'kelpie', 'komondor', 'kuvasz', 'labradoodle', 'labrador', 'leonberg', 'lhasa', 'malamute', 'malinois', 'maltese', 'mastiff', 'mexicanhairless', 'mix', 'mountain', 'newfoundland', 'otterhound', 'ovcharka', 'papillon', 'pekinese', 'pembroke', 'pinscher', 'pitbull', 'pointer', 'pomeranian', 'poodle', 'pug', 'puggle', 'pyrenees', 'redbone', 'retriever', 'ridgeback', 'rottweiler', 'saluki', 'samoyed', 'schipperke', 'schnauzer', 'setter', 'sharpei', 'sheepdog', 'shiba', 'shihtzu', 'spaniel', 'springer', 'stbernard', 'terrier', 'tervuren', 'vizsla', 'waterdog', 'weimaraner', 'whippet', 'wolfhound'];

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

fetch (dogBreed)
    .then((response)=> {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error ('network response error');
        }
    })
    .then (data => {
        console.log(data);
            printDog (data)
    })
            .catch((error) => console.error("FETCH ERROR:", error));

        function printDog(data) {
            const breedType = data.message.corgi[0];
            console.log(breedType);
            const breedTypeDiv = document.getElementById("breedName");
            breedTypeDiv.innerHTML = breedType;
    }
//dropdown menu for breed group
var options
document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.dropdown-trigger')
	var instances = M.Dropdown.init(elems)
})

// getParkApi()

function autocomplete(inp, arr) {
	var currentFocus;
	inp.addEventListener("input", function(e) {
		var a, b, i, val = this.value;
		closeAllLists();
		if (!val) { return false;}
		currentFocus = -1;
		a = document.createElement("div");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		this.parentNode.appendChild(a);
		for (i = 0; i < arr.length; i++) {
		  if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
			b = document.createElement("div");
			b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
			b.innerHTML += arr[i].substr(val.length);
			b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
				b.addEventListener("click", function(e) {
				inp.value = this.getElementsByTagName("input")[0].value;
				closeAllLists();
			});
			a.appendChild(b);
		  }
		}
	});
	inp.addEventListener("keydown", function(e) {
		var x = document.getElementById(this.id + "autocomplete-list");
		if (x) x = x.getElementsByTagName("div");
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
	});
	function addActive(x) {
	  if (!x) return false;
	  removeActive(x);
	  if (currentFocus >= x.length) currentFocus = 0;
	  if (currentFocus < 0) currentFocus = (x.length - 1);
	  x[currentFocus].classList.add("autocomplete-active");
	}
	function removeActive(x) {
	  for (var i = 0; i < x.length; i++) {
		x[i].classList.remove("autocomplete-active");
	  }
	}
	function closeAllLists(elmnt) {
	  var x = document.getElementsByClassName("autocomplete-items");
	  for (var i = 0; i < x.length; i++) {
		if (elmnt != x[i] && elmnt != inp) {
		x[i].parentNode.removeChild(x[i]);
	  }
	}
  }
  document.addEventListener("click", function (e) {
	  closeAllLists(e.target);
  });
  }

  autocomplete(document.getElementById("breedInput"), dogBreeds);




// Wiki API matching the closest name 
  function wikiSearchBreed(breedGroup) {
    let url = "https://en.wikipedia.org/w/api.php?"
    const params = {
        action: "query",    
        format: "json",     //requests the data in JSON format
        list: "search",   
        utf8: "1",      
        srsearch: breedGroup,
        origin: "*"
    }

    Object.keys(params).forEach((key) => {
        url += `&${key}=${params[key]}`
    })

    fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {  
        console.log(data);
        let search = data.query.search[0].title;
        console.log(search);
        fetchWikiExtract(search);
    })
    .catch((error) => {
        console.log(error)
    })
}

let dogBreed = 'golden retriever'.split(' ').join("%20");
wikiSearchBreed(dogBreed);


function fetchWikiExtract(param) {
    let url = "https://en.wikipedia.org/w/api.php?";
    const params = {
        action: "query",    
        format: "json",     //requests the data in JSON format
        titles: param,
        prop: "extracts",   //an 'extract' is the type of property being requested
        exintro: "1",    //requests the first content from the wikipedia page    
        explaintext: "1",
        origin: "*"
    }

    Object.keys(params).forEach((key) => {
        url += `&${key}=${params[key]}`
    })

fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {  
        console.log(data);
        let pages = data.query.pages;
        alert(Object.keys(pages).map(id => pages[id].extract));
    })
    .catch((error) => {
        console.log(error)
    })
}

