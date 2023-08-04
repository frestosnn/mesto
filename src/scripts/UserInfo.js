export class UserInfo {
  constructor({ selectorUserName, selectorUserInfo, selectorUserAvatar }) {
    (this._userName = document.querySelector(selectorUserName)),
      (this._userInfo = document.querySelector(selectorUserInfo)),
      (this._avatar = document.querySelector(selectorUserAvatar));
  }

  getUserInfo() {
    //данные из разметки
    const userData = {
      name: this._userName.textContent,
      about: this._userInfo.textContent
    };

    return userData;
  }

  setUserInfo(data) {
    //вместо данных из разметки, вставляем данные из инпутов попапа(data)
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.about;
  }

  setUserAvatar(data) {
    this._avatar.src = data.avatar;
  }
}
