/* import { closePopupOverlay, closePopupEsc } from "../scripts/index.js"; */

import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";

import {
  /* _handleClosePopup,
  _handleOpenPopup,
  showImage,
  handlecloseButton, */
  likeCards,
  removeCards,
} from "../utils/utils.js";

import { initialCards } from "../utils/constants.js";

export default class Card {
  constructor({ data, handleCardClick }) {
    this._text = data.name;
    this._image = data.link;
    this.handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector("#cards-template")
      .content.querySelector(".elements__cards")
      .cloneNode(true);

    return cardTemplate;
  }

  _setAtributte() {
    this._element.setAttribute("data-link", this._image);
    this._element.setAttribute("data-name", this._text);
  }

  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();
    this._setAtributte();
    this._element.querySelector(".elements__place").src = this._image;
    this._element.querySelector(".elements__description").textContent =
      this._text;
    this._element.querySelector(".elements__place").alt = this._text;

    return this._element;
  }

  /* handleOpenPopup() {
    this.handleCardClick(this._text, this._image);
  } */

  _setEventListeners() {
    const image = this._element.querySelector(".elements__place");
    const heart = this._element.querySelector(".elements__icon");
    /* showImage(image); */
    /* handlecloseButton(); */
    likeCards(this._element);
    removeCards(this._element);
    /* image.addEventListener("click", () => {
      this.handleCardClick(this._text, this._image);
      open({ image: this._image, text: this._text });
    }); */
    /* closePopupOverlay();
    closePopupEsc(); */
  }
}

/* function handleCardClick(item) {
  const popup = new Popup(".elements__place-popup");
  popup.open(item.text, item.image);
} */
