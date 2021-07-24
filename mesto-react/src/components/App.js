import logo from '../images/mesto.svg';


function App() {
  return (
      <>
      <div className="page">
          <header className="header">
              <img className="header__logo" src={logo} alt="Место" />
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
    <div className="popup popup_type_add">
        <div className="popup__container">
            <button className="popup__close popup__close_type_add" type="button"></button>
            <h2 className="popup__heading">Новое место</h2>
            <form className="popup__form popup__form_type_add form" type="form" name="profile-name" noValidate>
                <input className="popup__item popup__item_title_add" id="text-input" type="text" name="name"
                       placeholder="Название" required minLength="2" maxLength="30" />
                    <span className="text-input-error popup__input-error"></span>
                    <input className="popup__item popup__item_type_foto" id="url-input" type="url" name="link"
                           placeholder="Ссылка на картинку" required />
                        <span className="url-input-error popup__input-error"></span>
                        <button className="popup__save popup__save_type_add" type="submit">Сохранение</button>
            </form>
        </div>
    </div>
    <div className="popup popup_type_preview">
        <div className="popup__preview-container">
            <span className="popup__close popup__close_type_preview"></span>
            <img className="popup__preview-img" src=" " alt=" " />
                <p className="popup__preview-subtitle"></p>
        </div>
    </div>
    <div className="popup popup_type_remove">
        <div className="popup__container">
            <button className="popup__close popup__close_type_remove" type="button"></button>
            <h2 className="popup__heading">Вы уверены?</h2>
            <form className="popup__form popup__form_type_add form" type="form">
                <button className="popup__save popup__save_type_remove" type="submit">Да</button>
            </form>
        </div>
    </div>
    <div className="popup popup_type_avatar">
        <div className="popup__container">
            <button className="popup__close popup__close_type_avatar" type="button"></button>
            <h2 className="popup__heading">Обновить аватар</h2>
            <form className="popup__form popup__form_type_avatar form" type="form" name="profile-name" noValidate>
                <input className="popup__item popup__item_type_foto" id="url-inputAvatar" type="url" name="link"
                       placeholder="Ссылка на фото" required />
                    <span className="url-inputAvatar-error popup__input-error"></span>
                    <button className="popup__save popup__save_type_avatar" type="submit">Сохранение</button>
            </form>
        </div>
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
