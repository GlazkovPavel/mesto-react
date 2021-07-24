function App() {
    return (
        <>
        <div className="page">
            <header className="header">
                <img className="header__logo" src="<%=require('./images/mesto.svg')%>" alt="Место" />
            </header>
            <main className="content">
                <section className="profile">
                    <div className="profile__foto-container">
                        <figure className="profile__foto-edit"></figure>
                        <img className="profile__foto" src="<%=require('./images/profile.jpg')%>" alt="Фото профиля" />
                    </div>
                    <div className="profile__container-text">
                        <h1 className="profile__title"></h1>
                        <p className="profile__subtitle"></p>
                    </div>
                    <button className="profile__button-edit" type="button"></button>
                    <button className="profile__button-add" type="button"></button>
                </section>

                <section className="element">
                    <ul className="element__grid">

                    </ul>
                </section>
            </main>
            <footer className="footer">
                <p className="footer__copyright">&copy; 2021 Mesto Russia</p>
            </footer>
        </div>
        <div className="popup popup_type_profile">
            <div className="popup__container">
            <button className="popup__close popup__close_type_edit" type="button"></button>
            <h2 className="popup__heading">Редактировать профиль</h2>
            <form className="popup__form popup__form_type_edit form" name="profile-name" type="form" noValidate>
                <input className="popup__item popup__item_type_name" id="text-input-name" type="text" name="name"
                       placeholder="Ваше имя" required minLength="2" maxLength="40" />
                <span className="text-input-name-error popup__input-error"></span>
                <input className="popup__item popup__item_type_job" id="text-input-job" type="text" name="job"
                       placeholder="Ваше призвание" required minLength="2" maxLength="200" />
                <span className="text-input-job-error popup__input-error"></span>
                <button className="popup__save popup__save_type_profile" type="submit">Сохранение</button>
            </form>
        </div>
        </div>
</>
);

}