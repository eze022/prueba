let inputName = document.querySelector(".popup__input_name");
let inputJob = document.querySelector(".popup__input_job");
let profileFullName = document.querySelector(".profile-info__fullname");
let profileJob = document.querySelector(".profile-info__job");
let inputTitle = document.querySelector(".popup__input_title");
let inputUrlImage = document.querySelector("#url-input");
const cardContainer = document.querySelector(".elements__table");
const cardImage = document.querySelector(".elements__place");
const popupImage = document.querySelector(".elements__place-popup");
const popupDescription = document.querySelector(".elements__description-popup");
const popupElement = document.querySelector(".elements__popup");
const closeButton = document.querySelector(".close-btn");
/* const closeButtonNewPlace = document.querySelector(
  ".popup__close-btn_content_new-place"
);
const closeFormButton = document.querySelector(".popup__close-btn"); */
const overlay = document.querySelector(".overlay");
const openFormButton = document.querySelector(".edit-btn");
const addButton = document.querySelector(".add-btn");
const popupEditProfile = document.querySelector(".popup");
const popupNewPlace = document.querySelector(".popup_content_new-place");
const saveButton = document.querySelector(".popup__save-btn");
const createButton = document.querySelector(".popup__create-btn");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "./images/Yosemite.svg",
  },
  {
    name: "Lago Louise",
    link: "./images/Louise.svg",
  },
  {
    name: "Montañas Calvas",
    link: "./images/Montañas-calvas.svg",
  },
  {
    name: "Latemar",
    link: "./images/Latemar.svg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "./images/Vanoise.svg",
  },
  {
    name: "Lago di Braies",
    link: "./images/Di-Braies.svg",
  },
];

const parametres = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

export {
  inputName,
  inputJob,
  profileFullName,
  profileJob,
  inputTitle,
  inputUrlImage,
  cardContainer,
  cardImage,
  popupImage,
  popupDescription,
  popupElement,
  closeButton,
  /*   closeButtonNewPlace,
  closeFormButton, */
  overlay,
  openFormButton,
  addButton,
  popupEditProfile,
  popupNewPlace,
  saveButton,
  createButton,
  parametres,
  initialCards,
};
