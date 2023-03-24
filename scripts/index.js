import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import {
  addButton,
  createButton,
  parametres,
  saveButton,
  initialCards,
  inputName,
  inputTitle,
  inputUrlImage,
  profileFullName,
  overlay,
  cardContainer,
  inputJob,
  profileJob,
  popupEditProfile,
  popupNewPlace,
  cardImage,
  popupDescription,
  popupImage,
  popupElement,
  openFormButton,
} from "../utils/constants.js";

/* inputName.value = profileFullName.textContent;
inputJob.value = profileJob.textContent; */

/*
function showNewImages(event) {
  const cardNode = event.target.closest(".elements__cards");
  popupElement.classList.add("popup_visible");
  overlay.classList.toggle("overlay_visible");
  popupImage.src = cardNode.getAttribute("data-link");
  popupElement.querySelector(".elements__description-popup").textContent =
    cardNode.getAttribute("data-name");
} */

const formValidator = new FormValidator(parametres);
formValidator.enableValidation();

/* const popupWithImage = new PopupWithImage(".elements__popup");
popupWithImage.open(); */

/* const popupWithImage = new PopupWithImage(
  ".elements__popup",
  ".elements__place-popup",
  ".elements__description-popup"
); */

const popupWithImage = new PopupWithImage(".elements__popup");
popupWithImage.setEventListeners();

/* cardImage.addEventListener("click", () => {
  
}); */

/* cardImage.addEventListener("click", () => {
  popupWithImage.open(event);
}); */

const createCard = (data) => {
  const cardElement = new Card({
    data,
    handleCardClick: { name: data.name, link: data.link },
  });
  return cardElement.generateCard();
};

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = createCard({
        name: item.name,
        link: item.link,
      });
      return card;
    },
  },
  ".elements__table"
);
section.renderItems();

const popupEditButton = new Popup(".popup", ".edit-btn");
const popupNewCard = new Popup(".popup_content_new-place", ".add-btn");

const popupProfileForm = new PopupWithForm(".popup", handleProfileFormSubmit);
popupProfileForm.setEventListeners();

const popupAddForm = new PopupWithForm(
  ".popup_content_new-place",
  handleAddFormSubmit
);
popupAddForm.setEventListeners();

function handleAddFormSubmit() {
  const card = createCard({
    name: inputTitle.value,
    link: inputUrlImage.value,
  });
  section.addItemAtIniticial(card);
  popupAddForm.close();
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  const profileUserInfo = profileUser.getUserInfo();
  profileFullName.textContent = profileUserInfo.name;
  profileJob.textContent = profileUserInfo.job;
  popupProfileForm.close();
}

const profileUser = new UserInfo({
  userName: inputName,
  userJob: inputJob,
});

openFormButton.addEventListener("click", () => {
  popupProfileForm.open();
});

addButton.addEventListener("click", () => {
  popupAddForm.open();
});

saveButton.addEventListener("click", handleProfileFormSubmit);
createButton.addEventListener("click", handleAddFormSubmit);

/* cardImage.addEventListener("click", (event) => {
  event.target.open({ name: cardImage.name, link: data.link });
}); */

/* overlay.addEventListener("click", () => {
  if (overlay.contains("overlay_visible")) {
    overlay.classList.add("overlay_visible");
    popup.classList.add("popup_visible");
  }
}); */

/* popupWithImage.showImage(cardImage); */
/* cardImage.addEventListener("click", () => {
  imagePopup.open(imageElement.src, imageElement.alt);
}); */
