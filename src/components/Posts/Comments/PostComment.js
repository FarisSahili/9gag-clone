import ProfileComment from '../../image/Profile-comment.png';
import postData from '../../../data';
const Comment = (props) => {

return(
        <div className='comments-and-accounts'>
            <img src={ProfileComment} className="photo-co" />
            <span className='time-of-comment'>{props.comment_time}</span>
            <a className='title-account' herf="#">{props.user_name_comment}</a>
            <h5 className='the-comment'>{props.comment_body}</h5>
        </div>  
    )
}

export default Comment;