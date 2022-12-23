import './SinglePostPage.css';
import { useState } from 'react';
import ProfileComment from '../image/Profile-comment.png';
import Navbar from '../UI/Navbar';
import PostComments from '../Posts/Comments/PostComments';
import Sidebar from '../UI/Sidebar/Sidebar';
import PostCard from '../Posts/PostCard';


// comment 
const SinglePostPage = () => {

    const [comment, setComment] = useState("");
    const onChangeComment = (event) => {
        setComment(event.target.value);
    }

    const [comments, setComments] = useState("");
    const onClickComment = () => {
        setComments((comments) => [...comments,comment]);
    };

 


    return (
        <>
            <Navbar />
            {/* <Sidebar /> */}
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

                <div className="card" id='card-input'>
                    <form className="d-flex" id='input-comment' >
                        <input className="form-control me-2" type="search" value={comment} onChange={onChangeComment} placeholder="leave a comment" />
                    </form>
                    <button type="button" onClick={() => { onClickComment(); }} id='button-post' className="btn btn-primary">Post</button>
                </div>

                <div className='vote-button'>
                    
                    {/* <Link to='/comment'className='button-vote-comment'><img className="comment-img"  src={CommitIcon} alt="this is commit icon " />90</Link> */}
                </div>


                <div className='comments-and-accounts'>
                    <img src={ProfileComment} className="photo-co" />
                    <span className='time-of-comment'>1m</span>
                    <a className='title-account'>You</a>
                    <h5 className='the-comment'>{comments} </h5>

                </div>
                <PostComments />
            </div>
        </>

    );
}
export default SinglePostPage;