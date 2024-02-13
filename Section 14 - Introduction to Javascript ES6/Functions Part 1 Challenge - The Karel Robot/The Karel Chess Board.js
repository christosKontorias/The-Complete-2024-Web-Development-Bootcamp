function main(){
    stepsRow1();
    stepsRow2();  
    stepsRow3();
    stepsRow4();
    stepsRow5();
 }
 
 function stepsRow1(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    turnLeft();
    move();
 }
 
 function stepsRow2(){
    turnLeft();
    move();
    putBeeper();
    move();
    move();
    putBeeper();  
    move();
    turnRight();
    move();
 }
 
 function stepsRow3(){
    turnRight();
    putBeeper();
    move();
    move();
    putBeeper();     
    move();
    move();
    putBeeper();  
    turnLeft();
    move();
 }
 
 function stepsRow4(){
    turnLeft();
    move();
    putBeeper();
    move();
    move();
    putBeeper();  
    move();
    turnRight();
    move();
 }
 
 function stepsRow5(){
    turnRight();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
 }