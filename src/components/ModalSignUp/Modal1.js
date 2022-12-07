import React from "react";
import "./Modal1.css";
import face from "../image/2021_Facebook_icon.svg.png"
import google from "../image/Google_Icons.webp"
import Apple from "../image/Apple-Logo.png"
import Closee from "../image/Close_icone.png";
const Modal1 = () => 
{  
return (
    <div className="modalBackground">
        <div className="modalContainer">      
            <div className="titleCloseBtn">
            <button className="ClosePut"> <img className = "Closee" src={Closee}  alt=""/> </button>
                <h4>Log in</h4>
            </div>
            <hr/>
            <div className="bodyBut">
                <button className="ButFacebook"> <a className="facebook" href="https://www.facebook.com/" > <img className="facebook1" src={face}  alt=""/> Continue with Facebook</a></button>
                <button className="ButGoogle"> <a className="Google" href="https://www.google.de/" > <img className = "google1" src={google}  alt=""/> Continue with Google </a></button>
                <button className="ButApple"> <a className="Apple" href > <img className = "apple1" src={Apple}  alt=""/> Continue with Apple </a></button>
            </div>
            <div className="P-Or" >or</div>
                <div className="title2">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                    </div>
                <button className="ButLogIn">Log in</button>
                <button className="Forgot">Forgot Password ?</button>
            </div>
        </div>
    </div>

);
}

export default Modal1;




