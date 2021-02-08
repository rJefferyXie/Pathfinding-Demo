function change_content(title, description, video) {
    var x = document.getElementById("video_header");
    var y = document.getElementById("video_description");
    var z = document.getElementById("video_playing");
    if (x.innerHTML === title) {
      return;
    }
    else {
        x.innerHTML = title;
        y.innerHTML = description;
        z.src = "demo_videos/" + video;
    }
}




