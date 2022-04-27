import React, { useState, useEffect } from "react";
import Header from "../../@shared/components/Header";
import Artists from "../components/Artists";
import MyGenre from "../components/MyGenre";
import axios from "axios";
import { artistData } from "../../data/data";

const Genre = () => {
  const [token, setToken] = useState("");
  const [following, setFollowing] = useState("");
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
      const { data } = await axios.get(
        "https://api.spotify.com/v1/me/following?type=artist&limit=50",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setFollowing(data);
    };
    showProfile();
  }, []);

  return (
    <div className='container'>
      <Header token={token} setToken={setToken}></Header>
      <MyGenre following={artistData}></MyGenre>
      <Artists following={artistData}></Artists>
    </div>
  );
};

export default Genre;
