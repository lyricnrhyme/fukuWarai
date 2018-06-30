//Start Top Screen
var title = document.createElement("div");
title.id = "title";
title.innerHTML = "Fuku Warai";
document.body.appendChild(title);

var audio = document.createElement("audio");
audio.id = "audio";
audio.src = "/assets/skyleoChibi.mp3";
audio.preload = "auto";
document.body.appendChild(audio);
audio.play(); //plays music

var rulesWindow = document.createElement("div");
rulesWindow.id = "rulesWindow";
document.body.appendChild(rulesWindow);
rulesWindow.style.display = "none";

var partsDiv = document.createElement("div");
partsDiv.id = "partsDiv";
partsDiv.innerHTML = "Place This:";
document.body.appendChild(partsDiv);
partsDiv.style.display = "none";

var randomArr = ["/assets/catLeftEye.png", "/assets/catRightEye.png", "/assets/catLeftEyebrow.png", "/assets/catRightEyebrow.png", "/assets/catLeftWhiskers.png", "/assets/catRightWhiskers.png", "/assets/catMouth.png", "/assets/catNose.png"]
for (var i=0; i<randomArr.length; i++) {
    var makeThisDrag = document.createElement("div");
    makeThisDrag.className = "dragDiv";
    makeThisDrag.style.display = "none";
    partsDiv.appendChild(makeThisDrag);
    
    var makeClickDragDiv = document.createElement("div");
    makeClickDragDiv.className = "clickDragDiv";
    makeThisDrag.appendChild(makeClickDragDiv);
    
    var makeImage = document.createElement("img");
    makeImage.src = randomArr[i];
    makeImage.className = "catParts";
    makeClickDragDiv.appendChild(makeImage);
}

var dragDiv = document.getElementsByClassName("dragDiv");
var catParts = document.getElementsByClassName("catParts");
catParts[0].style.width = "160px";
catParts[1].style.width = "160px";
catParts[2].style.width = "90px";
catParts[3].style.width = "90px";
catParts[4].style.width = "160px";
catParts[5].style.width = "160px";
catParts[6].style.width = "160px";
catParts[7].style.width = "50px";

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
catImage.src = "/assets/catFaceComplete.png";;;
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
    catImage.src = "/assets/catFace.png"
    startGameOptions.style.display = "none";
    blindSquare.style.display = "block";
    midGameOptions.style.display = "flex";
    partsDiv.style.display = "block";
    if (rulesWindow.style.display = "block") {
        rulesWindow.style.display = "none";
    }
    dragDiv[Math.floor(Math.random() * dragDiv.length)].style.display = "inline-block";
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
rulesDescrip.innerHTML = "Fuku Warai is a game where you reconstruct a face without looking (what?!) You will be given a random part of the face which you will place blindly on a blank face. <br><br> Click and drag each face part given at random where you think the part should go onto the blank surface. The goal of the game is to make the face as perfect as possible (or feel free to try make it Picasso style!) Good luck!";
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
var midGameOptions = document.createElement("div");
midGameOptions.id = "midGameOptions";
document.body.appendChild(midGameOptions);
midGameOptions.style.display = "none";

var menuButton = document.createElement("div");
menuButton.id = "menuButton";
menuButton.innerHTML = "MENU";
midGameOptions.appendChild(menuButton);
menuButton.addEventListener("click", showMenuOptions);

function showMenuOptions() {
    if (menuOptions.style.display === "none") {
        menuOptions.style.display = "block";
    } else {
        menuOptions.style.display = "none";
    }
    
    if (rulesWindow.style.display === "block") {
        rulesWindow.style.display = "none";
    }
}

////Check Top Screen for Menu Options

for (var i=0; i<3; i++) {
    var makeMenuOption = document.createElement("div");
    makeMenuOption.className = "menuOptionButton";
    menuOptions.appendChild(makeMenuOption);
}

var menuOptionButton = document.getElementsByClassName("menuOptionButton");
menuOptionButton[0].innerHTML = "Restart";
menuOptionButton[1].innerHTML = "Help";
menuOptionButton[2].innerHTML = "Quit";

menuOptionButton[0].addEventListener("click", restartGame);
menuOptionButton[1].addEventListener("click", helpButton);
menuOptionButton[2].addEventListener("click", quitGame);

var areYouSure = document.createElement("div");
areYouSure.id = "areYouSure";
areYouSure.innerHTML = "Are you Sure?";
document.body.appendChild(areYouSure);
areYouSure.style.display = "none";

var imSure = document.createElement("div");
imSure.id = "imSure";
imSure.innerHTML = "YES";
areYouSure.appendChild(imSure);
imSure.addEventListener("click", confirmQuit);

function confirmQuit() {
    areYouSure.style.display = "none";
    startGameOptions.style.display = "flex";
    catImage.src = "/assets/catFaceComplete.png";
    midGameOptions.style.display = "none";
    menuOptions.style.opacity = "1";
    menuOptions.style.display = "none";
    blindSquare.style.display = "none";
    menuButton.addEventListener("click", showMenuOptions);
    menuOptionButton[0].addEventListener("click", restartGame);
    midGameOptions.style.opacity = "1";
    partsDiv.style.display = "none";
    partsDiv.style.opacity = "1";
    var randomArr = ["/assets/catLeftEye.png", "/assets/catRightEye.png", "/assets/catLeftEyebrow.png", "/assets/catRightEyebrow.png", "/assets/catLeftWhiskers.png", "/assets/catRightWhiskers.png", "/assets/catMouth.png", "/assets/catNose.png"]
}

var notSure = document.createElement("div");
notSure.id = "notSure";
notSure.innerHTML = "NO";
areYouSure.appendChild(notSure);
notSure.addEventListener("click", returnToGame);

function returnToGame() {
    menuOptions.style.opacity = "1";
    midGameOptions.style.opacity = "1";
    partsDiv.style.opacity = "1";
    areYouSure.style.display = "none";
    menuOptionButton[0].addEventListener("click", restartGame);
    menuButton.addEventListener("click", showMenuOptions);
}

function restartGame() {
    menuOptions.style.display = "none";
    var randomArr = ["/assets/catLeftEye.png", "/assets/catRightEye.png", "/assets/catLeftEyebrow.png", "/assets/catRightEyebrow.png", "/assets/catLeftWhiskers.png", "/assets/catRightWhiskers.png", "/assets/catMouth.png", "/assets/catNose.png"]
}

function helpButton() {
    if (rulesWindow.style.display === "none") {
        rulesWindow.style.display = "block";
    } else {
        rulesWindow.style.display = "none";
    }
}

function quitGame() {
    areYouSure.style.display = "block";
    menuOptions.style.opacity = "0.5";
    midGameOptions.style.opacity = "0.5";
    partsDiv.style.opacity = "0.5";
    menuOptionButton[0].removeEventListener("click", restartGame);
    menuButton.removeEventListener("click", showMenuOptions);
}

var placeButton = document.createElement("div");
placeButton.id = "placeButton";
placeButton.innerHTML = "PLACE";
midGameOptions.appendChild(placeButton);
placeButton.addEventListener("click", placePart);

function placePart() {

}

//End of Menu

//Start of Gameplay

////Check Top Screen for partsDiv

//End of Gameplay


