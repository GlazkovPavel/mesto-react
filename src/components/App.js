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
    const [cards, setCards] = React.useState([])
    const [selectedCard, setSelectedCard] = React.useState({})
    const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);

    React.useEffect(() => {
      api.getInitialCards()
          .then(res => {setCards(res)})
          .catch(err => {console.error(err)})
    }, [])

    const handleCardClick = (data) => {
      setImagePopupOpen(true)
      setSelectedCard(data)
    }

    const closeAllPopups = () => {
        setEditAvatarPopupOpen(false)
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setImagePopupOpen(false)
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
      <div className="page">
          <Header />
          <Main
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              cards={cards}


          />
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
          <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard} />
          <Footer />
      </div>

  );

}

export default App;
