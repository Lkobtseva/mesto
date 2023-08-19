export default class UserInfo {
    constructor({ nameSelector, aboutSelector }) {
      this._nameElement = document.querySelector(nameSelector);
      this._aboutElement = document.querySelector(aboutSelector);
    }
  
    getUserInfo() {
      const userInfo = {
        name: this._nameElement.textContent,
        about: this._aboutElement.textContent,
      };
      return userInfo;
    }
  
    setUserInfo(userInfo) {
      this._nameElement.textContent = userInfo.name;
      this._aboutElement.textContent = userInfo.about;
    }
  }