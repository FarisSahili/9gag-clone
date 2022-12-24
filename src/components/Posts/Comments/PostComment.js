import '../../Pages/SinglePostPage.css';
import '../Comments/PostComments';
import '../../../dataComment';
import votedown from '../../image/arrow-down.png';
import voteup from '../../image/arrow-up.png';


import { useState } from 'react';

const PostComment = (props) => {


    //counter 
    const [Up, setUp] = useState(props.up_votes_comment);
    const [Down, setDown] = useState(props.down_votes_comment);

    const [upvote, setUpvote] = useState(false)
    const [downvote, setdownvote] = useState(false)
    const [save, setsave] = useState(true)
    function Save() {
        if (save) {
            setsave(false)
            document.getElementById("savebut").className = "save-button-active";
        }
        else {
            setsave(true)
            document.getElementById("savebut").className = "save-button";

        }
    }
    function Upvote() {
        // number=101
        // console.log(number)
        if (upvote) {
            setUpvote(false)
            setUp(Up - 1)
            document.getElementById("up").className = "button-vote";
        }
        else {
            setUpvote(true)
            setUp(Up + 1)
            document.getElementById("up").className = "button-vote-active";


        }
    }

    function Downvote() {
        // number=101
        // console.log(number)
        if (downvote) {
            setdownvote(false)
            setDown(Down - 1)
            document.getElementById("down").className = "button-vote";

        }
        else {
            setdownvote(true)
            setDown(Down + 1)
            document.getElementById("down").className = "button-vote-active";

        }
    }

    function Downvote() {
        // number=101
        // console.log(number)
        if (downvote) {
            setdownvote(false)
            setDown(Down - 1)
            document.getElementById("down").className = "button-vote";

        }
        else {
            setdownvote(true)
            setDown(Down + 1)
            document.getElementById("down").className = "button-vote-active";

        }
    }

    return (
        <div className='comments-and-accounts'>
            <img src={props.avtar_comment} className="photo-co" />
            <span className='time-of-comment'>{props.comment_time}</span>
            <a className='title-account'>{props.user_name_comment}</a>
            <h5 className='the-comment'>{props.comment_body}</h5>
            <a onClick={Upvote} className='but-up-comment'><img className='icon-up-comment' src={voteup} alt="this is vote up icon" />{Up}</a>
            <a onClick={Downvote} className='but-down-comment'><img className='icon-down-comment' src={votedown} alt="this is vote down icon " />{Down}</a>
            <a class="nav-link dropdown-toggle" id='reply-comment' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> View replies</a>            
                <a className="nav-link dropdown-toggle" id='dropdown-comment' data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"></a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#scrollspyHeading3">Copy link</a></li>
                    <li><a className="dropdown-item" href="#scrollspyHeading4">Follow thread</a></li>
                    <li><a className="dropdown-item" href="#scrollspyHeading5">Report comment</a></li>
                    <li><a className="dropdown-item" href="#scrollspyHeading7">Block @{props.user_name_comment}</a></li>
                </ul>
        </div>
    )
}

export default PostComment;