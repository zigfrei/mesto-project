import "./index.css";
import {
  popupMain,
  editButton,
  profileTitleName,
  profileSubtitleName,
  profileAvatar,
  nameInput,
  jobInput,
  profileFormElement,
  popupAvatar,
  addAvatarButton,
  addAvatarForm,
  cardsContainer,
  popupImgOpen,
  addCardButton,
  popupAddCard,
  formCardElement,
  avatarLink,
  cardName,
  cardLink,
} from "../components/constants.js";
import { openPopup, closePopup } from "../components/modal.js";
import { createCard, deleteCard, toggleLikeCard } from "../components/card.js";
import { handleCloseButtonAndOverlayClick } from "../components/utils.js";
import {
  enableValidation,
  disableSubmitButton,
} from "../components/validate.js";
// import {
//   getInitialCards,
//   getUserProfile,
//   patchAvatar,
//   postCard,
//   patchProfile,
//   removeCard,
//   addLike,
//   deleteLike,
// } from "../components/api.js";
import Api from "../components/Api.js";
import Card from "../components/card.js";

const cardObject = {
  name: "Маями",
  link: "http//....",
  _id: "21513535125",
  owner: 'owner',
  likes: [111, 222]
};
const profileId = 111;
const selector = "#card-template";
const card = new Card(cardObject, profileId, selector, {popupImgRender: ( ) => {
    updateImgPopup(popupImgOpen, this.cardObject.name, this.cardObject.link);
    openPopup(popupImgOpen);
  },
}
  );
card.cardSettings();



const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-3",
  headers: {
    authorization: "d9ff5da1-b706-4c23-8de1-6bd8c391fef1",
    "Content-Type": "application/json",
  },
};

const api = new Api(config);

// //Обработчик для удаления карточки
// function handleRemoveCard(cardElement, cardId) {
//   api.removeCard(cardId)
//     .then(() => deleteCard(cardElement))
//     .catch((err) => {
//       console.log(err);
//     });
// }

// //Обработчик для лайка карточки
// function handleLikeCard(cardElement, cardId, cardLikeCounter) {
//   if (!cardElement.classList.contains("cards__like-button_status_active")) {
//     api.addLike(cardId, cardLikeCounter)
//       .then((data) => {
//         toggleLikeCard(cardElement, cardLikeCounter, data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } else {
//     api.deleteLike(cardId, cardLikeCounter)
//       .then((data) => {
//         toggleLikeCard(cardElement, cardLikeCounter, data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// }

// //индивидуальный номер профиля
// let profileId = 0;

// //Функция добавления информации в профиль с массива сервера
// const addContentFromArr = (
//   profileName,
//   profileAbout,
//   profileAvatar,
//   serverArr
// ) => {
//   profileName.textContent = serverArr.name;
//   profileAbout.textContent = serverArr.about;
//   profileAvatar.src = serverArr.avatar;
//   profileId = serverArr._id;
// };

// //функция добавления карточки в контейнер
// function addCard(container, cardElementAdd) {
//   container.prepend(cardElementAdd);
// }

// const renderLoading = (isLoading, popupElement) => {
//   if (isLoading) {
//     popupElement.querySelector(".popup__submit-button").textContent =
//       "Сохранение...";
//   } else {
//     popupElement.querySelector(".popup__submit-button").textContent =
//       "Сохранить";
//   }
// };

// //Редактирование имени и информации о себе
// //Функция добавление информации из профиля в форму
// const addContentFromProfile = (content, input) => {
//   input.value = content.textContent;
// };

// //Функция добавления карточки из модального окна
// function addCardFromPopup(evt) {
//   evt.preventDefault();
//   renderLoading(true, popupAddCard);
//   api.postCard(cardName, cardLink)
//     .then((data) => {
//       addCard(
//         cardsContainer,
//         createCard(data, profileId, handleRemoveCard, handleLikeCard)
//       );
//       closePopup(popupAddCard);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       renderLoading(false, popupAddCard);
//     });
//   formCardElement.reset();
// }

// //Слушатель нажатия на кнопку редактора профиля
// editButton.addEventListener("click", () => {
//   addContentFromProfile(profileTitleName, nameInput);
//   addContentFromProfile(profileSubtitleName, jobInput);
//   openPopup(popupMain);
// });

// //слушатель нажатия на кнопку добавления аватара
// addAvatarButton.addEventListener("click", () => {
//   openPopup(popupAvatar);
// });

// //Слушатель закрытия модалього окна добавления аватара
// popupAvatar.addEventListener("click", (event) => {
//   handleCloseButtonAndOverlayClick(event, popupAvatar);
// });

// //Слушатель добавления нового аватара по нажатию кнопки в модальном окне
// addAvatarForm.addEventListener("submit", (event) => {
//   renderLoading(true, popupAvatar);
//   api.patchAvatar(avatarLink)
//     .then((data) => {
//       profileAvatar.src = data.avatar;
//       closePopup(popupAvatar);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       renderLoading(false, popupAvatar);
//     });

//   disableSubmitButton(addAvatarForm);
// });

// //Слушатель выхода из редактора профиля
// popupMain.addEventListener("click", (event) => {
//   handleCloseButtonAndOverlayClick(event, popupMain);
// });

// //Функция сохранения профиля на сервере после нажатия кнопки
// function submitProfilePatch(evt) {
//   evt.preventDefault();
//   renderLoading(true, popupMain);
//   api.patchProfile(nameInput, jobInput)
//     .then((data) => {
//       addContentFromArr(
//         profileTitleName,
//         profileSubtitleName,
//         profileAvatar,
//         data
//       );
//       closePopup(popupMain);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       renderLoading(false, popupMain);
//     });
// }

// //Слушатель сохранения изменений в профиле по нажатию кнопки в модальном окне
// profileFormElement.addEventListener("submit", submitProfilePatch);

// //Слушатель нажатия на кнопку для открытия модального окна "добавить карточку"
// addCardButton.addEventListener("click", () => {
//   openPopup(popupAddCard);
// });

// //Слушатель закрытия модального окна при нажатии на кнопку или вне поля модального окна
// popupAddCard.addEventListener("click", (event) => {
//   handleCloseButtonAndOverlayClick(event, popupAddCard);
// });

// //Слушатель добавления карточки по нажатию кнопки в модальном окне
// formCardElement.addEventListener("submit", (event) => {
//   addCardFromPopup(event);
//   disableSubmitButton(formCardElement);
// });

// //Слушатель закрытия модального окна картинки при нажатии на кнопку или вне поля модального окна
// popupImgOpen.addEventListener("click", (event) => {
//   handleCloseButtonAndOverlayClick(event, popupImgOpen);
// });

// enableValidation({
//   formSelector: ".popup__form",
//   inputSelector: ".popup__field",
//   submitButtonSelector: ".popup__submit-button",
//   inactiveButtonClass: "popup__submit-button_disabled",
//   inputErrorClass: "popup__field_type_error",
//   errorClass: "popup__field-error_active",
// });

// Promise.all([api.getInitialCards(), api.getUserProfile()])
//   .then(([cardsData, userInfo]) => {
//     cardsData.forEach((element) => {
//       addCard(
//         cardsContainer,
//         createCard(element, userInfo._id, handleRemoveCard, handleLikeCard)
//       );
//     });
//     addContentFromArr(
//       profileTitleName,
//       profileSubtitleName,
//       profileAvatar,
//       userInfo
//     );
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// export { renderLoading };
