var hundar = ["../pics/hund1.jpg", "../pics/hund2.jpg", "../pics/hundochkatt.jpg"];
var count=1;

setInterval(function() {
	changeImage();
}, 5000);

function changeImage () {
  var image=document.querySelector("#Hund");
  image.setAttribute("src",hundar[count] );
  count+=1;
  
  if(count>2){
  	count=0;
  }
}
