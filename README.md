# LEMONADE STAND
## Technologies used
### Google Books API
Using it for this project was simple. The parameters I used in its URL were volumes (i.e. required) and subject (optional). Both parameters were set to search for the keyword "lemonade". This was because I wanted to append a list of book titles into the game, for the imaginative purpose of semantically relevant book recommendations.
#### AJAX
```javascript
$.ajax({
    url:'https://www.googleapis.com/books/v1/volumes?q=lemonade+subject:lemonade&key=AIzaSyBJFvXiEFoq49wCcpJ2TxL64hQbLF_Ibhs',
    success: function(json) {
        var booksArr = "";
        for (i = 0; i < json.items.length; i++) {
                booksArr += "<li>Title: " + json.items[i].volumeInfo.title + ", Author: " + json.items[i].volumeInfo.authors[0] + "<br>";
        }
        document.getElementById("book-article").innerHTML = "<ol>" + booksArr + "</ol><br>";
    }
});
```
### jQuery
```javascript
$(() => {
    // Grabbing Guide button
    const $openBtn = $('#openModal');
    // Grabbing guide element
    const $modal = $('#modal');
    // Grabbing close button
    const $closeBtn = $('#close');
    const openModal = () => {
        $modal.css('display', 'block');
    }
    $openBtn.on('click', openModal);
    
    const closeModal = () => {
        $modal.css('display', 'none');
    }
    $closeBtn.on('click', closeModal);
    setTimeout(openModal, 1);

    // View book recommendations
    const $openBooksBtn = $('#openBooks');
    const $book = $('#book');
    const $closeBooksBtn = $('#closeBooks');
    const openBook = () => {
        $book.css('display', 'block');
    }
    $openBooksBtn.on('click', openBook);
    const closeBook = () => {
        $book.css('display', 'none');
    }
    $closeBooksBtn.on('click', closeBook);
});
```
## Features & Technicalities
### Live & dynamic consumer demand
#### Price affecting demand
```javascript
let chance = Math.random() 
if (price.value <= .1) {
    if (chance <= 0.5 + weatherElasticity) {
        customerPurchased();
    }
} else if (price.value > .1 && price.value <= .2) {
    if (chance <= 0.45 + weatherElasticity) {
        customerPurchased();
    }
} else if (price.value > .2 && price.value <= .3) {
    if (chance <= 0.4 + weatherElasticity) {
        customerPurchased();
    }
} else if (price.value > .3 && price.value <= .4) {
    if (chance <= 0.35 + weatherElasticity) {
        customerPurchased();
    }
} else if (price.value > .4 && price.value <= .5) {
    if (chance <= 0.3 + weatherElasticity) {
        customerPurchased();
    }
} else if (price.value > .5 && price.value <= .6) {
    if (chance <= 0.25 + weatherElasticity) {
        customerPurchased();
    }
} else if (price.value > .6 && price.value <= .7) {
    if (chance <= 0.2 + weatherElasticity) {
        customerPurchased();
    }
} else if (price.value > .7 && price.value <= .8) {
    if (chance <= 0.15 + weatherElasticity) {
        customerPurchased();
    }
} else if (price.value > .8 && price.value <= .9) {
    if (chance <= 0.1 + weatherElasticity) {
        customerPurchased();
    }
} else if (price.value > .9 && price.value <= 1) {
    if (chance <= 0.05 + weatherElasticity) {
        customerPurchased();
    }
}
```
#### Temperature of weather affecting demand
```javascript
function weatherChance() {
    switch(temp) {
        case 22:
            weatherElasticity = -0.2;
            includeIceCubes();
            break;
        case 23:
            weatherElasticity = -0.175;
            includeIceCubes();
            break;
        case 24:
            weatherElasticity = -0.15;
            includeIceCubes();
            break;
        case 25:
            weatherElasticity = -0.125;
            includeIceCubes();
            break;
        case 26:
            weatherElasticity = -0.1;
            includeIceCubes();
            break;
        case 27:
            weatherElasticity = -0.075;
            includeIceCubes();
            break;
        case 28:
            weatherElasticity = 0;
            includeIceCubes();
            break;
        case 29:
            weatherElasticity = 0.1;
            includeIceCubes();
            break;
        case 30:
            weatherElasticity = 0.125;
            includeIceCubes();
            break;
        case 31:
            weatherElasticity = 0.15;
            includeIceCubes();
            break;
        case 32:
            weatherElasticity = 0.175;
            includeIceCubes();
            break;
        case 33:
            weatherElasticity = 0.2;
            includeIceCubes();
            break;
        case 34:
            weatherElasticity = 0.225;
            includeIceCubes();
            break;
    }
    
}
```
#### Inclusion of ice cubes in relation to weather, affecting demand
```javascript
function includeIceCubes() {
    if (useIceCubes.checked === true && iceCubeSupplies >= 4) {
        weatherElasticity *= 1.25;
    } 
}
```
## One new thing I learnt
### Just start
