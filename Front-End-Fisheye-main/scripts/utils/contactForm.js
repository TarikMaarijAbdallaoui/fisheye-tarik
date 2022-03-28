async function displayModal(){
    ({ photographers } = await getPhotographers());
  
    photographers.forEach((photographerItem) => {
      if (photographerItem.id == userId) {
        photographer = photographerItem;
      }
    });

    const modal = document.getElementById("contact_modal");
    modal.style.display = "flex";
    modal.style.position = "fixed";

    const formTitle = document.querySelector("#contact_modal h2");
    formTitle.innerHTML = `Contactez-moi <br> ${photographer.name}`;

    const form = document.getElementById("contact-form");
    
    const prenomDiv = document.createElement("div");
    const prenomLabel = document.createElement("label");
    prenomLabel.innerText = "Prénom";
    const inputPrenom = document.createElement("input");
    inputPrenom.setAttribute("type", "text");
    prenomDiv.appendChild(prenomLabel);
    prenomDiv.appendChild(inputPrenom);
    form.appendChild(prenomDiv);
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
  }
  