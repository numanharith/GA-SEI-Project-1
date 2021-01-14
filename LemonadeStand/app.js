let cupSupplies = 0;
let iceCubeSupplies = 0;
let cash = 10;
var minsInAday = 480; 
var day = 1;
var totalGameTime = minsInAday * day;
var time = 1000;
let weatherElasticity;

const displayCupSupplies = document.getElementById("numberofcups"); 
const displayIceCubeSupplies = document.getElementById("numberoficecubes"); 
const displayCash = document.getElementById("cash");
const displayTemp = document.getElementById("temp");
const displayTime = document.getElementById("time");
const displayDay = document.getElementById("day");
const buyButtons = document.getElementsByClassName("buy-btns");
const simulateButton = document.getElementById("simulate-btn");
const useIceCubes = document.getElementById('icecubebox');

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
}

function boughtIceCubes(noOfIceCubesBought, cost) {
        iceCubeSupplies += noOfIceCubesBought;
        cash -= cost;
        displayIceCubeSupplies.innerHTML = iceCubeSupplies;
        displayCash.innerHTML = cash.toFixed(2);
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
}

function buy250icecubes() {
    if (cash > 2.15) {
        boughtIceCubes(250, 2.15)
    }
}

function buy500icecubes() {
    if (cash > 3.7) {
        boughtIceCubes(500, 3.7)
    }
}

function customerPurchased() {
    if(useIceCubes.checked === true) {
        iceCubeSupplies -= 4;
        displayIceCubeSupplies.innerHTML = iceCubeSupplies;
    }
    cupSupplies--;
    displayCupSupplies.innerHTML = cupSupplies;
    cash += parseFloat(price.value);
    displayCash.innerHTML = cash.toFixed(2);
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
    console.log(count);
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
    // const buyCups = () => {
    //     let numberOfCups = 0;
    //     $('#buy25cups-btn').on('click', () => {
    //         if (parseInt($('.cash').html()) > cup.costFor25) {
    //             numberOfCups += 25;
    //             localStorage.setItem("value", document.getElementById('buy25cups-btn').value);
    //             document.getElementById('buy25cups-btn').value = numberOfCups;
    //             // localStorage.setItem('data', $('.numberofcups').attr('data-noofcups', numberOfCups));
    //             // $('.numberofcups').html(document.querySelector('.numberofcups').dataset.noofcups = numberOfCups);
    //             $('.cash').html((parseFloat($('.cash').html()) - cup.costFor25).toFixed(2));
    //         }
    //     });
    //     $('#buy50cups-btn').on('click', () => {
    //         if (parseInt($('.cash').html()) > cup.costFor50) {
    //             $('.numberofcups').html(parseInt($('.numberofcups').html()) + 50);
    //             $('.cash').html((parseFloat($('.cash').html()) - cup.costFor50).toFixed(2));
    //         }
    //     });
    //     $('#buy100cups-btn').on('click', () => {
    //         if (parseInt($('.cash').html()) > cup.costFor100) {
    //             $('.numberofcups').html(parseInt($('.numberofcups').html()) + 100);
    //             $('.cash').html((parseFloat($('.cash').html()) - cup.costFor100).toFixed(2));
    //         }
    //     });
    // }

    // const buyIceCubes = () => {
    //     $('#buy100cubes-btn').on('click', () => {
    //         if (parseInt($('.cash').html()) > iceCubes.costFor100) {
    //             $('.numberoficecubes').html(parseInt($('.numberoficecubes').html()) + 100);
    //             $('.cash').html((parseFloat($('.cash').html()) - iceCubes.costFor100).toFixed(2));
    //         }
    //     });
    //     $('#buy250cubes-btn').on('click', () => {
    //         if (parseInt($('.cash').html()) > iceCubes.costFor250) {
    //             $('.numberoficecubes').html(parseInt($('.numberoficecubes').html()) + 250);
    //             $('.cash').html((parseFloat($('.cash').html()) - iceCubes.costFor250).toFixed(2));
    //         }
    //     });
    //     $('#buy500cubes-btn').on('click', () => {
    //         if (parseInt($('.cash').html()) > iceCubes.costFor500) {
    //             $('.numberoficecubes').html(parseInt($('.numberoficecubes').html()) + 500);
    //             $('.cash').html((parseFloat($('.cash').html()) - iceCubes.costFor500).toFixed(2));
    //         }
    //     });
    // }

    // buyIceCubes();
});