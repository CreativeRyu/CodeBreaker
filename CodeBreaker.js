var numberOne;
var numberTwo;
var numberThree;
var guessedNumber;
var tries = 0;
var versuche = "Versuche";
var rightNumberAtPlaceOne = "_";
var rightNumberAtPlaceTwo = "_";
var rightNumberAtPlaceThree = "_";
var rightNumberAtPlaceFour = "_";
var rightPlace;
var rightNumber;

// Code Breaker
// higher Level und Funktionen
function startCodeBreaker() {

    numberOne = randomNumber();
    numberTwo = randomNumber();
    numberThree = randomNumber();
    numberFour = randomNumber();

    document.getElementById("gameText").innerHTML = "Kannst du den vierstelligen Code erraten?";

    checkInput();
}

// Computer denkt sich eine Zahl aus
function randomNumber() {
    return Math.floor(Math.random() * 10);
}

function checkInput() {

    do {
        tries++;

        document.getElementById("mainText").innerHTML = (rightNumberAtPlaceOne + " " + rightNumberAtPlaceTwo + " " + rightNumberAtPlaceThree + " " + rightNumberAtPlaceFour);
        // Spieler errät eine Zahl
        guessedNumber = prompt("Gib einen vierstelligen Code aus Ziffern von 0000 bis 9999 ein");
        // guessedNumber = document.getElementById("input").value;

        guessedNumberOne = guessedNumber.charAt(0);
        guessedNumberTwo = guessedNumber.charAt(1);
        guessedNumberThree = guessedNumber.charAt(2);
        guessedNumberFour = guessedNumber.charAt(3);

        rightPlace = 0;
        rightNumber = 0;

        if (numberOne == guessedNumberOne) {
            rightPlace++;
            rightNumberAtPlaceOne = guessedNumberOne;
            alert("Die erste Ziffer " + guessedNumberOne + " befindet sich an der richtigen Stelle.");
        } else if (guessedNumberOne == numberTwo || guessedNumberOne == numberThree || guessedNumberOne == numberFour) {
            alert("Die erste Ziffer " + guessedNumberOne + " ist zwar dabei, befindet sich aber nicht an der richtigen Stelle.");
            rightNumber++;
        }

        if (numberTwo == guessedNumberTwo) {
            alert("Die zweite Ziffer " + guessedNumberTwo + " befindet sich an der richtigen Stelle.");
            rightPlace++;
            rightNumberAtPlaceTwo = guessedNumberTwo;
        } else if (guessedNumberTwo == numberOne || guessedNumberTwo == numberThree || guessedNumberTwo == numberFour) {
            alert("Die zweite Ziffer " + guessedNumberTwo + " ist zwar dabei, befindet sich aber nicht an der richtigen Stelle.");
            rightNumber++;
        }

        if (numberThree == guessedNumberThree) {
            alert("Die dritte Ziffer " + guessedNumberThree + " befindet sich an der richtigen Stelle.");
            rightPlace++;
            rightNumberAtPlaceThree = guessedNumberThree;
        } else if (guessedNumberThree == numberOne || guessedNumberThree == numberTwo || guessedNumberThree == numberFour) {
            alert("Die dritte Ziffer " + guessedNumberThree + " ist zwar dabei, befindet sich aber nicht an der richtigen Stelle.");
            rightNumber++
        }

        if (numberFour == guessedNumberFour) {
            alert("Die vierte Ziffer " + guessedNumberFour + " befindet sich an der richtigen Stelle.");
            rightPlace++;
            rightNumberAtPlaceFour = guessedNumberFour;
        } else if (guessedNumberFour == numberOne || guessedNumberFour == numberTwo || guessedNumberFour == numberThree) {
            alert("Die vierte Ziffer " + guessedNumberFour + " ist zwar dabei, befindet sich aber nicht an der richtigen Stelle.");
            rightNumber++
        }
    }
    while (rightPlace < 4 && tries <= 10);

    controlGameStats();

    return false;
}

function controlGameStats() {
    if (rightPlace == 4 && tries <= 10) {
        document.getElementById("mainText").innerHTML = (rightNumberAtPlaceOne + " " + rightNumberAtPlaceTwo + " " + rightNumberAtPlaceThree + " " + rightNumberAtPlaceFour);
        document.getElementById("gameText").innerHTML = "Code geknackt brrraaa, du hast " + tries + " Versuche benötigt";


    } else if (tries > 10) {
        alert("GAME OVER\n" +
            "Der Code lautete " + numberOne + " " + numberTwo + " " + numberThree + " " + numberFour);
    }
}