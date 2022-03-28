
function setMediaModal(mediaId, mediaType, mediaUrl, mediaTitle){
  let modalImgElement = document.querySelector(".media-modal-img img");
  let modalVideoElement = document.querySelector(".media-modal-img video");

  const modalTitleElement = document.querySelector(".media-modal-title p");
  modalTitleElement.textContent = mediaTitle;
}