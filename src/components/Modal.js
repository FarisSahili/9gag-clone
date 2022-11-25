import React from "react";
import "./Modal.css";
import face from "./image/2021_Facebook_icon.svg.png"
import google from "./image/Google_Icons.webp"
import Apple from "./image/Apple-Logo.png"
import NineGag from "./image/9gag_pho.png"
import Chat from "./image/chat.jpg"
import UpOne from "./image/UpOne.jpg"
const Modal = () => 
{  
return (
  <div className="modalBackground">
    <div className="modalContainer">      
      <div className="titleCloseBtn">
        <button>X</button>
      </div>
        <div className="title">
          


    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={NineGag} className="d-block w-100" alt="NineGag"/>
      <div className="carousel-caption d-none d-md-block">
        <h2>.1</h2>
        
      </div>
    </div>
    <div className="carousel-item">
      <img src={Chat} className="d-block w-100" alt="Chat"/>
      <div className="carousel-caption d-none d-md-block">
        <h2>.2</h2>
      </div>
    </div>
    <div className="carousel-item">
      <img src={UpOne} className="d-block w-100" alt="UpOne"/>
      <div className="carousel-caption d-none d-md-block">
        <h2>.3</h2>
        
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



        </div>
          <p className="para">By continuing, you agree to 9GAG's Terms of Service and acknowledge that you've read our Privacy Policy</p>
        
        <div className="bodyBut">
          <button className="ButFacebook"> <a className="facebook" href="https://www.facebook.com/" > <img className="facebook1" src={face}  alt=""/> Continue with Facebook</a></button>
          <button className="ButGoogle"> <a className="Google" href="https://www.google.de/" > <img className = "google1" src={google}  alt=""/> Continue with Google </a></button>
          <button className="ButApple"> <a className="Apple" href > <img className = "apple1" src={Apple}  alt=""/> Continue with Apple </a></button>
          <button className="ButEmail">Use email</button>
          <button className="ButLogIn">Already a member? Log in</button>
        </div>
    </div>
  </div>
  );
}


export default Modal;