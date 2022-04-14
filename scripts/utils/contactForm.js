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

    form.innerHTML = "";
    
    const prenomDiv = document.createElement("div");
    const prenomLabel = document.createElement("label");
    prenomLabel.innerText = "Prénom";
    const inputPrenom = document.createElement("input");
    inputPrenom.setAttribute("tabindex", `${indexNumber += 1}`)
    inputPrenom.setAttribute("type", "text");
    inputPrenom.setAttribute("id", "prenom");
    const errorPrenom = document.createElement("span");
    errorPrenom.setAttribute("id", "prenom_error");
    errorPrenom.style.color = "red";
    prenomDiv.appendChild(prenomLabel);
    prenomDiv.appendChild(inputPrenom);
    prenomDiv.appendChild(errorPrenom);

    const nomDiv = document.createElement("div");
    const nomLabel = document.createElement("label");
    nomLabel.innerText = "Nom";
    const inputNom = document.createElement("input");
    inputNom.setAttribute("tabindex", `${indexNumber += 1}`)
    inputNom.setAttribute("type", "text");
    nomDiv.appendChild(nomLabel);
    nomDiv.appendChild(inputNom);

    const emailDiv = document.createElement("div");
    const emailLabel = document.createElement("label");
    emailLabel.innerText = "Email";
    const inputEmail = document.createElement("input");
    inputEmail.setAttribute("tabindex", `${indexNumber += 1}`)
    inputEmail.setAttribute("type", "email");
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(inputEmail);

    const textDiv = document.createElement("div");
    const textLabel = document.createElement("label");
    textLabel.innerText = "Message";
    const textarea = document.createElement("textarea");
    textarea.setAttribute("tabindex", `${indexNumber += 1}`)
    textarea.setAttribute("rows", "5");
    textDiv.appendChild(textLabel);
    textDiv.appendChild(textarea);

    const button = document.createElement("button");
    button.setAttribute("tabindex", `${indexNumber += 1}`)
    button.setAttribute("class", "contact_button");
    button.innerText = "Envoyer";

    form.appendChild(prenomDiv);
    form.appendChild(nomDiv);
    form.appendChild(emailDiv);
    form.appendChild(textDiv);
    form.appendChild(button);

  //  créer un événement pour valider les champs du formulaire
  
  const sendButton = document.querySelector("#contact-form .contact_button");

  sendButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (validate()) {
      const modalForm = document.querySelector(".modal");
      modalForm.innerHTML = `<h2 style="color: white">Message envoyé avec succès.
      <i style="color: green" class="fa-solid fa-check"></i></h2>`;
      setTimeout(() => {
        closeModal();}, 2500);
    }  
  });
}

// fonction validate: elle vérifie les champs du formulaire

function validate(){
  var errorVerif = false;
  var regex1 = /^[A-Za-z\s]+$/;
  var regex2 = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

  const prenom = document.getElementById("prenom");

   // check prenom
  if(
  prenom.value === "" ||
  prenom.value.length < 2 ||
  !prenom.value.match(regex1)
  ) {
  document.getElementById("prenom_error").innerHTML =
  "Veuillez entrer au moins 2 caractères valables.";
  prenom.focus(); prenom.style.border = "2px solid #fe142f";
  } else {
  document.getElementById("prenom_error").innerHTML = "";
  prenom.style.border = "0px solid red";
  }

  // message de confirmation
  if (errorVerif === true) {
    return false;
  } else {
    let messageData = {
      prenom:  prenom.value,
    }
  }  
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
  