import React from "react";
import "./LogInPage.css";
import faceBook from "../ModalImage/image/2021_Facebook_icon.svg.png";
import gOOgle from "../ModalImage/image/Google_Icons.webp";
import APPle from "../ModalImage/image/Apple-Logo.png";

const LogInPage = () => {
  return (
    <>
      
      <div className="logPage">
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
        <div className="content">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="row form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="row form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button className="ButLogIn2">Log in</button>
          <button className="Forgot">Forgot Password ?</button>
        </div>
      </div>
    </>
  );
};

export default LogInPage;
