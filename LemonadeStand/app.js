let cupSupplies = 0;
let iceCubeSupplies = 0;
let cash = 10;
var minsInAday = 480; 
var day = 1;
var totalGameTime = minsInAday * day;
var time = 1000;
let weatherElasticity;
let totalCupsBought = 0;
let totalIceCubesBought = 0;
let cupsExpenses = 0;
let iceCubesExpenses = 0;
let totalExpenses = 0;
let totalCupsSold = 0;
let totalSales = 0;
var profit;
const displayCupSupplies = document.getElementById("numberofcups"); 
const displayIceCubeSupplies = document.getElementById("numberoficecubes"); 
const displayCash = document.getElementById("cash");
const displayTemp = document.getElementById("temp");
const displayTime = document.getElementById("time");
const displayDay = document.getElementById("day");
const buyButtons = document.getElementsByClassName("buy-btns");
const simulateButton = document.getElementById("simulate-btn");
const useIceCubes = document.getElementById('icecubebox');
const displayCupsBought = document.getElementById('totalcupsbought');
const displayIceCubesBought = document.getElementById('totalicecubesbought');
const displayCupsExpenses = document.getElementById('cupsexpenses');
const displayIceCubesExpenses = document.getElementById('icecubesexpenses');
const displayTotalExpenses = document.getElementById('totalexpenses');
const displayTotalExpenses2 = document.getElementById('totalexpenses2');
const displayTotalCupsSold = document.getElementById('totalcupssold')
const displayTotalSales = document.getElementById('totalsales');
const displayProfit = document.getElementById('profits');

if (iceCubeSupplies < 4) {
    useIceCubes.disabled = true;
}

function includeIceCubes() {
    if (useIceCubes.checked === true && iceCubeSupplies >= 4) {
        weatherElasticity *= 1.25;
    } 
}
function nextDay() {
    day++;
    displayDay.innerHTML = day;
}

function disableBuyButtons() {
    for (buyButton of buyButtons) {
        buyButton.disabled = true;
    }
}

function enableBuyButtons() {
    for (buyButton of buyButtons) {
        buyButton.disabled = false;
    }
}

function disableSimulation() {
    simulateButton.disabled = true;
}

function enableSimulation() {
    simulateButton.disabled = false;
}

function randomizeTemp() {
    return Math.floor(22 + Math.random() * 12);
}

function nextHour() {
    time += 100;
    displayTime.innerHTML = time;
}

function boughtCups(noOfCupsBought, cost) {
        cupSupplies += noOfCupsBought;
        cash -= cost;
        displayCupSupplies.innerHTML = cupSupplies;
        displayCash.innerHTML = cash.toFixed(2);
        totalCupsBought += noOfCupsBought;
        displayCupsBought.innerHTML = totalCupsBought;
        cupsExpenses += cost;
        displayCupsExpenses.innerHTML = cupsExpenses.toFixed(2);
        updateTotalExpenses();
}

function boughtIceCubes(noOfIceCubesBought, cost) {
        iceCubeSupplies += noOfIceCubesBought;
        cash -= cost;
        displayIceCubeSupplies.innerHTML = iceCubeSupplies;
        displayCash.innerHTML = cash.toFixed(2);
        totalIceCubesBought += noOfIceCubesBought;
        displayIceCubesBought.innerHTML = totalIceCubesBought;
        iceCubesExpenses += cost;
        displayIceCubesExpenses.innerHTML = iceCubesExpenses.toFixed(2);
        updateTotalExpenses();
}

function updateTotalExpenses() {
    totalExpenses = iceCubesExpenses + cupsExpenses;
    displayTotalExpenses.innerHTML = totalExpenses.toFixed(2);
    displayTotalExpenses2.innerHTML = totalExpenses.toFixed(2);
}

function buy25cups() {
    if (cash > 1.2) {
        boughtCups(25, 1.2);
    }
}

function buy50cups() {
    if (cash > 3.14) {
        boughtCups(50, 3.14)
    }
}

function buy100cups() {
    if (cash > 5.23) {
        boughtCups(100, 5.23)
    }
}

function buy100icecubes() {
    if (cash > .98) {
        boughtIceCubes(100, .98);
    }
    useIceCubes.disabled = false;
}

function buy250icecubes() {
    if (cash > 2.15) {
        boughtIceCubes(250, 2.15)
    }
    useIceCubes.disabled = false;
}

function buy500icecubes() {
    if (cash > 3.7) {
        boughtIceCubes(500, 3.7)
    }
    useIceCubes.disabled = false;
}

function customerPurchased() {
    if(useIceCubes.checked === true && iceCubeSupplies >= 4) {
        iceCubeSupplies -= 4;
        displayIceCubeSupplies.innerHTML = iceCubeSupplies;
    }
    cupSupplies--;
    displayCupSupplies.innerHTML = cupSupplies;
    if (cupSupplies <= 0) {
        alert('You have run out of lemonade!');
    }
    cash += parseFloat(price.value);
    displayCash.innerHTML = cash.toFixed(2);
    totalSales += parseFloat(price.value);
    displayTotalSales.innerHTML = totalSales.toFixed(2);
    totalCupsSold++;
    displayTotalCupsSold.innerHTML = totalCupsSold;
    profit = totalSales - totalExpenses;
    displayProfit.innerHTML = profit.toFixed(2);
}

const price = document.getElementById("myRange");
const output = document.getElementById("priceOutput");

output.innerHTML = price.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
price.oninput = function() {
    output.innerHTML = this.value;
}



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

var count = 1;
function priceElasticity() {
    disableSimulation();
    disableBuyButtons();
    displayDay.innerHTML = day;
    displayTemp.innerHTML = temp;
    displayTime.innerHTML = time;
    if (count % 60 === 0) {
        nextHour();
    }
    if (count < minsInAday && cupSupplies > 0) {
        weatherChance();
        count++;
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
    } else {
        day++;
        if (day <= 7) {
            enableSimulation();
        }
        time = 1000;
        count = 1;
        enableBuyButtons();
        clearInterval(window.priceInterval);
        } 
}

function setTemp() {
    console.log('temperature changed');
    temp = randomizeTemp();
}

function simulation() {
    window.priceInterval = setInterval(priceElasticity, 100); // 100ms in real life in 1min in-game
    setTemp(); 
    setInterval(setTemp, 24000);
}

$(() => {
    // Grabbing Guide button
    const $openBtn = $('#openModal');
    
    // Grabbing modal element
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

// News API
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