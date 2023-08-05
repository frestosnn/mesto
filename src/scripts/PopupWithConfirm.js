import { Popup } from './Popup.js';

export class PopupWithConfirm extends Popup {
  constructor(selector, handleSubmit) {
    super(selector);

    this.handleSubmit = handleSubmit;

    //кнопка вы уверены?
    this._confirmButton = document.querySelector('.popup__button-save_popup_delete');
  }

  _cancelLoading = evt => {
    evt.preventDefault();
  };

  setEventListners() {
    this._confirmButton.addEventListener('click', () => {
      this._cancelLoading();
      this.handleSubmit(card);
    });
  }
}
