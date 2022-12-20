import postData from '../../../data';
// import PostCard from "./PostCard";
import Comment from "./PostComment";

const PostComments = () => {
    return (

        <>
            {/* <Comment />  */}
            {postData.map((post) => {
                return <Comment key={post.id} 
                user_name_comment={post.comment.user}
                avtar_comment={post.comment.avatar}
                comment_time={post.comment.comment_time}
                comment_body={post.comment.comment_body} 
                up_votes_comment={post.comment.up_votes} 
                down_votes_comment={post.comment.up_votes}

                />
            }
            )}
        </>
    )


}

export default PostComments;