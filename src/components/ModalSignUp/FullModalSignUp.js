import React from "react";
import "./FullModalSignUp.css";
import gaga from "./ModalImage/image/1.png";
import Upvote from "./ModalImage/image/2.png";
import Downvote from "./ModalImage/image/3.png";
import Comment from "./ModalImage/image/4.png";
import SaveTo from "./ModalImage/image/5.png";
import face1 from "./ModalImage/image/2021_Facebook_icon.svg.png";
import google1 from "./ModalImage/image/Google_Icons.webp";
import Apple1 from "./ModalImage/image/Apple-Logo.png";
import LiftArow from "./ModalImage/image/left-arrow-alt-regular-24.png";
const FullModalSignUP = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header first">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div
                  id="carouselExampleDark"
                  className="carousel carousel-dark slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to="1"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to="2"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to="3"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to="4"
                      aria-label="Slide 4"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="imgNum">
                        <img src={gaga} className=" d-block " alt="" />
                      </div>
                      <div className="carousel-caption">
                        <h2>9GAG is the HQ of meme</h2>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="imgNum2">
                        <img src={Upvote} className="d-block " alt="" />
                      </div>
                      <div className="carousel-caption">
                        <h2>Upvote to support</h2>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="imgNum3">
                        <img src={Downvote} className="d-block " alt="" />
                      </div>
                      <div className="carousel-caption">
                        <h2>Downvote to bury</h2>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="imgNum4">
                        <img src={Comment} className="d-block " alt="" />
                      </div>
                      <div className="carousel-caption">
                        <h2>Comment to discuss</h2>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="imgNum5">
                        <img src={SaveTo} className="d-block" alt="" />
                      </div>
                      <div className="carousel-caption">
                        <h2>Save to remember</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <p className="para">
                    By continuing, you agree to 9GAG's Terms of Service and
                    acknowledge that you've read our Privacy Policy
                  </p>
                </div>
                <div className="row bodyBut">
                  <button className="ButFacebook">
                    <a className="facebook" href>
                      <img className="facebook1" src={face1} alt="" /> Continue
                      with Facebook
                    </a>
                  </button>
                  <button className="ButGoogle">
                    <a className="Google" href>
                      <img className="google1" src={google1} alt="" /> Continue
                      with Google
                    </a>
                  </button>
                  <button className="ButApple">
                    <a className="Apple" href>
                      <img className="apple1" src={Apple1} alt="" /> Continue
                      with Apple
                    </a>
                  </button>
                  <button className="ButEmail">Use email</button>
                  <button
                    className="ButLogIn"
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                  >
                    Already a member? Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <h4>Log in</h4>
            </div>
            <div className="modal-body Second">
              <div className="bodyBut">
                <button className="ButFacebook">
                  <a className="facebook" href>
                    <img className="facebook1" src={face1} alt="" /> Continue
                    with Facebook
                  </a>
                </button>
                <button className="ButGoogle">
                  <a className="Google" href>
                    <img className="google1" src={google1} alt="" /> Continue
                    with Google
                  </a>
                </button>
                <button className="ButApple">
                  <a className="Apple" href>
                    <img className="apple1" src={Apple1} alt="" /> Continue with
                    Apple
                  </a>
                </button>
              </div>
              <div className="P-Or">or</div>
              <div className="title2">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <button className="ButLogIn2">Log in</button>
                <button
                  className="Forgot"
                  data-bs-target="#exampleModalToggle3"
                  data-bs-toggle="modal"
                >
                  Forgot Password ?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="btn btn-primary"
        data-bs-toggle="modal"
        href="#exampleModalToggle"
        role="button"
      >
        Open first modal
      </a>
      <div
        className="modal fade"
        id="exampleModalToggle3"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel3"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                className="LeftArroww"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                <img className="LeftArroww" src={LiftArow} alt="" />{" "}
              </button>
              <div className="head">Forgot Password</div>
            </div>
            <div className="modal-body">
              <div className="Email1">
                Tell us your email address and we will send you a link with
                instruction to reset your password.
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <button className="send">Send instruction</button>
            </div>
          </div>
        </div>
      </div>








    


    </>
  );
};

export default FullModalSignUP;
