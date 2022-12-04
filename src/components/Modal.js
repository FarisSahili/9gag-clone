import React from "react";
import "./Modal.css";
import gaga from "./image/1.png";
import Upvote from "./image/2.png";
import Downvote  from "./image/3.png";
import Comment  from "./image/4.png";
import SaveTo from "./image/5.png";
import face1 from "./image/2021_Facebook_icon.svg.png";
import google1 from "./image/Google_Icons.webp";
import Apple1 from "./image/Apple-Logo.png";


const Modal = () => 
{  
return (
  <div className="modalBackground">
    <div className="container modalContainer">     
      <div className="row ModelHeader">
        <div className="CloseIconBtn col-2">
            <button>X</button>
        </div>
        <div className="col"></div>
      
      </div> 
      <div className="row">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" >
                  <div className="imgNum">
                    <img src={gaga} className=" d-block " alt=""/>
                  </div> 
                  <div className="carousel-caption d-none d-md-block">
                    <h2>9GAG is the HQ of meme</h2>
                  </div>  
              </div>
              <div className="carousel-item" >
                <div className="imgNum2">
                <img src={Upvote} className="d-block " alt=""/>
                </div>
                <div className="carousel-caption d-none d-md-block">
                  <h2>Upvote to support</h2>
                </div>
              </div>
              <div className="carousel-item" >
              <div className="imgNum3">
                <img src={Downvote} className="d-block " alt=""/>
              </div>
                <div className="carousel-caption d-none d-md-block">
                    <h2>Downvote to bury</h2>
                </div>  
              </div>
            
              <div className="carousel-item" >
              <div className="imgNum4">
                <img src={Comment} className="d-block "  alt=""/>
              </div>
                <div className="carousel-caption d-none d-md-block">
                  <h2>Comment to discuss</h2>
                </div>  
              </div>
              <div className="carousel-item">
              <div className="imgNum5">
                <img src={SaveTo} className="d-block" alt=""/>
                </div>
                <div className="carousel-caption d-none d-md-block">
                  <h2>Save to remember</h2>
                </div>  
              </div>
            </div>
        </div>
        <div className="row">
          <p className="para">By continuing, you agree to 9GAG's Terms of Service and acknowledge that you've read our Privacy Policy</p>
        </div>
        <div className="row bodyBut">
          <button className="ButFacebook"><a className="facebook" href="https://www.facebook.com/v8.0/dialog/oauth?client_id=111569915535689&state=d81e47c09aac3c8cf3ff5d19daf2c377&response_type=code&sdk=php-sdk-5.7.0&redirect_uri=https%3A%2F%2F9gag.com%2Fconnect%2Ffacebook-callback&scope=email"><img className="facebook1" src={face1}  alt=""/> Continue with Facebook</a></button>

          <button className="ButGoogle"> <a className="Google" href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&access_type=online&client_id=489167509892.apps.googleusercontent.com&redirect_uri=https%3A%2F%2F9gag.com%2Fconnect%2Fgoogle-callback&state&scope=openid%20email%20profile&approval_prompt=auto&service=lso&o2v=1&flowName=GeneralOAuthFlow" > <img className = "google1" src={google1}  alt=""/> Continue with Google </a></button>
          <button className="ButApple"> <a className="Apple" href="https://appleid.apple.com/auth/authorize?client_id=com.9gag.service.applesignin&redirect_uri=https%3A%2F%2F9gag.com%2Fconnect%2Fapple-callback&response_type=code+id_token&scope=name+email&response_mode=form_post" > <img className = "apple1" src={Apple1}  alt=""/> Continue with Apple </a></button>
          <button className="ButEmail">Use email</button>
          <button className="ButLogIn">Already a member? Log in</button>
        </div>
      </div>
    </div>
  </div>
  );
}


export default Modal;


