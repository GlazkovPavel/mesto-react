import React from "react";

function ImagePopup({isOpen, onClose, card}){
    return(
        <div className={`popup popup_type_preview ${isOpen && 'popup_opened'}`}>
            <div className="popup__preview-container">
                <span className="popup__close popup__close_type_preview" onClick={onClose}></span>
                <img className="popup__preview-img" src={card.link} alt={card.name} />
                <p className="popup__preview-subtitle">{card.name}</p>
            </div>
        </div>
    )
}
export default ImagePopup;