//Start Top Screen

////Title Element
var title = document.createElement("div");
title.id = "title";
title.innerHTML = "Fuku Warai";
document.body.appendChild(title);

////Audio Element

//////Background Music
var backgroundMusic = document.createElement("audio");
backgroundMusic.id = "backgroundMusic";
backgroundMusic.src = "assets/skyleoChibi.mp3";
backgroundMusic.preload = "auto";
backgroundMusic.loop = true;
document.body.appendChild(backgroundMusic);
backgroundMusic.play();

//////Button Noises
var buttonNoise = document.createElement("audio");
buttonNoise.id = "buttonNoise";
buttonNoise.src = "assets/videoCoin.wav";

//////Final Button Noise
var finalNoise = document.createElement("audio");
finalNoise.id = "finalNoise";
finalNoise.src = "assets/correctSound.wav";

////Pop-up Rules Window
var rulesWindow = document.createElement("div");
rulesWindow.id = "rulesWindow";
document.body.appendChild(rulesWindow);
rulesWindow.style.display = "none";

////Window where Cat Face Parts show up
var partsDiv = document.createElement("div");
partsDiv.id = "partsDiv";
document.body.appendChild(partsDiv);
partsDiv.style.display = "none";

////Adding partsDiv Title
var partsDivTitle = document.createElement("div");
partsDivTitle.id = "partsDivTitle";
partsDivTitle.innerHTML = "Place This:"
partsDiv.appendChild(partsDivTitle);

////Adding Cat Face Parts into Document
var randomArr = ["assets/catLeftEye.png", "assets/catRightEye.png", "assets/catLeftEyebrow.png", "assets/catRightEyebrow.png", "assets/catLeftWhiskers.png", "assets/catRightWhiskers.png", "assets/catMouth.png", "assets/catNose.png"]
for (var i=0; i<randomArr.length; i++) {
    var makeThisDrag = document.createElement("div");
    makeThisDrag.className = "dragDiv";
    makeThisDrag.style.display = "none";
    partsDiv.appendChild(makeThisDrag);
    
    // var makeClickDragDiv = document.createElement("div");
    // makeClickDragDiv.className = "clickDragDiv";
    // makeThisDrag.appendChild(makeClickDragDiv);
    
    var makeImage = document.createElement("img");
    makeImage.src = randomArr[i];
    makeImage.className = "catPartImage";
    // makeClickDragDiv.appendChild(makeImage);
    makeThisDrag.appendChild(makeImage);
}

////Adjusting each image size
var dragDiv = document.getElementsByClassName("dragDiv");
// var clickDragDiv = document.getElementsByClassName("clickDragDiv");
var catPartImage = document.getElementsByClassName("catPartImage");
catPartImage[0].style.width = "140px";
catPartImage[1].style.width = "140px";
catPartImage[2].style.width = "90px";
catPartImage[3].style.width = "90px";
catPartImage[4].style.width = "120px";
catPartImage[5].style.width = "120px";
catPartImage[6].style.width = "120px";
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
catImage.src = "assets/catFaceComplete.png";;;
catImage.id = "catImage";
startImage.appendChild(catImage);
//End Top Screen***

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
    catImage.src = "assets/catFace.png"
    startGameOptions.style.display = "none";
    blindSquare.style.display = "block";
    midGameOptions.style.display = "flex";
    partsDiv.style.display = "block";
    if (rulesWindow.style.display = "block") {
        rulesWindow.style.display = "none";
    }
    dragDiv[0].style.display = "block";
    buttonNoise.play();
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
    buttonNoise.play();
}
//End of Start Game Options***

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
    buttonNoise.play();
}
//End of Rules***

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
    buttonNoise.play();
}

////Check Top Screen for Menu Options

////Adding in Menu Option Buttons
for (var i=0; i<4; i++) {
    var makeMenuOption = document.createElement("div");
    makeMenuOption.className = "menuOptionButton";
    menuOptions.appendChild(makeMenuOption);
}

////Assigning Each Button a Function
var menuOptionButton = document.getElementsByClassName("menuOptionButton");
menuOptionButton[0].innerHTML = "Close";
menuOptionButton[1].innerHTML = "Restart";
menuOptionButton[2].innerHTML = "Help";
menuOptionButton[3].innerHTML = "Quit";

menuOptionButton[0].addEventListener("click", showMenuOptions);
menuOptionButton[1].addEventListener("click", restartGame);
menuOptionButton[2].addEventListener("click", helpButton);
menuOptionButton[3].addEventListener("click", quitGame);

////Function: Restart Game (When Restart Button Clicked)
function restartGame() {
    menuOptions.style.display = "none";
    buttonNoise.play();
    if (blindSquare.style.display === "none") {
        blindSquare.style.display = "block";
    }
    placeButton.innerHTML = "PLACE";
    placeButton.style.fontSize = "50px";
    placeButton.style.lineHeight = "140%";
    placeButton.style.padding = "10px";
    while (placedDiv.length > 0) {
        placedDiv[0].className = "dragDiv";
    }
    for (var i=0; i<dragDiv.length; i++) {
        dragDiv[i].style.top = "30px";
        dragDiv[i].style.left = "10px";
        dragDiv[i].style.display = "none";
    }
    if (finalGameOptions.style.display === "flex") {
        finalGameOptions.style.display = "none";
    }
    dragDiv[0].style.display = "block";
}

////Function: Opens Rules Window (When Help Button Clicked)
function helpButton() {
    if (rulesWindow.style.display === "none") {
        rulesWindow.style.display = "block";
    } else {
        rulesWindow.style.display = "none";
    }
    buttonNoise.play();
}

////Function: Redirects to Are You Sure Window, then Start Menu (When Quit Button Clicked)
function quitGame() {
    areYouSure.style.display = "block";
    menuOptions.style.opacity = "0.5";
    midGameOptions.style.opacity = "0.5";
    partsDiv.style.opacity = "0.5";
    menuOptionButton[1].removeEventListener("click", restartGame);
    menuButton.removeEventListener("click", showMenuOptions);
    buttonNoise.play();
    if (rulesWindow.style.display === "block") {
        rulesWindow.style.display = "none";
    }
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
    catImage.src = "assets/catFaceComplete.png";
    midGameOptions.style.display = "none";
    menuOptions.style.opacity = "1";
    menuOptions.style.display = "none";
    blindSquare.style.display = "none";
    menuButton.addEventListener("click", showMenuOptions);
    menuOptionButton[1].addEventListener("click", restartGame);
    midGameOptions.style.opacity = "1";
    partsDiv.style.display = "none";
    partsDiv.style.opacity = "1";
    finalGameOptions.style.display = "none";
    buttonNoise.play();
    placeButton.innerHTML = "PLACE";
    placeButton.style.fontSize = "50px";
    placeButton.style.lineHeight = "125%";
    placeButton.style.padding = "10px";
    while (placedDiv.length > 0) {
        placedDiv[0].className = "dragDiv";
    }
    for (var i=0; i<dragDiv.length; i++) {
        dragDiv[i].style.top = "30px";
        dragDiv[i].style.left = "10px";
        dragDiv[i].style.display = "none";
    }
    if (finalGameOptions.style.display === "flex") {
        finalGameOptions.style.display = "none";
    }
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
    menuOptionButton[1].addEventListener("click", restartGame);
    menuButton.addEventListener("click", showMenuOptions);
    buttonNoise.play();
}

////Adding Place Button to Confirm Placements of Face Parts
var placeButton = document.createElement("div");
placeButton.id = "placeButton";
placeButton.innerHTML = "PLACE";
midGameOptions.appendChild(placeButton);
placeButton.addEventListener("click", placePart);

//End of Menu***

//Start of Gameplay

////Function: Clicking and Dragging Nonsense
for (var i=0; i<dragDiv.length; i++) {
    dragElement(dragDiv[i]);

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (catPartImage[i]) {
            catPartImage[i].onmousedown = dragMouseDown;
        } else {
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

////Function: Placing Cat Face Parts
var placedDiv = document.getElementsByClassName("placedDiv");
// var placedCatPart = document.getElementsByClassName("placedCatPart");
function placePart() {
    if (placeButton.innerHTML === "PLACE") {
        for (var i=0; i<dragDiv.length; i++) {
            if (dragDiv[i].style.display === "block") {
                dragDiv[i].className = "placedDiv";
            }
        }
        placedDiv[placedDiv.length-1].style.display = "none";
        buttonNoise.play();
        dragDiv[0].style.display = "block";
        if (dragDiv.length === 1) {
            placeButton.innerHTML = "PLACE & REVEAL";
            placeButton.style.fontSize = "45px";
            placeButton.style.lineHeight = "45px";
            placeButton.style.paddingTop = "5px";
            placeButton.style.paddingBottom = "15px";
        }
        buttonNoise.play();
    } else {
        for (var i=0; i<placedDiv.length; i++) {
            placedDiv[i].style.display = "block";
        }
        dragDiv[0].className = "placedDiv";
        blindSquare.style.display = "none";
        finalGameOptions.style.display = "flex";
        partsDivTitle.style.display = "none";
        partsDiv.style.backgroundColor = null;
        partsDiv.style.border = "none";
        finalNoise.play();
    }
}

////Check Top Screen for partsDiv

//End of Gameplay***

//Start of Final Result

////Adding Final Menu Options
var finalGameOptions = document.createElement("div");
finalGameOptions.id = "finalGameOptions";
document.body.appendChild(finalGameOptions);
finalGameOptions.style.display = "none";

////Adding Replay Button
var replayButton = document.createElement("div");
replayButton.id = "replayButton";
replayButton.innerHTML = "REPLAY?"
finalGameOptions.appendChild(replayButton);
replayButton.addEventListener("click", restartGame);

////Adding Return to Main Menu Button
var returnToMain = document.createElement("div");
returnToMain.id = "returnToMain";
returnToMain.innerHTML = "RETURN TO<br> MAIN MENU";
finalGameOptions.appendChild(returnToMain);
returnToMain.addEventListener("click", confirmQuit);