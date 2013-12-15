"use strict";

/*
* TEST 1
*/
// Test ett - Skapa en varibel, tilldela den värdet 10 och returnera variablen
function test1() {
	
	var tal =10;
	
	return tal;
	// jag har skapat en variabeln och tilldelat värdet 10. Sedan returnerar jag talet.
	
}


/*
* TEST 2
*/
// Skapa två variabler och tilldela dessa de numeriska värdena 2.5 och 8. 
// Multiplicera sedan de två variablerna, returnera produkten
function test2() {
	var tal1 = 2.5;
	var tal2 =8;
	var resultat=2.5*8;
	return resultat;
	// jag har skapat två variabler och sedan multipliserat de numerska värderna med varandra och retunerat resultat.

}


/*
* TEST 3
*/
// Du får två variabler av datatypen Number (tal1 och tal2)
// Dessa kommer som parametrar i funktionen nedan
// Minska den som heter tal1 med den som heter tal2 och returnera resultatet av denna beräkning
function test3(tal1, tal2) {
	
	var resultat =tal1-tal2;
	return resultat;
	//  Jag har skapat en variabel som heter resultat och sedan har jag minskat tal1 med tal 2 och sedan returnerat resultatet.
	
}


/*
* TEST 4
*/
// Avrunda talet som kommer in som parametern tal (datatyp Number)
// Använd funktionen Math.round
function test4(tal) {
	
	return Math.round(tal);
	// Jag har använt mig av metoden Math.round som avrundar talet.

}


/*
* TEST 5
*/
// returnera längden på variablen text som kommer in som parameter. Variablen är av datatypen string
function test5(text) {
	
 return text.length;
 // jag retunerade längden på strängen i variabeln.
	
}



/*
* TEST 6 
*/
// Returnera den näst sista bokstaven i textsträngen som kommer in i parametern text
function test6(text) {

	var nästsista = text.length - 1;
	return text.charAt(nästsista - 1);
	
	// Jag skapat en varabel som heter " nästsista" och det är lika med textlängden -1. För att få fram vilket nummer näst sista bokstaven har. Sedan retunerade jag nästsista bokstaven genom att skriva (text.charAt(nästsista - 1). Därför att då går jag tillbaka tvåsteg och hamnar då på den näst sista bokstaven.
}


/*
* TEST 7
*/
// Parametrarna firstname och surname kommer in till funktionen
// returnera dessa som en textsträng på formen: "efternamn, förnamn"
// Exempelvis, innehåller firstname värdet "Greta" och surname värdet "Karlsson"
// ska du returnera textsträngen "Karlsson, Greta"
function test7(firstname, surname) {
	

var namn = surname + ", " + firstname ;
return namn; 
}
//  Jag skapade en variable somm heter namn och skrev det är lika med "surname+ ", "+ firstnamne" och sedan gjorde jag en return på namn.


/*
* TEST 8
*/
// strängen som kommer in med namnet word är en textsträng som innhåller två ord med ett mellanslag emellan
// returnera det sista av dessa ord
// Kommer texsträngen "hej hopp" in ska alltså textsträngen "hopp" returneras
// Det finns flera sätt att lösa denna uppgift
// Ett tips kan vara att studera strängfunktionera indexOf och substr
//(se länktips i handledningen)
function test8(words) {
	var number = words.indexOf(" ");
	var word = words.substr(number + 1);
	
	return word;

}
// jag skapade två variablar  och tog hela parametern words och letade upp vilken plats det första mellanslaget finns, den har jag skapat i number.
// Sedan skapade jag en variabel till som heter word och där lägger jag till plus ett, för att komma till början av ordet. Sedan skriver jag return word.


/*
* TEST 9
*/
// Om numret i parametern number är större eller lika med 100 ska en boolean true returneras
// annars ska en boolean false resturneras
function test9(number) {
	if (number>= 100)
	{
		return true;
	}
	else
	{
		return false;
	}

// Först skriver jag if för att ta reda på om det som parantesen är sann, då skriver jag return true.Om det inte är sant så skriver jag else och sedan return false.
}


/*
* TEST 10
*/
// Om parametern epost ELLER namn är tomma strängar ska texten "Du har glömt att ange namn eller e-post"
// annars ska ytterligare en test göras ifall variablen epost innehåller ett @-tecken. Är det sant ska texten "Ditt meddelande skickas" returneras
// annars ska texten "Ange en e-postadress" returneras
// För att kolla om en textsträng innehåller ett speciellt tecken kan funktionen indexOf användas 
//(se länktips i handledningen)

function test10(epost, namn) {


if(epost.length<1||namn.length<1){
return	"Du har glömt att ange namn eller e-post";
}

else if(epost.indexOf("@")<0){
	return "Ange en e-postadress";
}

else{
	return "Ditt meddelande skickas";
}

}
//Först kollar jag ifall epost längden är mindre än 1 eller om namn längden är mindre än 1. Om det är det, blir det return " Du har glömt att ange namn eller epost."
// Jag skriver else if därför att kolla om det finns ett @ i epost.Och finns det ett @ så går den vidare till else. Finns det inte det så hoppar det över else-
//Jag skriver else därför att om det är större än 1 så kommer inte det som var i if-satsen att gå igenom. Sedan skriver jag return "Ditt medelande har skickats" 

/*
* TEST 11
*/
// Du får en array som parameter till funktionen
// Returnera det mittersta värdet i denna array
// Ett tips kan vara att man kan behöva använda Math.round här för att räkna 
// ut det mittersta indexet i arrayen
//(se länktips i handledningen)
function test11(arr) {
	var middle=arr.length;
	middle=middle/2;
	middle-=1;
	middle=Math.round(middle);
	return arr[middle];
}
// Först skapar jag en variabel som heter "middle" och den är lika med arrayens längd. 
// Sedan skriver jag middle/2 för att leta upp det mittersta värdet.
// Sedan tar jag det minus 1.
// Sedan avrundar jag "middle" t.ex. om middle är 2.5 så blir det efter math.round 3.
// Sedan retunerar jag arrayens mittersta värde.

/*
* TEST 12
*/
// Du får en array arr som parameter till funktionen
// Arrayen innehåller ett antal tal. Räkna ut medelvärdet av dessa tal och returnera detta
// Medelvärdet är summan av alla tal i arrayen delat med antalet tal i arrayen
// Använd en for-loop för att lösa problemet
function test12(arr) {
	var summa=0;
	var length=arr.length;
	for(var i=0;i<length;i++){
	summa+=arr[i];
	}
	return summa/length;
}

// Först s¨skapar jag en variabel som heter "summa".  som är lika med 0.
// Sedan skapar jag en variabel som heter "length" och den är i lika med arrayens lägnd.
// Sedan skapar jag en for-loop som lägger till varje tal i arrayen på summan, då man vill få ut värderna i arrayen.
// Sedan skriver jag return summa delat på längden , därför att jag ska räkna ut medelvärdet, då tar jag summan av alla tal och dela på antalet.





















/**
Kod för testning. Koden här under får du INTE röra!!
****************************************************
*/

var counter = 0;
if(test1() === 10) {doIt("test_1")}
if(test2() === 20) {doIt("test_2")}
if(test3(10, 5) === 5) {doIt("test_3")}
if(test4(3.5) === 4 && test4(3.4) === 3) {doIt("test_4")}
if(test5("erik") === 4 && test5("abcdefghijk") === 11){doIt("test_5")}
if(test6("tjolahopp") === "p" && test6("abcdefghijk") === "j"){ doIt("test_6")}
if(test7("Greta", "Karlsson") === "Karlsson, Greta" && test7("abc", "def") === "def, abc"){ doIt("test_7")}
if(test8("hej då!") === "då!" && test8("Pingvin Elefant") === "Elefant") {doIt("test_8")}
if(test9(100)  && !test9(99) && test9(101)) {doIt("test_9");}
if(test10("thajo@lnu.se", "John") === "Ditt meddelande skickas" 
&& test10("", "John") === "Du har glömt att ange namn eller e-post"
&& test10("thajo@lnu.se", "") === "Du har glömt att ange namn eller e-post"
&& test10("lnu.se", "John") === "Ange en e-postadress"
) {doIt("test_10")}
if(test11(new Array(2, 3, 5, 7, 11, 13, 17)) === 7 && test11(new Array(15, 1534, 1)) === 1534) {doIt("test_11");}
if(test12(new Array(2, 4, 6)) === 4 && test12(new Array(12, 87, 65, 23)) === 46.75) {doIt("test_13")}
function doIt(element_name) {
	counter++;
	document.getElementById(element_name).style.backgroundColor = "#00FF00";
}
if(counter > 12) {
	alert("Hurra! Du fixade första laborationen! Glöm inte att göra en release på github. Bra jobbat!");
}

