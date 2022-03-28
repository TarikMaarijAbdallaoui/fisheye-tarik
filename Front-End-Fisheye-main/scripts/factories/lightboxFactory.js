
let actualMediaId;

function setMediaModal(mediaId, mediaType, mediaUrl, mediaTitle){
  let modalImgElement = document.querySelector(".media-modal-img img");
  let modalVideoElement = document.querySelector(".media-modal-img video");

  

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

  actualMediaId = mediaId;
}

function mediaModalSlide(slideAction){

    /* l'obtention du chemin de photographerId, media*/
    getNextAssetPath = (photographerId, media) =>
    `assets/photographers/${photographerId}/${media}`;

  const actualMediaIndex = photographer.medias.findIndex((media) => {
    if (media.id === actualMediaId) return true;
  });
}
