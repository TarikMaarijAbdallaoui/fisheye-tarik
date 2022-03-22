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
                    `<article class = "photograph-media-item">
                    <a href = "#", class = "photograph-media-item_top">
                     ${newMedia.mediaCard},
                    </a>
                    </article> `;
                mediaSection.insertAdjacentHTML("beforeend", mediaTemplate);
                }
            })
            .catch((err) => console.error(err));
    });
    main.appendChild(mediaSection);
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
}

init();