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
$('.room-images').each(function() {
  var $img = $(this);
  $img.on('load', function(){
    $img.width($img.width()*.5);
  });
});

var items = document.getElementsByClassName('room-images');
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', showDescription);
}

function showDescription(e) {
  // for text
  displaying = document.getElementsByClassName('obj_description');
  for (var i = 0; i < displaying.length; i++) {
    displaying[i].style.display = "none";
  }
  id = this.id.replace("img", "");
  document.getElementById("d"+id).style.display = "block";

  //for image

}

var audioPlaying = false;
var audios = document.getElementsByClassName('audioBtn');
for (var i = 0; i < audios.length; i++) {
  audios[i].addEventListener('click', playAudio);
}

function playAudio(e) {
  id = this.id.replace("a", "");
  if (audioPlaying) {
    document.getElementById("audio"+id).pause();
  } else {
    document.getElementById("audio"+id).play();
  }

}
