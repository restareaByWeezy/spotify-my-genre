import React, { useState, useEffect } from "react";
import Header from "../../@shared/components/Header";
import Artists from "../components/Artists";
import MyGenre from "../components/MyGenre";
import axios from "axios";

const Genre = () => {
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
    <div className='container'>
      <Header token={token} setToken={setToken}></Header>
      <MyGenre items={items}></MyGenre>
      <Artists items={items}></Artists>
    </div>
  );
};

export default Genre;
