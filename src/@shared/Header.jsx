import React from "react";
import { useEffect, useState } from "react";
import MyGenre from "./MyGenre";
import axios from "axios";
import "./styles/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const CLIENT_ID = "7b8f9dd7a2464d00a19ec6bb32f3df3f";
  const REDIRECT_URI = "http://localhost:3000/callback";
  const RESPONSE_TYPE = "token";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";

  const [token, setToken] = useState("");
  const [following, setFollowing] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    console.log(hash);
    console.log(token);

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

    // const showProfile = async () => {
    //   const { data } = await axios.get(
    //     "https://api.spotify.com/v1/me/following?type=artist&limit=50",
    //     {
    //       headers: {
    //         Authorization: `Bearer BQBxEdx1eBCJDC4klzMiJDtce2jOUZUktw-0hH16DDpvIyruRAaW9aO5OEZpfCanuVAWNfMYBAYJJMNtxW0YkqNODpyrYoLXql_gA2JezCJpCwbo0pytsOJnlc7m95QKBsw7tFyDbNurXvO2yg48PZqWTIkH-_KxCHhsCXqoLavjvleGg0nmg41B9TuhgWv5T1iryVHCuqc`,
    //       },
    //     }
    //   );

    //   setFollowing(data);
    // };
    // showProfile();
  }, []);
  console.log(following);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div>
      <header className='App-header'>
        <h1 className='title'>
          <FontAwesomeIcon icon='fa-brands fa-spotify' />
          What's my genre
        </h1>
        {!token ? (
          <a
            className='button'
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <button className='button' onClick={logout}>
            Logout
          </button>
        )}
      </header>
      <MyGenre></MyGenre>
    </div>
  );
};

export default Header;
