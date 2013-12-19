
document.getElementById("calculate_button").onclick = function(){

var input=document.getElementById("input_number").value;
var dollarkurs = 0.15;
var eurokurs = 0.11;

var message = input + " kr är " + input*eurokurs+" euro och " + input*dollarkurs + " dollar";

document.getElementById("number").innerHTML = message;

};



