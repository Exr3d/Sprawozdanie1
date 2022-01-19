var clear = document.getElementById("clear");
var deleteB = document.getElementById("delete");
var split = document.getElementById("split");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var increase = document.getElementById("increase");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var plus = document.getElementById("plus");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var minus = document.getElementById("minus");
var dot = document.getElementById("dot");
var zero = document.getElementById("zero");
var equals = document.getElementById("equals");
var display = document.getElementById('calc_display');


const buttonsArray =[one, two, three, four, five, six, seven, eight, nine, zero];

function oneClick(){
    
    var displayNumber = document.getElementById("calc_display").textContent;

    if(displayNumber == 0){
        document.getElementById("calc_display").innerHTML = "1";

    }else{
        document.getElementById("calc_display").innerHTML += "1";
    } 
}
function twoClick(){
    
    var displayNumber = document.getElementById("calc_display").textContent;

    if(displayNumber == 0){
        document.getElementById("calc_display").innerHTML = "2";

    }else{
        document.getElementById("calc_display").innerHTML += "2";
    } 
}
function threeClick(){
    
    var displayNumber = document.getElementById("calc_display").textContent;

    if(displayNumber == 0){
        document.getElementById("calc_display").innerHTML = "3";

    }else{
        document.getElementById("calc_display").innerHTML += "3";
    } 
}
function fourClick(){
    
    var displayNumber = document.getElementById("calc_display").textContent;

    if(displayNumber == 0){
        document.getElementById("calc_display").innerHTML = "4";

    }else{
        document.getElementById("calc_display").innerHTML += "4";
    } 
}
function fiveClick(){
    
    var displayNumber = document.getElementById("calc_display").textContent;

    if(displayNumber == 0){
        document.getElementById("calc_display").innerHTML = "5";

    }else{
        document.getElementById("calc_display").innerHTML += "5";
    } 
}
function sixClick(){
    
    var displayNumber = document.getElementById("calc_display").textContent;

    if(displayNumber == 0){
        document.getElementById("calc_display").innerHTML = "6";

    }else{
        document.getElementById("calc_display").innerHTML += "6";
    } 
}
function sevenClick(){
    
    var displayNumber = document.getElementById("calc_display").textContent;

    if(displayNumber == 0){
        document.getElementById("calc_display").innerHTML = "7";

    }else{
        document.getElementById("calc_display").innerHTML += "7";
    } 
}
function eightClick(){
    
    var displayNumber = document.getElementById("calc_display").textContent;

    if(displayNumber == 0){
        document.getElementById("calc_display").innerHTML = "8";

    }else{
        document.getElementById("calc_display").innerHTML += "8";
    } 
}
function nineClick(){
    
    var displayNumber = document.getElementById("calc_display").textContent;

    if(displayNumber == 0){
        document.getElementById("calc_display").innerHTML = "9";

    }else{
        document.getElementById("calc_display").innerHTML += "9";
    } 
}
function zeroClick(){
    
    var displayNumber = document.getElementById("calc_display").textContent;

    if(displayNumber == 0){
        document.getElementById("calc_display").innerHTML = "0";

    }else{
        document.getElementById("calc_display").innerHTML += "0";
    } 
}

function Clear(){
    document.getElementById("calc_display").innerHTML = "0";
}

function Dot(){
    var displayNumber = document.getElementById("calc_display").textContent;
    if(document.getElementById("calc_display").textContent != '.' && !displayNumber.includes('.')){
        document.getElementById("calc_display").innerHTML += ".";
    }
}
function Plus(){
    ifCanGo = new Boolean(false);
    var Operators = ['+', '-', '*', '/'];
    var displayNumber = document.getElementById("calc_display").textContent;
    
        if(document.getElementById("calc_display").textContent != '+' && !displayNumber.includes(Operators[0]) 
        && !displayNumber.includes(Operators[1]) && !displayNumber.includes(Operators[2]) 
        && !displayNumber.includes(Operators[3])){
           ifCanGo = true;
    }else{
        ifCanGo = false;
    }
    if(ifCanGo){
        document.getElementById("calc_display").innerHTML += "+";
    }
}
function Minus(){
    ifCanGo = new Boolean(false);
    var Operators = ['+', '-', '*', '/'];
    var displayNumber = document.getElementById("calc_display").textContent;
    
        if(document.getElementById("calc_display").textContent != '+' && !displayNumber.includes(Operators[0]) 
        && !displayNumber.includes(Operators[1]) && !displayNumber.includes(Operators[2]) 
        && !displayNumber.includes(Operators[3])){
           ifCanGo = true;
    }else{
        ifCanGo = false;
    }
    if(ifCanGo){
        document.getElementById("calc_display").innerHTML += "-";
    }  
}
function Increase(){
    ifCanGo = new Boolean(false);
    var Operators = ['+', '-', '*', '/'];
    var displayNumber = document.getElementById("calc_display").textContent;
    
        if(document.getElementById("calc_display").textContent != '+' && !displayNumber.includes(Operators[0]) 
        && !displayNumber.includes(Operators[1]) && !displayNumber.includes(Operators[2]) 
        && !displayNumber.includes(Operators[3])){
           ifCanGo = true;
    }else{
        ifCanGo = false;
    }
    if(ifCanGo){
        document.getElementById("calc_display").innerHTML += "*";
    }  
}
function Split(){
    ifCanGo = new Boolean(false);
    var Operators = ['+', '-', '*', '/'];
    var displayNumber = document.getElementById("calc_display").textContent;
    
        if(document.getElementById("calc_display").textContent != '+' && !displayNumber.includes(Operators[0]) 
        && !displayNumber.includes(Operators[1]) && !displayNumber.includes(Operators[2]) 
        && !displayNumber.includes(Operators[3])){
           ifCanGo = true;
    }else{
        ifCanGo = false;
    }
    if(ifCanGo){
        document.getElementById("calc_display").innerHTML += "/";
    }  
}
function Delete(){
    var displayNumber = document.getElementById("calc_display").textContent;

    document.getElementById("calc_display").innerHTML = displayNumber.slice(0, -1);
}
