// const handleClick =()=>{
//     const [count, setCount] = useState(100);

//   setCount(current => current + 1);
// };

 import './count.css'
 import SaveIcon from './photo-post-card/saveicon.ico';

import { useState } from 'react';
import votedown from './photo-post-card/votedown.ico';

import voteup from './photo-post-card/voteup.ico';

const SaveIcons = ({ isSelected, onClick }) => {
    return (
      <div className="save-icon">
<button  className ="save-button" onClick={() => onClick()}>
    <svg xmlns="http://www.w3.org/2000/svg" 
         viewBox="0 0 12 12" 
         fill={isSelected ? "red" : "white"}
         className="bx bx-bookmark">
            <path d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z">
             </path>
     </svg>
</button>
      </div>
    )
   };
  
const Upvotebutton = () =>{
// let number = '100';
const [Up,setUp] = useState(20);
const [Down,setDown] = useState(30);

const [upvote,setUpvote] = useState(false)
const [downvote,setdownvote] = useState(false)
    function Upvote () {
        // number=101
        // console.log(number)
        if (upvote){
            setUpvote(false)
            setUp(Up-1)
            document.getElementById("up").className = "button-vote";
        }
        else
        {
            setUpvote(true)
            setUp(Up+1)
            document.getElementById("up").className = "button-vote-active";

            // if (downvote){
            //     setdownvote(false)
            //     setUp(Up+1)
            //     setDown(Down-1)

            // }

        }
    }
    
    function Downvote() {
        // number=101
        // console.log(number)
        if (downvote){
            setdownvote(false)
            setDown(Down+1)
            document.getElementById("down").className = "button-vote";

        }
        else
        {
            setdownvote(true)
            setDown(Down-1)
            document.getElementById("down").className = "button-vote-active";
            // if (upvote){
            //     setUpvote(false)
            //     setDown(Down+1)
            

            // }
        }
    }
   
    return (
<>
  <div>    
        <button onClick={Upvote} id="up" className='button-vote'><img className='arrowu'  src = {voteup} alt="this is vote up icon"/>{Up}</button>
        <button  onClick={Downvote} id="down" className='button-vote'><img className='arrowd' src = {votedown} alt ="this is vote down icon "/>{Down}</button>
      <button   className='save' ><SaveIcons/></button>

   </div>

  </>
    )
}
export default Upvotebutton;
