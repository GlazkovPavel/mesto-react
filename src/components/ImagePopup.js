import React from "react";

function ImagePopup(props){
  debugger;
    return(
        <div className={`popup popup_type_preview ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__preview-container">
                <span className="popup__close popup__close_type_preview" onClick={props.onClose}></span>
                <img className="popup__preview-img" src={props.card.link} alt={props.card.name} />
                <p className="popup__preview-subtitle">{props.card.name}</p>
            </div>
        </div>
    )
}
export default ImagePopup;