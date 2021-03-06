import React from "react";
import { FaSpotify } from "react-icons/fa";
import "./Login.scss";

const CLIENT_ID = "7b8f9dd7a2464d00a19ec6bb32f3df3f";
const REDIRECT_URI = "http://localhost:3000/genre";
const RESPONSE_TYPE = "token";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const SCOPE = "user-follow-read";

const Login = props => {
  const logout = () => {
    props.setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div className='App-container'>
      <div className='App-header'>
        <h1 className='title'>
          <FaSpotify className='FaSpotify' /> What's my genre
        </h1>
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
      </div>
    </div>
  );
};

export default Login;
