import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import api from "../utils/api";
import ImagePopup from "./ImagePopup";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function App() {

    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [cards, setCards] = React.useState([])
    const [selectedCard, setSelectedCard] = React.useState({})
    const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({})
    const [isLoading, setIsLoading] = React.useState(false)

    const changeLoading = () =>{
      setIsLoading(true)
  }

    React.useEffect(() => {
      api.getUserInfo()
          .then(res => {setCurrentUser(res)})
          .catch(err => {console.error(err)})
    }, [])

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
    //Меняет информацию о пользователе
    const handleUpdateUser = (data) => {
      api.setUserInfo(data)
          .then((res) => {
            setCurrentUser(res)
            closeAllPopups()
          })
          .catch(err => {console.error(err)})
          .finally(() => {
            setIsLoading(false)
          })
    }
    //Меняет аватар
    const handleUpdateAvatar = (data) => {
      api.changeAvatar(data)
          .then((res) => {
            setCurrentUser(res)
            closeAllPopups()
          })
          .catch(err => {console.error(err)})
          .finally(() => {
            setIsLoading(false)
          })
    }
    //Добавление новой карточки
    const handleAddPlaceSubmit = (newCard) => {
      api.setCardServer(newCard)
          .then((res) => {
            setCards([res, ...cards]);
            closeAllPopups()
          })
          .catch(err => {console.error(err)})
          .finally(() => {
            setIsLoading(false)
          })
    }
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch(err => {console.error(err)})
  }

  function handleCardDelete(card){
    api.deleteCard(card._id)
        .then(() => {
          setCards(cards.filter((c) => c._id !== card._id))
        })
        .catch(err => {console.error(err)})
  }

  React.useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    })
  },[])

  function overlayClick(e) {
      if (e.classList.contains('popup')){
        closeAllPopups()
      }
  }

  return (
      <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
          <Header />
          <Main
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              cards={cards}
              setCards={setCards}

          />
          <AddPlacePopup
              isLoading={isLoading}
              onChangeLoading={changeLoading}
              overlay={overlayClick}
              onAddPlace={handleAddPlaceSubmit}
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
          />
          <EditAvatarPopup
              isLoading={isLoading}
              onChangeLoading={changeLoading}
              overlay={overlayClick}
              onUpdateAvatar={handleUpdateAvatar}
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
          />
          <EditProfilePopup
              isLoading={isLoading}
              onChangeLoading={changeLoading}
              overlay={overlayClick}
              onUpdateUser={handleUpdateUser}
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
          />
          <ImagePopup overlay={overlayClick} isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard} />
          <Footer />
      </div>
      </CurrentUserContext.Provider>
  );

}

export default App;
