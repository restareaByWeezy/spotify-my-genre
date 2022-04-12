import React from "react";
import "./Header.scss";

const Header = props => {
  const CLIENT_ID = "7b8f9dd7a2464d00a19ec6bb32f3df3f";
  const REDIRECT_URI = "http://localhost:3000/callback";
  const RESPONSE_TYPE = "token";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const SCOPE = "user-follow-read";

  const logout = () => {
    props.setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div>
      <header className='App-header'>
        <h1 className='title'>What's my genre</h1>
        {!props.token ? (
          <a
            className='button'
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <button className='button' onClick={logout}>
            Logout
          </button>
        )}
      </header>
    </div>
  );
};

export default Header;