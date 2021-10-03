// video autoplay
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
}, 2000);
}
