import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(selector) {
    //наследуем от родителя
    super(selector);
  }

  open(data) {
    //вызываем родительский метод
    super.open();

    //дополняем родительский метод
    data.link.src = this._popup.src;
    data.name.textContent = this._popup.textContent;
    data.name.alt = this._popup.textContent;
  }
}
