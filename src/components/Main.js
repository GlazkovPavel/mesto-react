import React from 'react';
import Cards from "./Cards";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import {api} from "../utils/api";

function Main(props){

    const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
        props.setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
        .catch(err => {console.error(err)})
  }

    return(
        <main className="content">
            <section className="profile">
                <div className="profile__foto-container" onClick={props.onEditAvatar}>
                    <button className="profile__foto-edit"></button>
                    <img className="profile__foto" alt={currentUser.name} src={currentUser.avatar}  />
                </div>
                <div className="profile__container-text">
                    <h1 className="profile__title">{currentUser.name}</h1>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
                <button className="profile__button-add" type="button" onClick={props.onAddPlace}></button>
            </section>

            <section className="element">
                <ul className="element__grid">
                  {props.cards.map(card =>(
                      <Cards
                        key={card._id}
                        card={card}
                        onCardClick={props.onCardClick}
                        onCardLike={handleCardLike}

                      />
                  ))}

                </ul>
            </section>
        </main>
    )
}

export default Main;