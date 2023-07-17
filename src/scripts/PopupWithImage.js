import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(selector) {
    //наследуем от родителя
    super(selector);

    //находим элемены в попапе
    this.image = this._popup.querySelector('.popup__img');
    this.title = this._popup.querySelector('.popup__photo-title');
  }

  open(name, link) {
    //вызываем родительский метод
    super.open();

    //дополняем родительский метод
    this.image.src = link;
    this.title.textContent = name;
    this.title.textContent = name;
  }
}
