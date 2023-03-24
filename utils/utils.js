import Card from "../components/Card.js";
/* import { createCard } from "../scripts/index.js"; */

import {
  popupImage,
  popupDescription,
  popupElement,
  closeButton,
  /* closeButtonNewPlace,
  closeFormButton, */
  overlay,
  openFormButton,
  addButton,
  popupEditProfile,
  popupNewPlace,
  saveButton,
  createButton,
  profileFullName,
  inputName,
  profileJob,
  inputJob,
} from "./constants.js";

/* const showImage = (element) => {
  element.addEventListener("click", (event) => {
    const cardNode = event.target.closest(".elements__cards");
    popupImage.src = cardNode.getAttribute("data-link");
    popupDescription.textContent = cardNode.getAttribute("data-name");
    _handleOpenPopup(popupImage.src, popupDescription.textContent);
  });
};

function _handleOpenPopup(image, text) {
  popupImage.src = image;
  popupDescription.textContent = text;
  popupElement.classList.add("elements__popup_activate");
  overlay.classList.toggle("overlay_visible");
} */

/*
function togglePopup() {
  if (popupEditProfile.classList.contains("popup_visible")) {
    overlay.classList.toggle("overlay_visible");
    popupEditProfile.classList.toggle("popup_visible");
  }
  if (popupNewPlace.classList.contains("popup_visible")) {
    overlay.classList.toggle("overlay_visible");
    popupNewPlace.classList.toggle("popup_visible");
  }
} */

function likeCards(nodeCard) {
  const heartLike = nodeCard.querySelector(".elements__icon");
  heartLike.addEventListener("click", function (event) {
    event.target.classList.toggle("elements__icon_activate");
    event.target.removeEventListener("click", likeCards);
  });
}

function removeCards(nodeCard) {
  const cardTrash = nodeCard.querySelector(".elements__trash");
  cardTrash.addEventListener("click", function (event) {
    const card = nodeCard.closest(".elements__cards");
    card.remove();
    event.target.removeEventListener("click", removeCards);
  });
}

openFormButton.addEventListener("click", () => {
  overlay.classList.toggle("overlay_visible");
  popupEditProfile.classList.toggle("popup_visible");
});

/* overlay.addEventListener("click", (event) => {
  if (event.target.contains("overlay_visible")) {
    overlay.classList.add("overlay_visible");
    popup.classList.add("popup_visible");
  }
}); */

export { likeCards, removeCards };
