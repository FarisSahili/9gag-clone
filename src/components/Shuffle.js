import React, { useEffect, useState } from "react";
import PostCard from './PostCard/PostCard'
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
import { Link } from "react-router-dom";

const myArray = [
    
        {
            id : 1,
            title: "funny",
            op_user: "gager name",  // original poster,
            op_user_avatar: icon1,  // original poster,
            post_date: "2022-01-01", //yyyy-mm-dd
            up_votes : 90,
            down_votes : 10,
            content: img1, // post content (post media),
            tags : [
                "world cup" ,"random"
            ],
            commentt:23,
        },
        {id : 2,
            title: "hahahah ",
            op_user: "9hdw",  // original poster,
            op_user_avatar: icon2,  // original poster,
            post_date: "2022-01-01", //yyyy-mm-dd
            up_votes : 90,
            down_votes : 10,
            content: img2, // post content (post media),
            tags : [
                "travel","fun"
            ],
            commentt:13,
        },
        {id : 3,
            title: "Someone asked for a rumble?",
            op_user: "takedahiromitsu",  // original poster,
            op_user_avatar: icon3,  // original poster,
            post_date: "2022-01-01", //yyyy-mm-dd
            up_votes : 86,
            down_votes : 12,
            content: img3, // post content (post media),
            tags : [
                " sport","really"
            ],
            commentt:23,
        },
        {
            id : 4,
            title: "How to tell people",
            op_user: " heyheyhohojoeb",  // original poster,
            op_user_avatar: icon4,  // original poster,
            post_date: "2022-01-01", //yyyy-mm-dd
            up_votes : 543,
            down_votes : 21,
            content: img4, // post content (post media),
            tags : [
                 "funny" ,"public"
            ],
            commentt:29,
        },
        {
            id : 5,
            title: "funny",
            op_user: "gager name",  // original poster,
            op_user_avatar: icon5,  // original poster,
            post_date: "2022-01-01", //yyyy-mm-dd
            up_votes : 100,
            down_votes : 10,
            content: img5, // post content (post media),
            tags : [
                 "morocco","funny"
            ],
            commentt:203,
        },
        {
            id : 6,
            title: "ok",
            op_user: "uskwm",  // original poster,
            op_user_avatar: icon6,  // original poster,
            post_date: "2022-01-01", //yyyy-mm-dd
            up_votes : 100,
            down_votes : 10,
            content: img6, // post content (post media),
            tags : [
                 "travel","world"
            ],
            commentt:203,
        },
    ];

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

function App(props) {
  <Link to="/Shuffle" />
  const [list, setList] = useState(myArray);
  useEffect(() => {
    const mountArray = shuffle(myArray);
    setList(mountArray);
  }, []);

  function handleShuffle() {
    const changes = shuffle([...list]);
    setList(changes);
    console.log("Shuffle", myArray);
  }
 
  return (
    <div>
     <button onClick={handleShuffle}>Shuffle</button>
      {list.map((x,index) => (
        <PostCard key={x.id}
        op_user={x.op_user} op_user_avatar={x.op_user_avatar}  title={x.title}  content={x.content} post_date={x.post_date} 
        tags={x.tags}   up_votes={x.up_votes}  down_votes={x.down_votes}  commentt={x.commentt}   
        />
      ))}
    
    </div>
  );
}

export default App;