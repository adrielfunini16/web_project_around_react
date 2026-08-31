import { useRef, useContext, useState } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext";

export default function NewCard() {
  const [errors, setErrors] = useState({});
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);
  const cardName = useRef();
  const cardLink = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAddPlaceSubmit({
      name: cardName.current.value,
      link: cardLink.current.value,
    });
  };

  const handleInputValidity = (e) => {
    const { name, validity, validationMessage } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validity.valid ? "" : validationMessage,
    }));
  };

  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          maxLength="30"
          minLength="2"
          name="card-name"
          placeholder="Title"
          required
          type="text"
          ref={cardName}
          onChange={handleInputValidity}
        />
        <span className="popup__error" id="card-name-error">
          {errors["card-name"]}
        </span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="card-link"
          name="link"
          placeholder="Image link"
          required
          type="url"
          ref={cardLink}
          onChange={handleInputValidity}
        />
        <span className="popup__error" id="card-link-error">
          {errors["link"]}
        </span>
      </label>

      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
