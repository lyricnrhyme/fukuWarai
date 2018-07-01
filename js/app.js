//Start Top Screen

////Title Element
var title = document.createElement("div");
title.id = "title";
title.innerHTML = "Fuku Warai";
document.body.appendChild(title);

////Audio Element
var audio = document.createElement("audio");
audio.id = "audio";
audio.src = "/assets/skyleoChibi.mp3";
audio.preload = "auto";
document.body.appendChild(audio);
// audio.play(); //plays music

////Pop-up Rules Window
var rulesWindow = document.createElement("div");
rulesWindow.id = "rulesWindow";
document.body.appendChild(rulesWindow);
rulesWindow.style.display = "none";

////Window where Cat Face Parts show up
var partsDiv = document.createElement("div");
partsDiv.id = "partsDiv";
// partsDiv.innerHTML = "Place This:";
document.body.appendChild(partsDiv);
partsDiv.style.display = "none";

////Adding Cat Face Parts into Document
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
    makeImage.className = "catPartImage";
    makeClickDragDiv.appendChild(makeImage);
}

////Adjusting each image size
var dragDiv = document.getElementsByClassName("dragDiv");
var clickDragDiv = document.getElementsByClassName("clickDragDiv");
var catPartImage = document.getElementsByClassName("catPartImage");
catPartImage[0].style.width = "160px";
catPartImage[1].style.width = "160px";
catPartImage[2].style.width = "90px";
catPartImage[3].style.width = "90px";
catPartImage[4].style.width = "160px";
catPartImage[5].style.width = "160px";
catPartImage[6].style.width = "160px";
catPartImage[7].style.width = "50px";

////Adding Blind Square to document (Hides Cat Face)
var blindSquare = document.createElement("div");
blindSquare.id = "blindSquare";
document.body.appendChild(blindSquare);
blindSquare.style.display = "none";

////Adding Pop-up Menu Options when Menu Button is clicked
var menuOptions = document.createElement("div");
menuOptions.id = "menuOptions";
document.body.appendChild(menuOptions);
menuOptions.style.display = "none";

////Adding Game Screen for Cat Face
var gameScreen = document.createElement("div");
gameScreen.id = "gameScreen";
document.body.appendChild(gameScreen);

////Adding div box for Cat Face to sit in (:0)
var startImage = document.createElement("div");
startImage.id = "startImage";
gameScreen.appendChild(startImage);

////Adding Cat Image in (WIP)
var catImage = document.createElement("img");
catImage.src = "/assets/catFaceComplete.png";;;
catImage.id = "catImage";
startImage.appendChild(catImage);
//End Top Screen

//Start of Start Game Options

////Adding Start Game Options (Start and How to Play)
var startGameOptions = document.createElement("div");
startGameOptions.id = ("startGameOptions");
document.body.appendChild(startGameOptions);

////Adding Start Game Button
var startGameButton = document.createElement("div");
startGameButton.id = "startGameButton";
startGameButton.innerHTML = "Start Game"
startGameOptions.appendChild(startGameButton);
startGameButton.addEventListener("click", startGame);

////Function: Starts Game
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

////Adding Rules Button
var rulesButton = document.createElement("div");
rulesButton.id = ("rulesButton");
rulesButton.innerHTML = "How To Play";
startGameOptions.appendChild(rulesButton);
rulesButton.addEventListener("click", openRules);

////Function: Opens Rules
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

////Adding the Rules on How to Play Fuku Warai
var rulesDescrip = document.createElement("div");
rulesDescrip.id = "rulesDescrip";
rulesDescrip.innerHTML = "Fuku Warai is a game where you reconstruct a face without looking (what?!) You will be given a random part of the face which you will place blindly on a blank face. <br><br> Click and drag each face part given at random where you think the part should go onto the blank surface. The goal of the game is to make the face as perfect as possible (or feel free to try make it Picasso style!) Good luck!";
rulesWindow.appendChild(rulesDescrip);

////Adding in Additional Button for Closing Rules Window
var closeRulesButton = document.createElement("div");
closeRulesButton.id = "closeRulesButton";
closeRulesButton.innerHTML = "CLOSE";
rulesWindow.appendChild(closeRulesButton);
closeRulesButton.addEventListener("click", closeRules);

////Function: Closes Rules
function closeRules() {
    rulesWindow.style.display = "none";
}
//End of Rules

//Start of Menu

////Adding in Mid Game Menu Options
var midGameOptions = document.createElement("div");
midGameOptions.id = "midGameOptions";
document.body.appendChild(midGameOptions);
midGameOptions.style.display = "none";

////Adding in Menu Button to open Menu Options
var menuButton = document.createElement("div");
menuButton.id = "menuButton";
menuButton.innerHTML = "MENU";
midGameOptions.appendChild(menuButton);
menuButton.addEventListener("click", showMenuOptions);

////Function: Shows Menu Options (When Menu Button clicked)
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

////Adding in Menu Option Buttons
for (var i=0; i<3; i++) {
    var makeMenuOption = document.createElement("div");
    makeMenuOption.className = "menuOptionButton";
    menuOptions.appendChild(makeMenuOption);
}

////Assigning Each Button a Function
var menuOptionButton = document.getElementsByClassName("menuOptionButton");
menuOptionButton[0].innerHTML = "Restart";
menuOptionButton[1].innerHTML = "Help";
menuOptionButton[2].innerHTML = "Quit";

menuOptionButton[0].addEventListener("click", restartGame);
menuOptionButton[1].addEventListener("click", helpButton);
menuOptionButton[2].addEventListener("click", quitGame);

////Function: Restart Game (When Restart Button Clicked)
function restartGame() {
    menuOptions.style.display = "none";
    var randomArr = ["/assets/catLeftEye.png", "/assets/catRightEye.png", "/assets/catLeftEyebrow.png", "/assets/catRightEyebrow.png", "/assets/catLeftWhiskers.png", "/assets/catRightWhiskers.png", "/assets/catMouth.png", "/assets/catNose.png"]
}

////Function: Opens Rules Window (When Help Button Clicked)
function helpButton() {
    if (rulesWindow.style.display === "none") {
        rulesWindow.style.display = "block";
    } else {
        rulesWindow.style.display = "none";
    }
}

////Function: Redirects to Are You Sure Window, then Start Menu (When Quit Button Clicked)
function quitGame() {
    areYouSure.style.display = "block";
    menuOptions.style.opacity = "0.5";
    midGameOptions.style.opacity = "0.5";
    partsDiv.style.opacity = "0.5";
    menuOptionButton[0].removeEventListener("click", restartGame);
    menuButton.removeEventListener("click", showMenuOptions);
}

////Adding Are You Sure Option when Quit Button Clicked
var areYouSure = document.createElement("div");
areYouSure.id = "areYouSure";
areYouSure.innerHTML = "Are you Sure?";
document.body.appendChild(areYouSure);
areYouSure.style.display = "none";

////Yes Button on Are You Sure
var imSure = document.createElement("div");
imSure.id = "imSure";
imSure.innerHTML = "YES";
areYouSure.appendChild(imSure);
imSure.addEventListener("click", confirmQuit);

////Function: Invokes Quit Button
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

////No Button on Are You Sure
var notSure = document.createElement("div");
notSure.id = "notSure";
notSure.innerHTML = "NO";
areYouSure.appendChild(notSure);
notSure.addEventListener("click", returnToGame);

////Function: Returns Player back to Menu Option Buttons
function returnToGame() {
    menuOptions.style.opacity = "1";
    midGameOptions.style.opacity = "1";
    partsDiv.style.opacity = "1";
    areYouSure.style.display = "none";
    menuOptionButton[0].addEventListener("click", restartGame);
    menuButton.addEventListener("click", showMenuOptions);
}

////Adding Place Button to Confirm Placements of Face Parts
var placeButton = document.createElement("div");
placeButton.id = "placeButton";
placeButton.innerHTML = "PLACE";
midGameOptions.appendChild(placeButton);
placeButton.addEventListener("click", placePart);

////Function: Clicking and Dragging Nonsense
for (var i=0; i<dragDiv.length; i++) {
    dragElement(dragDiv[i]);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (clickDragDiv[i]) {
    /* if present, the header is where you move the DIV from:*/
    clickDragDiv[i].onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
}
////ENDING NONSENSE


////Function: Placing Cat Face Parts
function placePart() {
    console.log("WIP");
}

//End of Menu

//Start of Gameplay

////Check Top Screen for partsDiv

//End of Gameplay


