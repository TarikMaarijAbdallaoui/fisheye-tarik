
function setMediaModal(mediaId, mediaType, mediaUrl, mediaTitle){
  let modalImgElement = document.querySelector(".media-modal-img img");
  let modalVideoElement = document.querySelector(".media-modal-img video");

  const modalTitleElement = document.querySelector(".media-modal-title p");
  modalTitleElement.textContent = mediaTitle;

  switch (mediaType) {
    case "image":
      modalImgElement.setAttribute("src", mediaUrl);
      modalImgElement.setAttribute("alt", mediaTitle);
      modalVideoElement.style.display = "none";

      modalImgElement.style.display = "flex";
      modalImgElement.focus();
      break;
    case "video":
      modalVideoElement.setAttribute("src", mediaUrl);
      modalImgElement.style.display = "none";

      modalVideoElement.setAttribute("alt", mediaTitle);
      modalVideoElement.style.display = "flex";
      modalVideoElement.focus();
      break;
    default:
      throw new Error("Unknown media type format");
  }

  let actualMediaId;
  actualMediaId = mediaId;
}
