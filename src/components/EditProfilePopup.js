import React from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";


function EditProfilePopup({isOpen, onClose, onUpdateUser}){
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(' ');
  const [description, setDescription] = React.useState(' ');

  function handleNameChange(e) {
    setName(e.target.value)
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return(
        <PopupWithForm onSubmit={handleSubmit} isOpen={isOpen} onClose={onClose} name="profile" title="Редактировать профиль" buttonText='Сохранить'>
            <input className="popup__item popup__item_type_name" value={name} onChange={handleNameChange}
                   id="text-input-name" type="text"
                   placeholder="Ваше имя" required minLength="2" maxLength="40" />
                <span className="text-input-name-error popup__input-error"></span>
                <input className="popup__item popup__item_type_job" value={description} onChange={handleDescriptionChange}
                       id="text-input-job" type="text"
                       placeholder="Ваше призвание" required minLength="2" maxLength="200" />
                    <span className="text-input-job-error popup__input-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;