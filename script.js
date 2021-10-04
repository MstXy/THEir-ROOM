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
    document.getElementById("intro-container").style.display = "block";
    document.getElementById("intro-container").style.animation = "fadeIn 2s";
}, 2000);

}


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
