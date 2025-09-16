src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"

function PlayMusic() {

  var play=document.getElementById("music");
  play.play();
}

$(document).ready(function(){
  setTimeout(PlayMusic,3000);
})