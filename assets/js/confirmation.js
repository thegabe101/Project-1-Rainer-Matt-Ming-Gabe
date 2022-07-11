//in other script for the new page:

const resultFromStorage = JSON.parse(localStorage.getItem("searchResult"));

function appendDogInfo() {
    for (var i = 0; i < resultFromStorage.length; i++) {

        var doggyCard = $(`
                        <article class="matchCard" id="matchCard${i}">
                            <img src="${resultFromStorage[i].image.url}" alt="Picture of dog" class = "matchImg">
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
    var button = document.getElementsByClassName('btn');
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function () {
            console.log('clicked card button ' + i);
            var breedName = document.getElementById('pId' + i).innerHTML
            console.log(breedName.toLowerCase())
            localStorage.setItem('breed', breedName.toLowerCase())

            setTimeout(function () {
                window.location.href = "results.html"
            }, 1000);

        })
    }
}


document.getElementById("fetch-button0").addEventListener("click", function () {
    console.log('clicked first card button');
    var breedName = document.getElementById('')
});
