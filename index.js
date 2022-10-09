
var numberOfDrumButtons = document.querySelectorAll(".drum");

// Detect Mouse Press 

for (let i = 0; i < numberOfDrumButtons.length; i++) {
    numberOfDrumButtons[i].addEventListener("click", function () {

        let buttonInnerHTML = this.textContent;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

//  Detect Keyboard Press

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);

})


function makeSound(key) {
    switch (key) {
        case 'w': let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a': let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();

            break;
        case 's': let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        case 'd': let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j': let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case 'k': let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case 'l': let kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;

        default: console.log(event.key);

    }
}

function buttonAnimation(key) {

    let activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}



