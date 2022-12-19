import './SinglePostPage.css';
import { useState } from 'react';
import ProfileComment from './Profile-comment.png';

// comment 
const SinglePostPage = () => {

    const [comment, setComment] = useState("");
    const onChangeComment = (event) => {
        setComment(event.target.value);
    }

    const [comments, setComments] = useState("");
    const onClickComment = () => {
        setComments((comments) => [...comments, comment]);
    };

    // img
    const handeImage = (event) => {
       return event = document.createElement("./Profile-comment.png")
    };


    return (
        <div className="page-commints" >
            <div className="comments-and-button-wr" >
                <div className="comments-num-wr">
                    <p class="text-start">877 Comments</p>
                </div>
                <div className='button-wr'>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end">
                            <li className="page-item"><a className="page-link" href="#">Hot</a></li>
                            <li className="page-item"><a className="page-link" href="#">Fresh</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="card">
                <form className="d-flex" id='input-comment' >
                    <input className="form-control me-2" type="search" value={comment} onChange={onChangeComment} placeholder="leave a comment" />
                    <head>
                        <img src={ProfileComment}  onChange={handeImage} className='profile-comment' />
                    </head>
                </form>
                <button type="button" onClick = {() =>{  onClickComment() ;  handeImage(); }}  className="btn btn-primary">Post</button>
            </div>

            <div>
                <div className="new-comment"> {comments}</div>
            </div>

            <div className='comments-and-accounts'>
                <img src={ProfileComment} className="photo-co" />
                <span className='time-of-comment'>5h</span>
                <a className='title-account' herf="#">bomes_jand</a>
                <h5 className='the-comment'>It'd be good without that edit.</h5>
            </div>
            <div className='comments-and-accounts'>
                <img src={ProfileComment} className="photo-co" />
                <span className='time-of-comment'>5h</span>
                <a className='title-account' herf="#">bomes_jand</a>
                <h5 className='the-comment'>It'd be good without that edit.</h5>
            </div>
            <div className='comments-and-accounts'>
                <img src={ProfileComment} className="photo-co" />
                <span className='time-of-comment'>5h</span>
                <a className='title-account' herf="#">bomes_jand</a>
                <h5 className='the-comment'>It'd be good without that edit.</h5>
            </div>
            <div className='comments-and-accounts'>
                <img src={ProfileComment} className="photo-co" />
                <span className='time-of-comment'>5h</span>
                <a className='title-account' herf="#">bomes_jand</a>
                <h5 className='the-comment'>It'd be good without that edit.</h5>
            </div>
            
        </div>
    );
}
export default SinglePostPage;

{/* ={() => { { onClickComment }; { onClickPhoto }; }} */ }
{/* <div className='profile-comment'>{photos}</div> */ }

/* {comment.map((text)=>(
                    <div>{text}</div>

<ul className="sidebar-menu">

  <h3 className="h3Sections">favorites</h3> 

          {favorites.map((item, index) => {
            return (
              <li className="li-filter" onClick={() => 
                {
                setRecent((current) => [...current, item]); 
                }}>

              <div className="rowContainer">
                <div className="sidebarItem">{item}</div>
                <div className="star-btn-container">
                  <Star isSelected={true}  o


                ))*/