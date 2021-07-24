function Main(props){

    return(
        <main className="content">
            <section className="profile">
                <div className="profile__foto-container" onClick={props.onEditAvatar}>
                    <figure className="profile__foto-edit"></figure>
                    <img className="profile__foto" src="<%=require('./images/profile.jpg')%>" alt="Фото профиля" />
                </div>
                <div className="profile__container-text">
                    <h1 className="profile__title"></h1>
                    <p className="profile__subtitle"></p>
                </div>
                <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
                <button className="profile__button-add" type="button" onClick={props.onAddPlace}></button>
            </section>

            <section className="element">
                <ul className="element__grid">

                </ul>
            </section>
        </main>
    )
}

export default Main;