import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupImage = this._popup.querySelector(".elements__place-popup");
    this._popupCaption = this._popup.querySelector(
      ".elements__description-popup"
    );
    this._cardImageClickHandler = this._cardImageClickHandler.bind(this);
  }

  _cardImageClickHandler(event) {
    const cardElement = event.target.closest(".elements__cards");
    const imageUrl = cardElement.getAttribute("data-link");
    const description = cardElement.getAttribute("data-name");
    this.open(imageUrl, description);
  }

  setEventListeners() {
    const cardElements = document.querySelectorAll(".elements__cards");
    cardElements.forEach((cardElement) => {
      const imageElement = cardElement.querySelector(".elements__place");
      imageElement.addEventListener("click", this._cardImageClickHandler);
    });
  }

  open(imageUrl, description) {
    this._popupImage.src = imageUrl;
    this._popupCaption.textContent = description;
    super.open();
  }
}

/* export default class PopupWithImage extends Popup {
  constructor(popupElement, imageElement, descriptionElement) {
    super(popupElement);
    this._popupImage = imageElement;
    this._popupDescription = descriptionElement;
  }

  open(imageUrl, description) {
    this._popupImage.src = imageUrl;
    this._popupDescription.textContent = description;
    super.open();
  }
} */

/* export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupImage = document.querySelector(".elements__place-popup");
    this._popupDescription = document.querySelector(
      ".elements__description-popup"
    );
  }

  open( { name, link },   event) {
    const cardNode = event.target.closest(".elements__cards");
    this._popupImage.src = cardNode.getAttribute("data-link");
    this._popupDescription.textContent = cardNode.getAttribute("data-name");
         this._popupDescription.textContent = name;
    this._popupImage.src = link; 
    super.open();
  } */

/*  showImage(event) {
    this.open({
      name: this._popupDescription.textContent,
      link: this._popupImage.src,
    });
  } */

/* setEventListeners() {
    const image = document.querySelector(".elements__place");
    image.addEventListener("click", (event) => {
      this.open();
    });
  } */
//}
