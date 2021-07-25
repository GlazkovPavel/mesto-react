import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import {api} from "../utils/api";
import ImagePopup from "./ImagePopup";

function App() {

    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

    const closeAllPopups = () => {
        setEditAvatarPopupOpen(false)
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
    }

    const handleEditProfileClick = () => {
        setEditProfilePopupOpen(true)
    }
    const handleAddPlaceClick = () => {
        setAddPlacePopupOpen(true)
    }
    function handleEditAvatarClick(){
        setEditAvatarPopupOpen(true)
    }
  return (
      <>
      <div className="page">
          <Header />
          <Main
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
          />
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
          <Footer />
      </div>

    <template id="card-templete">
        <li className="element__container">
            <div className="element__foto-container">
                <img className="element__foto" src=" " alt="" />
                    <button className="element__trash"></button>
            </div>
            <div className="element__description">
                <h2 className="element__description-text"></h2>
                <div className="element__container-like">
                    <button className="element__description-like" id="button" type="button"></button>
                    <span className="element__likes"></span>
                </div>
            </div>
        </li>
    </template>
    </>
  );

}

export default App;
