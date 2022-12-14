import './CommentPage.css';
import { useState } from 'react';
import ProfileComment  from './Profile-comment.png';


// comment 
const CommentPage = () => {

    const[comment,setComment] = useState ([]) ;
    const onChangeHandler = (event) => 
    {

        setComment(event.target.value);
    }

    const[comments,setComments]=useState([]);
    const onClickComment = () =>
    {
        setComments ((comments) => [...comments,comment]);
     
    };


//profile photo
        const[userPhoto,setUserPhoto] = useState ([]) ;
        const onChangePhoto = (event) => 
        {

            setUserPhoto(event.target.value);
        }

        const[photos,setPhotos]=useState([]);
        const onClickPhoto = () =>
        {
            setPhotos ((photos) => [...photos,userPhoto]);
        
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
            <input className="form-control me-2" type="search" value={comment} onChange={onChangeHandler} placeholder="leave a comment"/>
                <head>
                   <img src ={ProfileComment}  className='profile-comment'  value={userPhoto} onChange={onChangePhoto} />
                </head>
            </form>
                <button type="button" onClick={onClickComment} className="btn btn-primary">Post</button> 

            </div>
                 
            <div>
               <div className="new-comment"> {comments}</div> 
              <div className='profile-comment'>{photos}</div>
            </div>

             <div className='comments-and-accounts'>
                <img src={ProfileComment} className="photo-co" />
                 <span className='time-of-comment'>1h</span> 
                <a className='title-account' herf="#">scrublord__</a>
                <h5 className='the-comment'>The only referee who made it to a cover of PES.</h5>
                <i className="fa-solid fa-up"></i>
            </div>
            <div className='comments-and-accounts'>
                <img src={ProfileComment} className="photo-co" />
                 <span className='time-of-comment'>5h</span> 
                <a className='title-account' herf="#">bomes_jand</a>
                <h5 className='the-comment'>It'd be good without that edit.</h5>
            </div>
            <div className='comments-and-accounts'>
                <img src={ProfileComment} className="photo-co" />
                 <span className='time-of-comment'>9h</span> 
                <a className='title-account' herf="#">spongero</a>
                <h5 className='the-comment'>Hahahahahahaha</h5>
            </div> 
            <div className='comments-and-accounts'>
                <img src={ProfileComment} className="photo-co" />
                <span className='time-of-comment'>12h</span>
                <a className='title-account' herf="#">sealinosus</a>
                <h5 className='the-comment'>I like it</h5>
            </div>  
            <div className='comments-and-accounts'>
                <img src={ProfileComment} className="photo-co" />
                <span className='time-of-comment'>15h</span>
                <a className='title-account' herf="#">SUPRRLOAD</a>
                <h5 className='the-comment'>what????</h5>
            </div>  
        </div>
    );
}
export default CommentPage;


/* {comment.map((text)=>(
                    <div>{text}</div>
                ))*/