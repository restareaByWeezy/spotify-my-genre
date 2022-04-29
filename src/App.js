import logo from "./logo.svg";
import "./App.scss";
import Genre from "./genre/pages/Genre";
import Login from "./login/pages/Login";
import MyGenre from "./genre/components/MyGenre";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [token, setToken] = useState("");
  const [items, setItems] = useState([]);
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find(elem => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);

    const showProfile = async () => {
      try {
        const { data } = await axios.get(
          "https://api.spotify.com/v1/me/following?type=artist&limitd=50",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setItems(data.artists.items);
        console.log(items);
      } catch (e) {
        // history.push("sdaf");
        console.log(e);
      }
    };

    showProfile();

    return () => {
      window.localStorage.removeItem("token");
      setToken("");
    };
  }, []);

  return (
    <div className='global'>
      <Routes>
        <Route path='/' element={<Login token={token} setToken={setToken} />} />
        <Route path='/genre' element={<Genre />} />
      </Routes>
    </div>
  );
}

export default App;
