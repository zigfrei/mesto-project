export default class UserInfo {
  constructor({ name, about, avatar }) {
    this.profileName = document.querySelector(name);
    this.profileAbout = document.querySelector(about);
    this.avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    this.objectInfo = {
      name: this.profileName.textContent,
      about: this.profileAbout.textContent,
    };
    return this.objectInfo;
  }

  setUserInfo(data) {
    if (data.name) {
      this.profileName.textContent = data.name;
    }
    if (data.about) {
      this.profileAbout.textContent = data.about;
    }
    if (data.avatar) {
      this.avatar.src = data.avatar;
    }
    if (data._id) {
      sessionStorage.setItem("profileId", JSON.stringify(data._id));
    }
  }
}
