//Camera permission 


const video = document.getElementById('video')

function startvideo() {
	navigator.getUserMedia(
		{	
			video: {} },
		stream => video.srcObject = stream,
		err => console.error(err)
  )

}


  

startvideo();


//User name input

function booster() {
	var Response =	prompt("please,Type your name!");
	alert("welcome" + ","+" " +Response + "."+ " " + "Please allow your camera" );
}

booster(); 



// User geolocation

var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
















