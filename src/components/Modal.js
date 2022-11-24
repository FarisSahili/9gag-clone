import React from "react";
import "./Modal.css";

const Modal = () => {
  
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button>X</button>
        </div>
        <div className="title">
          <h1>9GAG is the HQ of meme</h1>
        </div>
        <p className="par">By continuing, you agree to 9GAG's Terms of Service and acknowledge that you've read our Privacy Policy</p>
        <div className="bodyBut">
          <button className="ButFacebook">Continue with Facebook</button>
          <button className="ButGoogle">Continue with Google</button>
          <button className="ButApple">Continue with Apple</button>
          <button className="ButEmail">Use email</button>
          <button className="ButLogIn">Already a member? Log in</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;