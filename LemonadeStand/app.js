let cupSupplies = 0;
let iceCubeSupplies = 0;
let cash = 20;

const displayCupSupplies = document.getElementById("numberofcups"); 
const displayIceCubeSupplies = document.getElementById("numberoficecubes"); 
const displayCash = document.getElementById("cash");

function boughtCups(noOfCupsBought, cost) {
        cupSupplies += noOfCupsBought;
        cash -= cost;
        displayCupSupplies.innerHTML = cupSupplies ;
        displayCash.innerHTML = cash.toFixed(2);
}

function boughtIceCubes(noOfIceCubesBought, cost) {
        iceCubeSupplies += noOfIceCubesBought;
        cash -= cost;
        displayIceCubeSupplies.innerHTML = iceCubeSupplies;
        displayCash.innerHTML = cash.toFixed(2);
}

function buy25cups() {
    if (cash > .96) {
        boughtCups(25, 1.2);
    }
}

function buy50cups() {
    if (cash > 1.6) {
        boughtCups(50, 3.14)
    }
}

function buy100cups() {
    if (cash > 3.23) {
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