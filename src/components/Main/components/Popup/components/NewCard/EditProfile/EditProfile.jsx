export default function EditProfile() {
  return (
    <form className="popup__form" noValidate>
      <input
        id="profile-name-input"
        className="popup__input popup__input_type_name"
        name="name"
        placeholder="Nome"
        type="text"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__error" id="profile-name-input-error"></span>
      <input
        id="profile-description-input"
        className="popup__input popup__input_type_description"
        name="description"
        placeholder="Sobre mim"
        type="text"
        minLength="2"
        maxLength="200"
        required
      />
      <span
        className="popup__error"
        id="profile-description-input-error"
      ></span>
      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
