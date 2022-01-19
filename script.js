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
    
    var displayNumber = parseInt(document.getElementById("calc_display").value);
    
    if(displayNumber == 0){
        document.getElementById("calc_display").innerHTML = "1";
        window.alert('1');
    }else{
        document.getElementById("calc_display").innerHTML += "1";
        window.alert('2');
    } 
}