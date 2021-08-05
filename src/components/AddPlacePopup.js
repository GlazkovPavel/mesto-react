import React from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
function AddPlacePopup(props){

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(' ')
  const [link, setLink] = React.useState(' ')

  function handleNameChange(e) {
    setName(e.target.value)
  }
  function handleLinkChange(e) {
    setLink(e.target.value)
  }

  React.useEffect(() => {
    setName(' ');
    setLink(' ');
  }, [props.isOpen]);

  function handleSubmit(e){
    e.preventDefault()
    props.onAddPlace({
      name,
      link,
    });
  }

    return(
        <PopupWithForm onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} name="add" title="Новое место" buttonText='Сохранить'>
            <input className="popup__item popup__item_title_add" placeholder="Название" id="text-input" value={name} onChange={handleNameChange}
               type="text" name="name"  required minLength="2" maxLength="40" />
            <span className="text-input-name-error popup__input-error"></span>
            <input className="popup__item popup__item_type_job" id="text-input-job" value={link} onChange={handleLinkChange}
                   type="url" name="link" placeholder="Ссылка на картинку" required minLength="2" maxLength="200" />
            <span className="text-input-job-error popup__input-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;