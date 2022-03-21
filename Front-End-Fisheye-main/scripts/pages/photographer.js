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