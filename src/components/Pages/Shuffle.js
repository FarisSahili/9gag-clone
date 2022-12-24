import React, { useEffect, useState } from "react";
//import PostCard from './src/components_new/Posts/PostCard.js' 
import { Link } from "react-router-dom";
import  postData  from "../../data"
import PostCard from "../Posts/PostCard";
import Sidebar from "../UI/Sidebar/Sidebar";
import './SpecialPgaes/Shuffle.css'
import LogoNavHome from '../UI/NavBarHomeImg/logoNavHome.png'

 
const RecommendedPosts=(props)=> {
  const [list, setList] = useState(postData);
  useEffect(() => {
      setList(shuffle(postData))     
    }, []);
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

  function handleShuffle() {
    const changes = shuffle([...list]);
    setList(changes);
    console.log("Shuffle", postData);
  }
 
  return (
    <div>
      <Sidebar/>
      <nav className="navbar bg-light" >
      <button className="btn-start" type="button" data-bs-toggle="offcanvas" 
data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" ><img className="menue"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAH9JREFUWEft1UsKgDAMANH05npypTsXtYOGQAvTbaikLx9bLHbaYvmECVFFFFKIBCi+VQ9d9JpkfIgxEzKhLr5VDyVb5N91hchtJnREROWknaPkHPuHyufF2EtWeYbfd8qIXKGMUOUOev2Puocye4jKXRJ3yohVIYVIgOL2EAndFg4LJcntgd8AAAAASUVORK5CYII="/></button>
            
                <button className="btnshuffle" onClick={handleShuffle}><b>🔀 Shuffle</b></button>
                <Link to='/Home' className="navbarbrand" ><img className="gagimg" src={LogoNavHome}/></Link>
           </nav>           
      {list.map((x) => (
        <PostCard key={x.id}
        op_user={x.op_user} op_user_avatar={x.op_user_avatar}  title={x.title}  content={x.content} post_date={x.post_date} 
        tags={x.tags}   up_votes={x.up_votes}  down_votes={x.down_votes}  comment={x.comment}   
        />
      ))}
    </div>
  );
      }
export default RecommendedPosts;