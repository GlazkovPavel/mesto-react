import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props){
    return(
        <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} name="profile" title="Редактировать профиль">
            <input className="popup__item popup__item_type_name" id="text-input-name" type="text" name="name"
                   placeholder="Ваше имя" required minLength="2" maxLength="40" />
                <span className="text-input-name-error popup__input-error"></span>
                <input className="popup__item popup__item_type_job" id="text-input-job" type="text" name="job"
                       placeholder="Ваше призвание" required minLength="2" maxLength="200" />
                    <span className="text-input-job-error popup__input-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;