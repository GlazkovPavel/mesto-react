function PopupWithForm(props){
    return(
        <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button className="popup__close popup__close_type_edit" type="button" onClick={props.onClose}></button>
                <h2 className="popup__heading">{`${props.title}`}</h2>
                <form className="popup__form popup__form_type_edit form" name="profile-name" type="form" noValidate>
                    {props.children}

                    <button className="popup__save popup__save_type_profile" type="submit">Сохранение</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;

{/*<input className="popup__item popup__item_type_name" id="text-input-name" type="text" name="name"*/}
{/*       placeholder="Ваше имя" required minLength="2" maxLength="40" />*/}
{/*<span className="text-input-name-error popup__input-error"></span>*/}
{/*<input className="popup__item popup__item_type_job" id="text-input-job" type="text" name="job"*/}
{/*       placeholder="Ваше призвание" required minLength="2" maxLength="200" />*/}
{/*<span className="text-input-job-error popup__input-error"></span>*/}