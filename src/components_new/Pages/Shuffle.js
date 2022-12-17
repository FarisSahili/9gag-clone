import React, { useEffect, useState } from "react";
//import PostCard from './src/components_new/Posts/PostCard.js' 
//import { Link } from "react-router-dom";
import  postData  from "../../data"
import PostList from "../Posts/PostList.js";
//import Post from "../../components/Post.js";
 
function shuffle(arra1) {
  var ctr = arra1.length,
    temp,
    index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

function RecommendedPosts(props) {
  //<Link to="/Shuffle" />
  const [list, setList] = useState(postData);
  useEffect(() => {
      setList(shuffle(postData))     
    }, []);

  function handleShuffle() {
    const changes = shuffle([...list]);
    setList(changes);
    console.log("Shuffle", postData);
  }
 
  return (
    <div>
     <button onClick={handleShuffle}> 🔀 Shuffle</button>
      {list.map((x,index) => (
        <PostList key={x.id}
        op_user={x.op_user} op_user_avatar={x.op_user_avatar}  title={x.title}  content={x.content} post_date={x.post_date} 
        tags={x.tags}   up_votes={x.up_votes}  down_votes={x.down_votes}  comment={x.comment}   
        />
      ))}
    
    </div>
  );
}

export default RecommendedPosts;