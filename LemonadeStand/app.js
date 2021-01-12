class Cup {
    constructor () {
        this.costFor25 = 0.96;
        this.costFor50 = 1.6;
        this.costFor100 = 3;
    }
}
class IceCubes {
    constructor () {
        this.costFor100 = 0.98;
        this.costFor250 = 2.15;
        this.costFor500 = 3.7;
    }
}
var storedItem = localStorage.getItem("storedItem"); 

let numberOfCups = 0;
function buy25cups() {
    var Item = numberOfCups++;
    localStorage.setItem("storedItem", Item);
    document.getElementById('savedText').innerHTML = Item + " SAVED";
}

function get() {
    localStorage.getItem("storedItem");
    document.getElementById("openedText").innerHTML = storedItem + " OPENED";
}

const iceCubes = new IceCubes();
const cup = new Cup();

function populateStorage() {
    localStorage.setItem('')
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

    const buyIceCubes = () => {
        $('#buy100cubes-btn').on('click', () => {
            if (parseInt($('.cash').html()) > iceCubes.costFor100) {
                $('.numberoficecubes').html(parseInt($('.numberoficecubes').html()) + 100);
                $('.cash').html((parseFloat($('.cash').html()) - iceCubes.costFor100).toFixed(2));
            }
        });
        $('#buy250cubes-btn').on('click', () => {
            if (parseInt($('.cash').html()) > iceCubes.costFor250) {
                $('.numberoficecubes').html(parseInt($('.numberoficecubes').html()) + 250);
                $('.cash').html((parseFloat($('.cash').html()) - iceCubes.costFor250).toFixed(2));
            }
        });
        $('#buy500cubes-btn').on('click', () => {
            if (parseInt($('.cash').html()) > iceCubes.costFor500) {
                $('.numberoficecubes').html(parseInt($('.numberoficecubes').html()) + 500);
                $('.cash').html((parseFloat($('.cash').html()) - iceCubes.costFor500).toFixed(2));
            }
        });
    }
    
    buyIceCubes();
});