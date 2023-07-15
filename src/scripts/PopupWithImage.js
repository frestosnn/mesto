import { Popup } from './Popup.js';
import { bigPhoto, bigPhotoTitle } from './utils/constants.js';

export class PopupWithImage extends Popup {
  constructor(selector) {
    //наследуем от родителя
    super(selector);
  }

  open() {
    //вызываем родительский метод
    super.open();

    //дополняем родительский метод
    bigPhoto.src = this._popup.src;
    bigPhotoTitle.textContent = this._popup.textContent;
    bigPhoto.alt = this._popup.textContent;
  }
}
