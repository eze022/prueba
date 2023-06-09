import { overlay, closeButton } from "../utils/constants.js";

/* import {
  openFormButton,
  closeFormButton,
  closeButtonNewPlace,
} from "../utils/constants"; */

export default class Popup {
  constructor(popup, button) {
    this._popup = document.querySelector(popup);
    this._button = document.querySelector(button);
    this._closeButton = document.querySelector(".close-btn");
    this._handleEscClose = (event) => this._handleEsc(event);
    this._overlay = document.querySelector(".overlay");
  }

  open() {
    this._overlay.classList.add("overlay_visible");
    this._popup.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._overlay.classList.remove("overlay_visible");
    this._popup.classList.remove("popup_visible");

    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEsc(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._overlay.addEventListener("click", () => this.close());
    this._button.addEventListener("click", () => this.open());
    this._closeButton.addEventListener("click", () => this.close());
  }
}
