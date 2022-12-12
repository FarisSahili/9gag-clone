

import './App.css';
import PostCard from './components/postcard/PostCard';
import posts from './components/Postdata' ;



function App() 
{  return (
        <>
    {posts.map((post) => {
        return <PostCard key={post.name} username={post.op_user} avatar={post.op_user_avatar} title={post.title} media={post.content}
            tag={post.tags}
            up={post.up_votes} down={post.down_votes} time={post.post_time}
        />
    })}
    </> 
    )
    
;
}
export default App;
