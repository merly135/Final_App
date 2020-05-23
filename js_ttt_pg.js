var cellNumber = ["oneone", "onetwo", "onethree", "twoone", "twotwo", "twothree", "threeone", "threetwo", "threethree"];


//Click eents on each div
document.getElementById("oneone").addEventListener("click", determine);
document.getElementById("onetwo").addEventListener("click", determine);
document.getElementById("onethree").addEventListener("click", determine);

document.getElementById("twoone").addEventListener("click", determine);
document.getElementById("twotwo").addEventListener("click", determine);
document.getElementById("twothree").addEventListener("click", determine);

document.getElementById("threeone").addEventListener("click", determine);
document.getElementById("threetwo").addEventListener("click", determine);
document.getElementById("threethree").addEventListener("click", determine);


//Adds X to box clicked
function determine() {
    var det = event.target.getAttribute("id");
    var x = cellNumber.indexOf(det);

    document.getElementById(det).innerHTML = "<img src= 'x.png' class='xxx'>"

    takeOutArray(x);

    myTurn()

}


//My choice of where to put O randomly
function myTurn() {
    var random = Math.floor(Math.random() * cellNumber.length);
    var det = cellNumber[random]

    document.getElementById(det).innerHTML = "<img src= 'o.jpg' class='ooo'>"

    takeOutArray(random)


}

//takes out the option of the clickable boxes though the array
function takeOutArray(x) {
    cellNumber.splice(x, 1);
    return cellNumber;
}



//src attribute of each div with image
var one = document.getElementById("oneone").firstChild.getAttribute("src");
var two = document.getElementById("onetwo").firstChild.getAttribute("src");
var three = document.getElementById("onethree").firstChild.getAttribute("src");

var four = document.getElementById("twoone").firstChild.getAttribute("src");
var five = document.getElementById("twotwo").firstChild.getAttribute("src");
var six = document.getElementById("twothree").firstChild.getAttribute("src");

var seven = document.getElementById("threeone").firstChild.getAttribute("src");
var eight = document.getElementById("threetwo").firstChild.getAttribute("src");
var nine = document.getElementById("threethree").firstChild.getAttribute("src");

//if statements

if (one === "x.png" && two === "x.png" && three === "x.png" ||
    four === "x.png" && five === "x.png" && six === "x.png" ||
    seven === "x.png" && eight === "x.png" && nine === "x.png" ||
    one === "x.png" && four === "x.png" && seven === "x.png" ||
    two === "x.png" && five === "x.png" && eight === "x.png" ||
    three === "x.png" && six === "x.png" && nine === "x.png" ||
    one === "x.png" && five === "x.png" && nine === "x.png" ||
    three === "x.png" && five === "x.png" && seven === "x.png") {
    document.getElementById("text").innerHTML = "You Win!"

}

if (one === "o.jpg" && two === "o.jpg" && three === "o.jpg" ||
    four === "o.jpg" && five === "o.jpg" && six === "o.jpg" ||
    seven === "o.jpg" && eight === "o.jpg" && nine === "o.jpg" ||
    one === "o.jpg" && four === "o.jpg" && seven === "o.jpg" ||
    two === "o.jpg" && five === "o.jpg" && eight === "o.jpg" ||
    three === "o.jpg" && six === "o.jpg" && nine === "o.jpg" ||
    one === "o.jpg" && five === "o.jpg" && nine === "o.jpg" ||
    three === "o.jpg" && five === "o.jpg" && seven === "o.jpg") {
    document.getElementById("text").innerHTML = "You Lose!"
}
