import React from "react";

function Cards(props){
  return(

      <div id="card-templete">
        <li className="element__container">
          <div className="element__foto-container">
            <img className="element__foto"  src={props.card.link} alt="" />
            <button className="element__trash"></button>
          </div>
          <div className="element__description">
            <h2 className="element__description-text">{props.card.name}</h2>
            <div className="element__container-like">
              <button className="element__description-like" id="button" type="button"></button>
              <span className="element__likes">{props.card.likes.length}</span>
            </div>
          </div>
        </li>
      </div>
  )
}

export default Cards;