function Main(){
    function handleEditProfileClick(){
        document.querySelector('.popup_type_profile').classList.add('popup_opened');
    }
    function handleAddPlaceClick(){
        document.querySelector('.popup_type_add').classList.add('popup_opened');
    }
    function handleEditAvatarClick(){
        document.querySelector('.popup_type_avatar').classList.add('popup_opened');
    }
    return(
        <main className="content">
            <section className="profile">
                <div className="profile__foto-container" onClick={handleEditAvatarClick}>
                    <figure className="profile__foto-edit"></figure>
                    <img className="profile__foto" src="<%=require('./images/profile.jpg')%>" alt="Фото профиля" />
                </div>
                <div className="profile__container-text">
                    <h1 className="profile__title"></h1>
                    <p className="profile__subtitle"></p>
                </div>
                <button className="profile__button-edit" type="button" onClick={handleEditProfileClick}></button>
                <button className="profile__button-add" type="button" onClick={handleAddPlaceClick}></button>
            </section>

            <section className="element">
                <ul className="element__grid">

                </ul>
            </section>
        </main>
    )
}

export default Main;