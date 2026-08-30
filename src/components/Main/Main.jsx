import { useState, useEffect, useContext } from "react";
import avatar from "../../images/avatar.jpg";
import Popup from "./components/Popup/Popup";
import EditAvatar from "./components/Popup/components/NewCard/EditAvatar/EditAvatar";
import EditProfile from "./components/Popup/components/NewCard/EditProfile/EditProfile";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import Card from "./components/Card/Card";
import api from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data);
    });
  }, []);

  const newCardPopup = { title: "New card", children: <NewCard /> };
  const editProfilePopup = { title: "Edit Profile", children: <EditProfile /> };
  const editAvatarPopup = { title: "Edit Avatar", children: <EditAvatar /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard,
          ),
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    await api.cardDelete(card._id);
    setCards((state) =>
      state.filter((currentCard) => currentCard._id !== card._id),
    );
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__avatar-container">
          <img
            className="profile__image"
            src={currentUser.avatar}
            alt="Avatar"
          />
          <button
            aria-label="Editar foto do perfil"
            className="profile__avatar-edit-button"
            type="button"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          aria-label="Adicionar cartão"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>
      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleOpenPopup={handleOpenPopup}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
