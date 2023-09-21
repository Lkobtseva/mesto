export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const userInfo = {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
    };
    return userInfo;
  }

  setUserInfo(userData) {
    this._nameElement.textContent = userData.name;
    this._aboutElement.textContent = userData.about;
  }

  setUserAvatar(userData) {
    this._avatarElement.src = userData.avatar;
  }
}