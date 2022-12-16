import React, { useEffect, useState } from "react";
import PostCard from './components_new/Posts/PostCard.js'
import img1 from './image/post1.jpg'
import img2 from './image/aVbMoW8_460swp.webp'
import img3 from './image/axo1R8Y_460swp.webp'
import img4 from './image/awZXdxy_460swp (1).webp'
import img5 from './image/az2XRZj_461swp.webp'
import img6 from './image/avQORnq_460swp.webp'
import icon1 from './image/icon1.jpg'
import icon2 from './image/icon2.jpg'
import icon3 from './image/icon3.jpg'
import icon4 from './image/icon4.jpg'
import icon5 from './image/icon5.jpg'
import icon6 from './image/icon6.jpg'
import Posts from './Postdata'
//import { Link } from "react-router-dom";

 

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
  const [list, setList] = useState(Posts);
  useEffect(() => {
      setList(shuffle(Posts))     
    }, []);

  function handleShuffle() {
    const changes = shuffle([...list]);
    setList(changes);
    console.log("Shuffle", Posts);
  }
 
  return (
    <div>
     <button onClick={handleShuffle}> 🔀 Shuffle</button>
      {list.map((x,index) => (
        <PostCard key={x.id}
        op_user={x.op_user} op_user_avatar={x.op_user_avatar}  title={x.title}  content={x.content} post_date={x.post_date} 
        tags={x.tags}   up_votes={x.up_votes}  down_votes={x.down_votes}  comment={x.comment}   
        />
      ))}
    
    </div>
  );
}

export default RecommendedPosts;