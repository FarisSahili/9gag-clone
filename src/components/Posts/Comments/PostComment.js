import ProfileComment from '../../image/Profile-comment.png';
import '../../Pages/SinglePostPage.css'
const PostComment = (ct,cn,cb) => {
   console.log("5");
return(
    <>
        <div className='comments-and-accounts'>
            <img src={ProfileComment} className="photo-co" />
            <span className='time-of-comment'>{ct}</span>
            <a className='title-account'>{cn}</a>
            <h5 className='the-comment'>{cb}</h5>
        </div>  
        </>
    )
}

export default PostComment;