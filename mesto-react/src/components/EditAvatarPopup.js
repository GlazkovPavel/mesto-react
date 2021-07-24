import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props){
    return(
        <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} name="avatar" title="Обновить аватар">
            <input className="popup__item popup__item_type_foto" id="url-inputAvatar" type="url" name="link"
                   placeholder="Ссылка на фото" required />
                <span className="url-inputAvatar-error popup__input-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;