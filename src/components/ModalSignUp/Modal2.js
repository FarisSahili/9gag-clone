import React from "react";
import "./Modal2.css";
import LiftArow from "../image/left-arrow-alt-regular-24.png";


const Modal2 = () => 
{  
return (
    <div className="modalBackground">
        <div className="modalContainer">      
            <div className="titleCloseBtn">
            <button className="LiftAroww"> <img className = "LiftAroww" src={LiftArow}  alt=""/> </button>
                <div className="head">Forgot Password</div>
            </div>
            <hr/>
                <div className="title2">
                    <div className="Email1" >Tell us your email address and we will send you a link with instruction to reset your password.</div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                    </div>
                <button className="send">Send instruction</button>
            </div>
        </div>
    </div>
);
}

export default Modal2;


