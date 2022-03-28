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

    const nomDiv = document.createElement("div");
    const nomLabel = document.createElement("label");
    nomLabel.innerText = "Nom";
    const inputNom = document.createElement("input");
    inputNom.setAttribute("type", "text");
    nomDiv.appendChild(nomLabel);
    nomDiv.appendChild(inputNom);

    const emailDiv = document.createElement("div");
    const emailLabel = document.createElement("label");
    emailLabel.innerText = "Email";
    const inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(inputEmail);

    const textDiv = document.createElement("div");
    const textLabel = document.createElement("label");
    textLabel.innerText = "Message";
    const textarea = document.createElement("textarea");
    textarea.setAttribute("rows", "5");
    textDiv.appendChild(textLabel);
    textDiv.appendChild(textarea);

    const button = document.createElement("button");
    button.setAttribute("class", "contact_button");
    button.innerText = "Envoyer";

    form.appendChild(prenomDiv);
    form.appendChild(nomDiv);
    form.appendChild(emailDiv);
    form.appendChild(textDiv);
    form.appendChild(button);
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
  }
  