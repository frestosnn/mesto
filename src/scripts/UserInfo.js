export class UserInfo {
  constructor({ selectorUserName, selectorUserInfo }) {
    (this._userName = document.querySelector(selectorUserName)),
      (this._userInfo = document.querySelector(selectorUserInfo));
  }

  getUserInfo() {
    //данные из разметки
    const userData = {
      name: this._userName.textContent,
      info: this._userInfo.textContent
    };

    return userData;
  }

  setUserInfo(data) {
    //вместо данных из разметки, вставляем данные из инпутов попапа(data)
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.info;
  }
}
