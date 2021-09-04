//первое условие
const editButton = document.querySelector('.profile__edit-button');
const popupMain = document.querySelector('.popup');

function openPopup(popup){
  popup.classList.add('popup_opened');
}

function closePopup(popup){
  popup.classList.remove('popup_opened');
}


editButton.addEventListener('click', () =>{
openPopup(popupMain);
});

popupMain.addEventListener('click', (event) =>{
if(event.target.classList.contains('popup__close-button') || event.target.classList.contains('popup')){
  closePopup(popupMain);
}
});

//Второе условие
/* */
