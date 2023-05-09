let popup = document.querySelector('.popup');

function openPopup() {
  if (popup.length === 0) {
    popup.classList.add('popup_opened');
  } else {
    popup.classList.remove('popup_opened');
  }
}

let editBottom = document.querySelector('.profile__edit-button');
editBottom.addEventListener('click', openPopup);
