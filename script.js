var tabell = document.getElementById("tabell");
var link=document.getElementById("visadold");
// Här har jag skapat två variablar som heter "tabell och link". Jag skapat det för att hämta in tabell länken via "document.getElementById"

link.onclick = visatabell;
// Här visar jag vad som händer om man klickar på länken så visas tabellen.

function visatabell () {
	
  if(tabell.className == "hide")
{tabell.className = "show";}

	
else if(tabell.className == "show")
{tabell.className="hide";}

// här har jag skapat en if-sats därför att om tabellen är dold så kan användaren klicka på visa och då kommer tabellen tillbaka igen.
// På else if är att om visas så kan anvädaren klicka på dold.

}





