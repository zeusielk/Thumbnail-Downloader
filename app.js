document
  .getElementById("thumbnailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event);

    const videoUrl = document.getElementById("videoURL").value;
    const videoId = videoUrl.split("v=")[1];
    console.log(videoId);
    const positionBind = videoId.indexOf("&");
    if (positionBind !== -1) {
      videoId = substring(0, positionBind);
    }
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    const thumbnailDisplay = document.getElementById("thumbnailDisplay");
    thumbnailDisplay.innerHTML = `<img src="${thumbnailUrl}" alt="YouTube Thumbnail"><br><a href="script.php?url=${thumbnailUrl}" download>Download Thumbnail</a>`;
  });
