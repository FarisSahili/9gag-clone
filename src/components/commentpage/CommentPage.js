import './CommentPage.css';
import { useState } from 'react';
import elonMusk from './comments-page-photo.png';
import angelinaJolie from './angelina jolie.png';
import ahmedHelmy from './ahmedhelmy.png';
import johnnyDepp from './Jony-dep.png';
import BayoumiFouad from './Bayoumi-Fouad.png';



const CommentPage = () => {

    const[comment,setComment]=useState([]);

    let temp = comment;
    const onChangeHandler = (e) => {

        setComment(e.target.value);
    }

    const[comments,setComments]=useState([]);

    const onClickHandler = () =>
    {
        setComments ((comments) => [...comments,comment]);
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
            </form>
                <button type="button" onClick={onClickHandler} className="btn btn-primary">Post</button> 
            </div>

            <div className='new-comment'>
                {comments}
                <br/>
            </div>
            <br/>
             <div className='comments-and-accounts'>
                <img src={elonMusk} className="photo-co" />
                 <span className='time-of-comment'>1h</span> 
                <a className='title-account' herf="#">Elon Musk</a>
                <h5 className='the-comment'>The only referee who made it to a cover of PES.</h5>
            </div>
            <div className='comments-and-accounts'>
                <img src={angelinaJolie} className="photo-co" />
                 <span className='time-of-comment'>5h</span> 
                <a className='title-account' herf="#">Angelina Jolie</a>
                <h5 className='the-comment'>It'd be good without that edit.</h5>
            </div>
            <div className='comments-and-accounts'>
                <img src={ahmedHelmy} className="photo-co" />
                 <span className='time-of-comment'>9h</span> 
                <a className='title-account' herf="#">Ahmed Helmy</a>
                <h5 className='the-comment'>Hahahahahahaha</h5>
            </div> 
            <div className='comments-and-accounts'>
                <img src={johnnyDepp} className="photo-co" />
                <span className='time-of-comment'>12h</span>
                <a className='title-account' herf="#">johnny Depp</a>
                <h5 className='the-comment'>I like it</h5>
            </div>  
            <div className='comments-and-accounts'>
                <img src={BayoumiFouad} className="photo-co" />
                <span className='time-of-comment'>15h</span>
                <a className='title-account' herf="#">Bayoumi Fouad</a>
                <h5 className='the-comment'>what????</h5>
            </div>  
        </div>
    );
}
export default CommentPage;


/* {comment.map((text)=>(
                    <div>{text}</div>
                ))*/


