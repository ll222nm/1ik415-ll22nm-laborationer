var dollarkurs = 0.15;
var eurokurs = 0.11;
document.getElementById("calculate_button").onclick = function(){
calculate_exchangerate();

};


function calculate_dollar(sek){
return sek*dollarkurs;	
}
function calculate_euro(sek){
return sek*eurokurs;	
}

function calculate_exchangerate(){
	var input=document.querySelector("#input_number");
	var sek=input.value;
	if(isNaN(sek)){
		alert("Du får bara skriva i siffror i rutan");
		
	}
	else{
		addnewlistvaluement(sek);
	}
}

function addnewlistvaluement(sek){
	var dollar=calculate_dollar(sek).toFixed(2);
	var euro=calculate_euro(sek).toFixed(2);
	var list=document.querySelector("#tidigare");
	
	var li=document.createElement("li");
	
	var line=sek+" sek = "+euro+" euro, "+dollar +" dollar";
	
	var text=document.createTextNode(line);
	
	li.appendChild(text);
	
	list.insertBefore(li,list.firstChild);
}



