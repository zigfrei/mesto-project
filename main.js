(()=>{"use strict";var e=document.querySelector(".popup_theme_main"),t=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__title"),r=document.querySelector(".profile__subtitle"),o=document.querySelector(".profile__avatar"),c=document.querySelector("#author-name"),u=document.querySelector("#profession"),a=e.querySelector(".popup__form"),i=document.querySelector(".popup_theme_avatar"),s=document.querySelector(".profile__avatar-button"),l=i.querySelector(".popup__form"),d=document.querySelector("#avatar-link"),f=document.querySelector(".cards__list"),p=document.querySelector("#card-name"),_=document.querySelector("#card-link"),m=document.querySelector(".popup_theme_img"),h=document.querySelector(".profile__add-button"),y=document.querySelector(".popup_theme_card"),v=y.querySelector(".popup__form");function b(e){"Escape"===e.key&&q(document.querySelector(".popup_opened"))}function S(e){e.classList.add("popup_opened"),document.addEventListener("keydown",b)}function q(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",b)}function L(e,t,n){return e.classList.toggle("cards__like-button_status_active"),t.textContent=n.likes.length}function E(e,t,n,r){var o=document.querySelector("#card-template").content.querySelector(".cards__body").cloneNode(!0),c=o.querySelector(".cards__img"),u=o.querySelector(".cards__like-counter"),a=o.querySelector(".cards__like-button"),i=o.querySelector(".cards__remove-button");return u.textContent=e.likes.length,o.querySelector(".cards__title").textContent=e.name,c.src=e.link,c.alt=e.name,function(e,t){return e.some((function(e){return e._id==t}))}(e.likes,t)&&a.classList.add("cards__like-button_status_active"),a.addEventListener("click",(function(t){r(t.target,e._id,u)})),e.owner._id==t&&(i.style.display="block"),i.addEventListener("click",(function(t){n(o,e._id)})),o.querySelector(".cards__img").addEventListener("click",(function(){var t,n,r,o;t=m,n=e.name,r=e.link,(o=t.querySelector(".popup__img")).src=r,o.alt=n,t.querySelector(".popup__caption").textContent=n,S(m)})),o}function k(e,t){(e.target.classList.contains("popup__close-button")||e.target.classList.contains("popup"))&&q(t)}var g=function(e){e.querySelector(".popup__submit-button").classList.add("popup__submit-button_disabled")},C=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.classList.remove(n.inactiveButtonClass):t.classList.add(n.inactiveButtonClass)},A={baseUrl:"https://nomoreparties.co/v1/plus-cohort-3",headers:{authorization:"d9ff5da1-b706-4c23-8de1-6bd8c391fef1","Content-Type":"application/json"}},x=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(e,t){(function(e){return fetch("".concat(A.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:A.headers}).then((function(e){return x(e)}))})(t).then((function(){return function(e){e.remove(),e=null}(e)})).catch((function(e){console.log(e)}))}function w(e,t,n){e.classList.contains("cards__like-button_status_active")?function(e,t){return fetch("".concat(A.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:A.headers}).then((function(e){return x(e)}))}(t).then((function(t){L(e,n,t)})).catch((function(e){console.log(e)})):function(e,t){return fetch("".concat(A.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:A.headers}).then((function(e){return x(e)}))}(t).then((function(t){L(e,n,t)})).catch((function(e){console.log(e)}))}var j=0,O=function(e,t,n,r){e.textContent=r.name,t.textContent=r.about,n.src=r.avatar,j=r._id};function P(e,t){e.prepend(t)}var B=function(e,t){t.querySelector(".popup__submit-button").textContent=e?"Сохранение...":"Сохранить"},D=function(e,t){t.value=e.textContent};t.addEventListener("click",(function(){D(n,c),D(r,u),S(e)})),s.addEventListener("click",(function(){S(i)})),i.addEventListener("click",(function(e){k(e,i)})),l.addEventListener("submit",(function(e){B(!0,i),fetch("".concat(A.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:A.headers,body:JSON.stringify({avatar:d.value})}).then((function(e){return x(e)})).then((function(e){o.src=e.avatar,q(i)})).catch((function(e){console.log(e)})).finally((function(){B(!1,i)})),g(l)})),e.addEventListener("click",(function(t){k(t,e)})),a.addEventListener("submit",(function(t){t.preventDefault(),B(!0,e),fetch("".concat(A.baseUrl,"/users/me"),{method:"PATCH",headers:A.headers,body:JSON.stringify({name:c.value,about:u.value})}).then((function(e){return x(e)})).then((function(t){O(n,r,o,t),q(e)})).catch((function(e){console.log(e)})).finally((function(){B(!1,e)}))})),h.addEventListener("click",(function(){S(y)})),y.addEventListener("click",(function(e){k(e,y)})),v.addEventListener("submit",(function(e){e.preventDefault(),B(!0,y),fetch("".concat(A.baseUrl,"/cards"),{method:"POST",headers:A.headers,body:JSON.stringify({name:p.value,link:_.value})}).then((function(e){return x(e)})).then((function(e){P(f,E(e,j,T,w)),q(y)})).catch((function(e){console.log(e)})).finally((function(){B(!1,y)})),v.reset(),g(v)})),m.addEventListener("click",(function(e){k(e,m)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t,n,r){var o=Array.from(e.querySelectorAll(t)),c=e.querySelector(n);C(o,c,r),o.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,t,r),C(o,c,r)}))}))}(t,e.inputSelector,e.submitButtonSelector,e)}))}({formSelector:".popup__form",inputSelector:".popup__field",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__field_type_error",errorClass:"popup__field-error_active"}),Promise.all([fetch("".concat(A.baseUrl,"/cards"),{headers:A.headers}).then((function(e){return x(e)})),fetch("".concat(A.baseUrl,"/users/me"),{headers:A.headers}).then((function(e){return x(e)}))]).then((function(e){var t,c,u=(c=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return c}}(t,c)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(t,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=u[0],i=u[1];a.forEach((function(e){P(f,E(e,i._id,T,w))})),O(n,r,o,i)})).catch((function(e){console.log(e)}))})();