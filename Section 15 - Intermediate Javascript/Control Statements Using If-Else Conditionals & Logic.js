prompt("Enter Your Name!");
prompt("Enter Your Crush Name!");

var calculateLove = Math.random() * 100;
calculateLove = Math.floor(calculateLove) + 1;

if(calculateLove > 80){
    alert("Your love score is: " + calculateLove + "%" + " Perfect");
}else {
    alert("Your love score is: " + calculateLove + "%" + " Not Bad!");
}

