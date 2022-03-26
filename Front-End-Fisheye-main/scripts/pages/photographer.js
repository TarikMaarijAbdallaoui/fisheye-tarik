//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers() {
    const respons = await fetch("data/photographers.json");

    let data = await respons.json();
    let photographers = [...data.photographers];
    let dataMedia = [...data.media];

    photographers.forEach((photographer) => {
        const photographerMedias = dataMedia.filter((photographerMedia) => photographerMedia.photographerId === photographer.id);
        photographer.medias = [...photographerMedias];
    });
    return { photographers };
}

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");

// la fonction qui contrôle le header de la page individuelle
function displayPhotographerHeader() {

    const headerNameElement = document.querySelector("#photograph-name");
    const headerCityElement = document.querySelector("#photograph-city");
    const headerTaglineElement = document.querySelector("#photograph-tagline");
    const headerImgElement = document.querySelector("#photograph-img");

    const infoContainer = document.createElement("div");
    infoContainer.setAttribute("class", "info-photographer");
    infoContainer.appendChild(headerNameElement);
    infoContainer.appendChild(headerCityElement);
    infoContainer.appendChild(headerTaglineElement);

    const contactContainer = document.createElement("div");
    contactContainer.setAttribute("class", "contact-container");
    const contact_button = document.querySelector(".contact_button");
    contactContainer.appendChild(contact_button);

    const imgContainer = document.createElement("div");
    imgContainer.setAttribute("class", "img-photographer");
    imgContainer.appendChild(headerImgElement);

    const photographHeader = document.querySelector(".photograph-header");
    photographHeader.appendChild(infoContainer);
    photographHeader.appendChild(contactContainer);
    photographHeader.appendChild(imgContainer);

    headerNameElement.textContent = photographer.name;
    headerCityElement.textContent = `${photographer.city}, ${photographer.country}`;
    headerTaglineElement.textContent = photographer.tagline;
    headerImgElement.setAttribute("src", `assets/photographers/${photographer.portrait}`);
    headerImgElement.setAttribute("alt", photographer.name);
}

// La fonction qui nous ramène les Medias de chaque photographe depuis: factories/photographerMedia.js

function displayPhotographerMedia(photographer) {
    const main = document.querySelector("main");
    const mediaSection = document.createElement("section");
    mediaSection.setAttribute("class", "photographer-medias");

    photographer.medias.forEach(async (media) => {
        const newMedia = new PhotographerMediaFactory(media);

        fetch(newMedia.mediaUrl)
            .then((result) => {
                if (result.ok) {
                    const mediaTemplate =
                   `<article class = "photograph-media-item" data-id="${newMedia._id}">
                       <a href = "#", class = "photograph-media-item_top">
                         ${newMedia.mediaCard}
                       </a>
                       <div class= "photograph-media-item_bottom">
                          <p class = "titleMedia"> ${newMedia._title} </p>
                          <div>
                              <span class="photograph-media-item_bottom-likes">
                                  ${newMedia._totalLikes}
                              </span>
                              <a href = "#!" onclick = "incrementMediaLike(${newMedia._id})">
                                  <i class="fa-solid fa-heart"></i>
                              </a>
                          </div>
                       </div>
                    </article> `;
                    mediaSection.insertAdjacentHTML("beforeend", mediaTemplate);
                }
            })
            .catch((err) => console.error(err));
    });
    main.appendChild(mediaSection);
}

// la fonction qui contrôle l'ordre des Medias
function filterMedias(){
    let header = document.querySelector(".photograph-header");

    let filters = document.createElement('section');
    filters.classList.add('filters');
    filters.insertAdjacentHTML('afterbegin', '<p>Trier par:</p>');
    main.appendChild(filters);

    let selection = document.createElement('select');
    let filterOpions = { popularity: "Popularité", date: "Date", title: "Titre" };

    for (let option in filterOpions) {
        let optionSelect = document.createElement("option");
        optionSelect.setAttribute("value", option);
        optionSelect.innerHTML = `<div class="option">${filterOpions[option]}</div>`;
        selection.appendChild(optionSelect);
      }

    filters.appendChild(selection);

    header.insertAdjacentElement("afterend", filters)
}

// Rectangle total likes
    function displayPhotographerInfos() {
        let mainControl = document.querySelector("main");

        let info = document.createElement("div");
        info.classList.add("sum-info");

        let totalLikes = document.createElement("span");
        totalLikes.setAttribute("id", "photograph-infos-likes");

        let infoPrice = document.createElement("span");
        infoPrice.setAttribute("id", "photograph-infos-price");

        const totalMediasLikes = () =>
        photographer.medias.reduce((acc, curr) => acc + curr.likes, 0);
        totalLikes.innerHTML = `${totalMediasLikes()} <i class="fa-solid fa-heart"></i>`;
        infoPrice.textContent = `${photographer.price} €/jour`;

        info.appendChild(totalLikes);
        info.appendChild(infoPrice);
        mainControl.appendChild(info);
    }

// la fonction qui incrémente/décrémente les likes

    let mediaLiked = [];
    function incrementMediaLike(mediaLikedId) {
        
        photographer.medias.forEach((media) => {
            if (media.id === mediaLikedId){
                if (!mediaLiked.includes(mediaLikedId)){
                    media.likes++;
                    document.querySelector (`[data-id='${mediaLikedId}'] .photograph-media-item_bottom-likes`).
                    innerHTML = media.likes; mediaLiked.push(mediaLikedId);
                } else {
                    media.likes--;
                    document.querySelector(
                    `[data-id='${mediaLikedId}'] .photograph-media-item_bottom-likes`
                    ).innerHTML = media.likes;
                    mediaLiked.pop(mediaLikedId);
                }
                
                displayPhotographerInfos();    
            }
        });    
    }


async function init() {
    ({ photographers } = await getPhotographers());

    photographers.forEach((photographerItem) => {
        if (photographerItem.id == userId) {
            photographer = photographerItem;
        }
    });

    displayPhotographerHeader();
    displayPhotographerMedia(photographer);
    displayPhotographerInfos();
}

init();

filterMedias();