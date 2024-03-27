var randonNum = Math.floor(Math.random() * 6) + 1;

var randomDiceImg = "images/dice" + randonNum + ".png";

var imgg = document.querySelectorAll("img")[0];

imgg.setAttribute("src", randomDiceImg);

var randonNum2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = "images/dice" + randonNum2 + ".png";

var imgg2 = document.querySelectorAll("img")[1];

imgg2.setAttribute("src", randomDiceImg2);

if(randonNum > randonNum2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Winss!";
} else if (randonNum2 > randonNum){
    document.querySelector("h1").innerHTML = "Player 2 Winss!🚩";
} else{
    document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}