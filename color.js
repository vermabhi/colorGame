var numColors=6;
var colors;
var pickedColor;
var box = document.querySelectorAll(".square");
var pickedDisplay = document.querySelector("#pickedColor");
var messageDisplay = document.querySelector("#correct");
var heading = document.querySelector("h1");
var res = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");

init();

function init() {
    modeSelector();
    matchColor();
    reset();
}

function modeSelector(){
    for (var i = 0; i < mode.length; i++) {
        mode[i].addEventListener("click", function () {
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            numColors = this.textContent === "Easy" ? 3 : 6;
            reset();
        });
    }
}

function matchColor()
{
    for (var i = 0; i < box.length; i++) {
    
        box[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                matched();
                messageDisplay.textContent = "Correct!!";
                res.textContent = "Play Again?";
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!"
            }
        });
    }
}

res.addEventListener("click", function () {
    reset();
})

function reset() {
    colors = generateColors(numColors);
    pickedColor = randomColor();
    pickedDisplay.textContent = pickedColor;
    for (var i = 0; i < box.length; i++) {
        if (colors[i]) {
            box[i].style.display = "block";
            box[i].style.backgroundColor = colors[i];
        }
        else
            box[i].style.display = "none";
    }
    heading.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    res.textContent = "New Colors";
}


function matched() {
    heading.style.backgroundColor = pickedColor;  
    for(var i=0;i<colors.length;i++){      
    box[i].style.backgroundColor = pickedColor;
    }
}

function randomColor() {
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}

function generateColors(len) {
    var arr = [];
    for (var i = 0; i < len; i++)
        arr.push(randColor());
    return arr;
}

function randColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}