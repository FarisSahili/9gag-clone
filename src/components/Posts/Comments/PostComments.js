import postData from '../../../data';
// import PostCard from "./PostCard";
import PostComment from "./PostComment";
import ProfileComment from '../../image/Profile-comment.png';

const PostComments = () => {
    let i=1;
    return (

        <>
            {postData.map((post) => {
                post.comment.map((com)=>{
                    
                    // return(
                    //     <div className='comments-and-accounts'>
                    //         console.log('hi');
                    //         <img src={ProfileComment} className="photo-co" />
                    //         <span className='time-of-comment'>{com.comment_date}</span>
                    //         <a className='title-account' herf="#">{com.user}</a>
                    //         <h5 className='the-comment'>{com.comment_body}</h5> 
                    //     </div>  
                    // )
                <PostComment
                    // key={post.id}
                    comment_time={com.comment_date}
                    user_name_comment={com.user}
                    comment_body={com.comment_body}
                    // avtar_comment={com.avatar}
                    // up_votes_comment={com.up_votes}
                    // down_votes_comment={com.down_votes}
                />

                console.log(com.user,i);
                i++;
                
            })}
        )}
        </>
    )


}

export default PostComments;