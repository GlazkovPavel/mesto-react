import React from "react";
import PopupWithForm from "./PopupWithForm";


function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, overlay}){
  const inputAvatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputAvatarRef.current.value /* Значение инпута, полученное с помощью рефа */,
    });
  }

  function overlayClick(e){
    overlay(e.target)
  }

  return(
        <PopupWithForm overlayClick={overlayClick} onSubmit={handleSubmit} isOpen={isOpen} onClose={onClose} name="avatar" title="Обновить аватар" buttonText='Сохранить'>
            <input ref={inputAvatarRef} className="popup__item popup__item_type_foto" id="url-inputAvatar"
                   type="url" name="link" placeholder="Ссылка на фото" required />
                <span className="url-inputAvatar-error popup__input-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;