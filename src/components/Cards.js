import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Cards({ card, onCardClick }){

  const currentUser = React.useContext(CurrentUserContext)

  function handleClick() {
    onCardClick(card)
  }
  return(

        <li className="element__container">
          <div className="element__foto-container">
            <img className="element__foto" onClick={handleClick} src={card.link} alt={card.name} />
            <button className="element__trash"></button>
          </div>
          <div className="element__description">
            <h2 className="element__description-text">{card.name}</h2>
            <div className="element__container-like">
              <button className="element__description-like" type="button"></button>
              <span className="element__likes">{card.likes.length}</span>
            </div>
          </div>
        </li>
  )
}

export default Cards;