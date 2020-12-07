import React from "react";

import "./login.css";

export default function Login() {
  return (
    <div className="loginContainer">
    <div className="login">
      <h1>
        How <span>niche</span> are you<span>?</span>
      </h1>
      <div className="loginButton">
        <button
          onClick={() =>
            (window.location.href = "http://niche-auth.herokuapp.com/login")
          }
        >
          Find Out
          <img
            src="https://i.imgur.com/t08PUcz.png"
            width="70px"
            alt="Spotify logo"
          />
        </button>
        <label>Login with Spotify</label>
      </div>
      </div>
      </div>
  );
}
