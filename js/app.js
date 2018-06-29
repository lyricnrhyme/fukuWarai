//Start Top Screen
var title = document.createElement("div");
title.id = "title";
title.innerHTML = "Fuku Warai";
document.body.appendChild(title);

var rulesWindow = document.createElement("div");
rulesWindow.id = "rulesWindow";
document.body.appendChild(rulesWindow);
rulesWindow.style.display = "none";

var blindSquare = document.createElement("div");
blindSquare.id = "blindSquare";
document.body.appendChild(blindSquare);
blindSquare.style.display = "none";

var menuOptions = document.createElement("div");
menuOptions.id = "menuOptions";
document.body.appendChild(menuOptions);
menuOptions.style.display = "none";

var gameScreen = document.createElement("div");
gameScreen.id = "gameScreen";
document.body.appendChild(gameScreen);

var startImage = document.createElement("div");
startImage.id = "startImage";
gameScreen.appendChild(startImage);

var catImage = document.createElement("img");
catImage.src = "/images/catFaceComplete.png";;;
catImage.id = "catImage";
startImage.appendChild(catImage);
//End Top Screen

//Start of Start Game Options
var startGameOptions = document.createElement("div");
startGameOptions.id = ("startGameOptions");
document.body.appendChild(startGameOptions);

var startGameButton = document.createElement("div");
startGameButton.id = "startGameButton";
startGameButton.innerHTML = "Start Game"
startGameOptions.appendChild(startGameButton);
startGameButton.addEventListener("click", startGame);

function startGame() {
    catImage.src = "/images/catFace.png"
    startGameOptions.style.display = "none";
    blindSquare.style.display = "block";
    menuButton.style.display = "block";
}

var rulesButton = document.createElement("div");
rulesButton.id = ("rulesButton");
rulesButton.innerHTML = "How To Play";
startGameOptions.appendChild(rulesButton);
rulesButton.addEventListener("click", openRules);

function openRules() {
    if (rulesWindow.style.display === "none") {
        rulesWindow.style.display = "block";
    } else {
        rulesWindow.style.display = "none";
    }
}
//End of Start Game Options

//Start of Rules
////See rulesWindow in Top Screen

var rulesDescrip = document.createElement("div");
rulesDescrip.id = "rulesDescrip";
rulesDescrip.innerHTML = "Fuku Warai is a game where you reconstruct a face without looking (what?!) You will be given a random part of the face which you will place blindly on a blank face. <br><br> Click and drag each face part given at random onto the colored square where you think the part will most likely be placed on. The goal of the game is to make the face as perfect as possible (or feel free to try make it Picasso style!) Good luck!";
rulesWindow.appendChild(rulesDescrip);

var closeRulesButton = document.createElement("div");
closeRulesButton.id = "closeRulesButton";
closeRulesButton.innerHTML = "CLOSE";
rulesWindow.appendChild(closeRulesButton);
closeRulesButton.addEventListener("click", closeRules);

function closeRules() {
    rulesWindow.style.display = "none";
}
//End of Rules

//Start of Menu
var menuButton = document.createElement("div");
menuButton.id = "menuButton";
menuButton.innerHTML = "MENU";
document.body.appendChild(menuButton);
menuButton.style.display = "none";
menuButton.addEventListener("click", showMenuOptions);

function showMenuOptions() {
    menuOptions.style.display = "block";
}

////Check Top Screen for Menu Options

//End of Menu

