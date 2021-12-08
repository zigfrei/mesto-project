import "./index.css";
import {
  popupMain,
  editButton,
  profileTitleName,
  profileSubtitleName,
  profileAvatar,
  nameInput,
  jobInput,
  popupAvatar,
  addAvatarButton,
  cardsContainer,
  popupImgOpen,
  addCardButton,
  popupAddCard,
  avatarLink,
  cardName,
  cardLink,
  cardTemp,
  selectors,
  forms,
  config,
} from "../components/constants.js";

import Api from "../components/Api.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";

//Создадим элемент класса Api и передадие ему настройки
const api = new Api(config);

forms.forEach((form) => {
  const valid = new FormValidator(selectors, form);
  valid.enableValidation();
});

//Функция открытия попапа картинки при клике на картинку
function handleCardClick(cardTitle, cardImage) {
  const popupImg = new PopupWithImage(popupImgOpen);
  popupImg.setEventListeners();
  popupImg.openPopup(cardImage, cardTitle);
}

//Обработчик для удаления карточки
function handleRemoveCard(cardElement, cardId) {
  api
    .removeCard(cardId)
    .then(() => this._deleteCard(cardElement))
    .catch((err) => {
      console.log(err);
    });
}

//Обработчик для лайка карточки
function handleLikeCard(cardElement, cardId, cardLikeCounter) {
  if (!cardElement.classList.contains("cards__like-button_status_active")) {
    api
      .addLike(cardId, cardLikeCounter)
      .then((data) => {
        this._toggleLikeCard(cardElement, cardLikeCounter, data);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api
      .deleteLike(cardId, cardLikeCounter)
      .then((data) => {
        this._toggleLikeCard(cardElement, cardLikeCounter, data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

//индивидуальный номер профиля
let profileId = 0;

//Функция добавления информации в профиль с массива сервера
const addContentFromArr = (
  profileName,
  profileAbout,
  profileAvatar,
  serverArr
) => {
  profileName.textContent = serverArr.name;
  profileAbout.textContent = serverArr.about;
  profileAvatar.src = serverArr.avatar;
  profileId = serverArr._id;
};

//функция добавления карточки в контейнер
function addCard(container, cardElementAdd) {
  container.prepend(cardElementAdd);
}

const renderLoading = (isLoading, popupElement) => {
  if (isLoading) {
    popupElement.querySelector(".popup__submit-button").textContent =
      "Сохранение...";
  } else {
    popupElement.querySelector(".popup__submit-button").textContent =
      "Сохранить";
  }
};

//Редактирование имени и информации о себе
//Функция добавление информации из профиля в форму
const addContentFromProfile = (content, input) => {
  input.value = content.textContent;
};

//Функция добавления нового аватара по нажатию кнопки в модальном окне
function handleSubmitAvatarForm() {
  renderLoading(true, popupAvatar);
  api
    .patchAvatar(avatarLink)
    .then((data) => {
      profileAvatar.src = data.avatar;
      this.closePopup();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, popupAvatar);
    });
    //this.valid.disableSubmitButton();
}

//Создание элемента класса попар с формой для аватара
const popupEditAvatar = new PopupWithForm(popupAvatar, handleSubmitAvatarForm);

//слушатель нажатия на кнопку добавления аватара
addAvatarButton.addEventListener("click", () => {
  popupEditAvatar.openPopup();
  popupEditAvatar.setEventListeners();
});

//Функция сохранения информации профиля на сервере после нажатия кнопки
function handleSubmitProfileForm() {
  renderLoading(true, popupMain);
  api
    .patchProfile(nameInput, jobInput)
    .then((data) => {
      addContentFromArr(
        profileTitleName,
        profileSubtitleName,
        profileAvatar,
        data
      );
      popupEditPersonalInfo.closePopup();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, popupMain);
    });
}

//Создание элемента класса попар с формой для профиля
const popupEditPersonalInfo = new PopupWithForm(
  popupMain,
  handleSubmitProfileForm
);

//Слушатель нажатия на кнопку редактора профиля
editButton.addEventListener("click", () => {
  addContentFromProfile(profileTitleName, nameInput);
  addContentFromProfile(profileSubtitleName, jobInput);
  popupEditPersonalInfo.openPopup();
  popupEditPersonalInfo.setEventListeners();
});

//Функция добавления карточки из модального окна
function handleSubmitCardForm() {
  renderLoading(true, popupAddCard);
  api
    .postCard(cardName, cardLink)
    .then((data) => {
      addCard(
        cardsContainer,
        new Card(
          data,
          profileId,
          cardTemp,
          handleCardClick,
          handleRemoveCard,
          handleLikeCard
        ).createCard()
      );
      popupEditCard.closePopup();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, popupAddCard);
    });
    //this.valid.disableSubmitButton();
}

const popupEditCard = new PopupWithForm(popupAddCard, handleSubmitCardForm);

//Слушатель нажатия на кнопку для открытия модального окна "добавить карточку"
addCardButton.addEventListener("click", () => {
  popupEditCard.setEventListeners();
  popupEditCard.openPopup();
});

Promise.all([api.getInitialCards(), api.getUserProfile()])
  .then(([cardsData, userInfo]) => {
    cardsData.forEach((element) => {
      addCard(
        cardsContainer,
        new Card(
          element,
          userInfo._id,
          cardTemp,
          handleCardClick,
          handleRemoveCard,
          handleLikeCard
        ).createCard()
      );
    });
    addContentFromArr(
      profileTitleName,
      profileSubtitleName,
      profileAvatar,
      userInfo
    );
  })
  .catch((err) => {
    console.log(err);
  });

export { renderLoading };
