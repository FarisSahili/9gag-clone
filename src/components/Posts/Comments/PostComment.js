import ProfileComment from './Profile-comment.png';
const Comment = () => {

return(
        <div className='comments-and-accounts'>
            <img src={ProfileComment} className="photo-co" />
            <span className='time-of-comment'>5h</span>
            <a className='title-account' herf="#">bomes_jand</a>
            <h5 className='the-comment'>It'd be good without that edit.</h5>
        </div>
    )
}

export default Comment;