import  postData  from "../../data"
import PostCard from "./PostCard"
  
const PostList =()=>{ 
    return(
    <>
            {postData.map((post) => {
                return <PostCard key={post.id} op_user={post.op_user} op_user_avatar={post.op_user_avatar} title={post.title}  content={post.content}
                tags={post.tags} 
                    up_votes={post.up_votes} down_votes={post.down_votes} commt={post.comment_count}
                />
            })}
        </>     
    )
}
export default PostList ; 