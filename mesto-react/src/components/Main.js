import React from 'react';
import {api} from "../utils/api";
import Cards from "./Cards";

function Main(props){
    const [userAvatar, setUserAvatar] = React.useState()
    const [userName, setUserName] = React.useState()
    const [userDescription, setUserDescription] = React.useState()


    React.useEffect(() => {
        api.getUserInfoStart()
            .then((res) => {
                setUserAvatar(res.avatar)
                setUserName(res.name)
                setUserDescription(res.about)
            })
            .catch(err => {
              console.error(err)
            })

    })

    return(
        <main className="content">
            <section className="profile">
                <div className="profile__foto-container" onClick={props.onEditAvatar}>
                    <figure className="profile__foto-edit"></figure>
                    <img className="profile__foto" alt="Фото профиля" style={{ backgroundImage: `url(${userAvatar})` }}  />
                </div>
                <div className="profile__container-text">
                    <h1 className="profile__title">{userName}</h1>
                    <p className="profile__subtitle">{userDescription}</p>
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
                        onCardDelete={props.onCardDelete}
                        onCardLike={props.onCardLike}
                        onCardClick={props.onCardClick}
                      />
                  ))}

                </ul>
            </section>
        </main>
    )
}

export default Main;