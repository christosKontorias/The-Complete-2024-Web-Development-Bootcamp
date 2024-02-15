var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var leftDiceImg = document.querySelector(".dice .img1");
var rightDiceImg = document.querySelector(".dice .img2");

leftDiceImg.setAttribute("src", `./images/dice${randomNumber1}.png`);
rightDiceImg.setAttribute("src", `./images/dice${randomNumber2}.png`);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Won!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Won!";
}else{
    document.querySelector("h1").innerHTML = "DRAW!!!";
}