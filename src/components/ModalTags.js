import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalTags.css";

 
const Star = ({ isSelected, onClick }) => {
  return (
    <div className="start">
      <button onClick={() => onClick()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill={isSelected ? "gold" : "gray"}
          class="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      </button>
    </div>
  );
};

const XButton = ({ isSelected, onClick }) => {
  return (
    <button onClick={() => onClick()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill={isSelected ? "red" : "gray"}
        class="bi bi-x-circle"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
    </button>
  );
};

function ModalTags() {
 
  const [popularTags, setPopularTags] = useState([
    "9gag",
    "china",
    "logo",
    "9gag den deutschen",
    "german",
    "qatar 2022",
  ]);
 
  const [otherTags, setOtherTags] = useState([
    "anime",
    "girl",
    "school",
    "pubg",
    "overwatch",
    "ask 9gag",
    "comic",
    "cozy",
    "drawing",
    "movie tv ",
    "resident evil",
    "among us",
    "ask 9gag",
    "anime wallpaper",
    "fortnite",
    "girl celebrity",
  ]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [favorites, setFavorites] = useState([]);
  const [hidden, setHidden] = useState([]);
 


  const filterArrayFromFavorite = (selectedIndex) => {
    setPopularTags((current) =>current.filter((_item, index) => index !== selectedIndex)
    );
  };
  
  const deleteItemFromFavorite = (selectedIndex) => {
    setFavorites((current) =>current.filter((_item, index) => index !== selectedIndex)
    );
  };
  
  const filterArrayFromOtherFavorite = (selectedIndex) => {
    setOtherTags((current) =>current.filter((_item, index) => index !== selectedIndex)
    );
  };
  const filterArrayFromhidden = (selectedIndex) => {
    setHidden((current) =>current.filter((_item, index) => index !== selectedIndex)
    );
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Customize with Tags</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>Favorites</span>
          {
          favorites.map((item, index) => {
            return (
              <div className="rowContainer">
                <div className="title">{item}</div>
                <div className="btnsContainer">
                  <Star isSelected={true} 
                   onClick={() => {
                    deleteItemFromFavorite(index);
                    setPopularTags((current) => [...current, item]);
                  }}
                  />
                 
                </div>
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Body>
          <span>Explore Popular Tags</span>
          <ul className="list-group list-group-flush">
            {popularTags.map((item, index) => {
              return (
                <div className="rowContainer">
                  <div className="title">{item}</div>
                  <div className="btnsContainer">
                    <Star
                      onClick={() => {
                        filterArrayFromFavorite(index);
                        setFavorites((current) => [...current, item]);
                      }}
                    />
                    <XButton
                      onClick={() => {
                        filterArrayFromFavorite(index);
                        setHidden((current) => [...current, item]);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </ul>
        </Modal.Body>
        <hr></hr>
        <Modal.Body>
          <span>Other Tags</span>
          <ul className="list-group list-group-flush">
            {otherTags.map((item, index) => {
              return (
                <div className="rowContainer">
                  <div className="title">{item}</div>
                  <div className="btnsContainer">
                    <Star
                      onClick={() => {
                        filterArrayFromOtherFavorite(index);
                        setFavorites((current) => [...current, item]);
                      }}
                    />
                    <XButton
                      onClick={() => {
                        filterArrayFromFavorite(index);
                        setHidden((current) => [...current, item]);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </ul>
        </Modal.Body>
        <hr></hr>
        <Modal.Body>
          <span>Hidden</span>
          {hidden.map((item, index) => {
            return (
              <div className="rowContainer">
                <div className="title">{item}</div>
                <div className="btnsContainer">
                  
                  <XButton isSelected={true}
                   onClick={() => {
                    filterArrayFromhidden(index);
                    setFavorites((current) => [...current, item]);
                  }} 
                  />
                </div>
              </div>
            );
          })} 
           <p>Posts from these tags will be filtered from Home page.</p>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ModalTags;
