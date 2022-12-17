import  postData  from "../../data"
import PostCard from "./PostCard"
  
const PostList =()=>{ 
    return(
    <>
            {postData.map((post) => {
                return <PostCard key={post.id} name={post.op_user} icon={post.op_user_avatar} description={post.title} image={post.content}
                    type1={post.tags} 
                    up={post.up_votes} down={post.down_votes} commt={post.comment_count}
                />
            })}
        </>     
    )
}
export default PostList ; 