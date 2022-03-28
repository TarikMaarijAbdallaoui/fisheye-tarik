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
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
  }
  