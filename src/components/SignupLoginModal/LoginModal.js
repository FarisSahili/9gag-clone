import { useState } from "react";
import React from "react";
import "./LoginModal.css";
import faceBook from "../ModalImage/image/2021_Facebook_icon.svg.png";
import gOOgle from "../ModalImage/image/Google_Icons.webp";
import APPle from "../ModalImage/image/Apple-Logo.png";

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);

  const emailValidation = (e) => {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var emailValue = e.target.value;
    setEmail(emailValue);
    if (email.match(pattern)) {
      setMessage(true);
    } else {
      setMessage(false);
    }
  };



  // const [pas, setpas] = useState("");
  // const [message1, setMessage1] = useState(false);

  // const passwordValidation = (e) => {
  //   var passwored = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  //   var passValue = e.target.value;
  //   setEmail(passValue);
  //   if (pas.match(pattern)) {
  //     setMessage(true);
  //   } else {
  //     setMessage(false);
  //   }
  // };
  
  return (
    <>
      <div className="logPage container">
        <h4 className="LOGin">Log in</h4>
        <button className="ButFacebook">
          <a className="facebook" href>
            <img className="facebook1" src={faceBook} alt="" /> Continue with
            Facebook
          </a>
        </button>
        <button className="ButGoogle">
          <a className="Google" href>
            <img className="google1" src={gOOgle} alt="" /> Continue with Google
          </a>
        </button>
        <button className="ButApple">
          <a className="Apple" href>
            <img className="apple1" src={APPle} alt="" /> Continue with Apple
          </a>
        </button>

        <div className="P-Or">or</div>
        <div className="container content content-of-login">
          <div className="input-field">
          <input
            type="text"
            id="email"
            className={
              email.length === 0
                ? " input-control fill.email"
                : message
                ? "input-control valid-email"
                : "input-control invalid-email"
            }
            placeholder="Email address"
            autoComplete="off"
            onChange={emailValidation}
            value={email}
            aria-label="Email address"
          />
          <p
            className={
              email.length === 0
                ? "text-massage fill-color"
                : message
                ? "text-message success-color"
                : "text-message error-color"
            }
          >
            {email.length === 0
              ? "Please enter a valid email"
              : message
              ? "the email you entered is valid"
              : "the email you entered is invalid"}
          </p>
          </div>
          <label for="floatingInput"></label>
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Enter Password" 
            aria-label="Password"
          />
          <label for="floatingPassword"></label>
          <button className="ButLogIn2">Log in</button>
          <button className="Forgot">Forgot Password ?</button>
        </div>
      </div>
    </>
  );
};

export default LogInPage;
