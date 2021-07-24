function ImagePopup(){
    return(
        <div className="popup popup_type_preview">
            <div className="popup__preview-container">
                <span className="popup__close popup__close_type_preview"></span>
                <img className="popup__preview-img" src=" " alt=" " />
                <p className="popup__preview-subtitle"></p>
            </div>
        </div>
    )
}
export default ImagePopup;