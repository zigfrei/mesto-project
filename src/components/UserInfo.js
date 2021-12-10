export default class UserInfo {
constructor({name, about}, ){
this.name = name;
this.about = about;
}

getUserInfo(){
  this.profileName = document.querySelector(this.name);
  this.profileAbout = document.querySelector(this.about);
  this.objectInfo = {
    name: this.profileName.textContent,
    about: this.profileAbout.textContent,
  }
return this.objectInfo;
}

setUserInfo(data){
    this.profileName.textContent = data.name;
    this.profileAbout.textContent = data.about
  }

}
