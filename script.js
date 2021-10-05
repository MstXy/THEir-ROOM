// navigation
load_index = function() {
  window.location.href = "index.html";
}
load_room = function() {
  window.location.href = "explore.html";
}
load_item = function() {
  window.location.href = "http://www.w3schools.com";
}
load_goal = function() {
  window.location.href = "http://www.w3schools.com";
}

// INTRO PAGE ==============================================
// video play
start_video_play = function() {
  document.getElementById("start_video").play();
  document.getElementById("play_button").style.opacity = "10%";
  document.getElementById("play_button").remove();
}

// video end
video_end = function() {
  document.getElementById("video-container").style.animation = "fadeOut 2s";
  setTimeout(function() {
    document.getElementById("video-container").remove();
    document.getElementById("intro-container").style.display = "block";
    document.getElementById("intro-container").style.animation = "fadeIn 2s";
}, 2000);

}


// ROOM PAGE ===============================================
//remember every image's zIndex
let zIndexMemorizer = {};

$('.room-images').each(function() {
  var $img = $(this);
  $img.on('load', function(){
    $img.width($img.width()*.5);
    zIndexMemorizer[$img.attr("id")] = $img.css('z-index');
  });
});

var highlightingImage = 0;

var items = document.getElementsByClassName('room-images');
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', showDescription);
}
function showDescription(e) {
  // for text
  var displaying = document.getElementsByClassName('obj_description');
  for (var i = 0; i < displaying.length; i++) {
    displaying[i].style.display = "none";
  }
  id = this.id.replace("img", "");
  document.getElementById("d"+id).style.display = "block";

  if (highlightingImage != 0) {
    document.getElementById(highlightingImage).style.border = "";
    document.getElementById(highlightingImage).style.filter = "";
    console.log(zIndexMemorizer[highlightingImage]);
    document.getElementById(highlightingImage).style.zIndex = zIndexMemorizer[highlightingImage];
  }
  this.style.border = "double white 6px";
  this.style.filter = "drop-shadow(0 0 0.75rem white)";
  this.style.zIndex = 100;
  highlightingImage = this.id;

  console.log(highlightingImage);
}

var playingAudio = 0;
var audios = document.getElementsByClassName('audioBtn');
for (var i = 0; i < audios.length; i++) {
  audios[i].addEventListener('click', playAudio);
}

function playAudio(e) {
  id = this.id.replace("a", "");
  if (playingAudio != 0) {
    if (id == playingAudio) {
      document.getElementById("audio"+id).pause();
      playingAudio = 0;
    } else {
      var playing = document.getElementsByClassName('audios');
      for (var i = 0; i < playing.length; i++) {
        playing[i].pause();
        playing[i].currentTime = 0;
      }
      document.getElementById("audio"+id).play();
      playingAudio = id;
    }
  } else {
    document.getElementById("audio"+id).play();
    playingAudio = id;
  }

}
