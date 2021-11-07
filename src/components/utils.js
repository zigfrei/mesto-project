import {popupMain, closePopup} from '../components/modal.js';
import {popupImgOpen, popupAddcard} from '../components/card.js';
//Функция закрытия модального окна при нажатии клавиши ESC
function escHandler (event){
  if (event.key === 'Escape'){
    if(popupMain.classList.contains("popup_opened")){
      closePopup(popupMain);
    };
    if(popupImgOpen.classList.contains("popup_opened")){
      closePopup(popupImgOpen);
    };
    if(popupAddcard.classList.contains("popup_opened")){
      closePopup(popupAddcard);
    };
  };
};


export {escHandler};
