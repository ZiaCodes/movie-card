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
