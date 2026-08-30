import { useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import api from "../utils/api";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.getAppInfo(data).then((newData) => {
        setCurrentUser(newData);
      });
    })();
  };
  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
