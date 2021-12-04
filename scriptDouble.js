const container = document.querySelector(".container");
// open 'name' window form
function openPopup(popupElement) {
  popupElement.classList.remove("popup_closed");
  popupElement.classList.add("page__trasition");
}

const editPopupButton = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector(".popup_name");
const mainName = document.querySelector(".profile__title");
const mainJob = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector(".popup__list-edit_elem_name");
const jobInput = document.querySelector(".popup__list-edit_elem_profession");

editPopupButton.addEventListener("click", function () {
  nameInput.value = mainName.textContent;
  jobInput.value = mainJob.textContent;
  openPopup(editPopup);
});
//open 'place' window form
const addPopupButton = document.querySelector(".profile__add-button");
const addPopup = document.querySelector(".popup_place");
addPopupButton.addEventListener("click", function () {
  openPopup(addPopup);
});
//close 'name' window form
function closePopup(popupClose) {
  popupClose.classList.add("popup_closed");
}
const closeButtonName = document.querySelector(".popup__close-icon");
closeButtonName.addEventListener("click", function () {
  closePopup(editPopup);
});
//close 'place' window form
const closeButtonPlace = document.querySelector(".popup__close-icon-place");
closeButtonPlace.addEventListener("click", function () {
  closePopup(addPopup);
});

// save information writes in input

const formPopupName = document.querySelector(".popup__form");

function handleProfileSubmit(evt) {
  evt.preventDefault();

  const mainName = document.querySelector(".profile__title");
  const mainJob = document.querySelector(".profile__subtitle");

  mainName.textContent = nameInput.value;
  mainJob.textContent = jobInput.value;

  closePopup(editPopup);
}

formPopupName.addEventListener("submit", handleProfileSubmit);

//  six cards are for join
const cards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const element = document.querySelector(".element");
const cardTemplate = document.querySelector(".place-template").content;
const cardImage = document.querySelector(".element__image");
const bigTitle = document.querySelector(".popup__big-picture-title");
const bigOpened = document.querySelector(".popup__big-picture");
const bigPicture = document.querySelector(".popup__big-picture-image");
const cardGroup = document.querySelector(".element__group");

const createCard = (dataCard) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImg = cardElement.querySelector(".element__image");
  const cardTitle = cardElement.querySelector(".element__title");
  const btnLike = cardElement.querySelector(".element__like");

  cardTitle.textContent = dataCard.name;
  cardImg.alt = dataCard.name;
  cardImg.src = dataCard.link;

  btnLike.addEventListener("click", (evt) =>
    evt.target.classList.toggle("element__like_active")
  );

  const deleteButton = cardElement.querySelector(".element__delete");
  deleteButton.addEventListener("click", function () {
    const deleteElement = deleteButton.closest(".element__group");
    deleteElement.remove();
  });

  cardImg.addEventListener("click", function () {
    const pictureLink = cardImg.getAttribute("src");
    bigPicture.setAttribute("src", pictureLink);
    bigPicture.setAttribute("alt", "картинка места");
    bigTitle.textContent = cardTitle.textContent;
    openPopup(bigOpened);
  });

  return cardElement;
};

const addCard = (card, container) => {
  container.prepend(card);
};

cards.forEach(function (item) {
  const card = createCard(item);
  addCard(card, element);
});

// add cards

const formPopupPlace = document.querySelector(".popup__form_place");
const nameInputPlace = document.querySelector(
  ".popup__list-edit_elem_name_place"
);
const jobInputPlace = document.querySelector(
  ".popup__list-edit_elem_profession_place"
);

function handleCardSubmit(evt) {
  evt.preventDefault();

  const objCard = {
    name: nameInputPlace.value,
    link: jobInputPlace.value,
  };

  const newCard = createCard(objCard);
  addCard(newCard, element);
  closePopup(addPopup);

  const formElement = document.querySelector(".popup__form_place");
  formElement.reset();
  console.log();
}

formPopupPlace.addEventListener("submit", handleCardSubmit);

const bigButtonClose = document.querySelector(
  ".popup__big-picture-close-button"
);
bigButtonClose.addEventListener("click", function () {
  closePopup(bigOpened);
});

// close Esc 


const  escClose = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(addPopup);
    closePopup(editPopup);
    closePopup(bigOpened);
  }
}
document.addEventListener('keydown', escClose);