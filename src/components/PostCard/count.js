// const handleClick =()=>{
//     const [count, setCount] = useState(100);

//   setCount(current => current + 1);
// };
 import './count.css'
 import SaveIcon from './photo-post-card/saveicon.ico';

import { useState } from 'react';
import votedown from './photo-post-card/votedown.ico';

import voteup from './photo-post-card/voteup.ico';

const Upvotebutton = () =>{
// let number = '100';
const [Up,setUp] = useState(100);
const [Down,setDown] = useState(101);

const [upvote,setUpvote] = useState(false)
const [downvote,setdownvote] = useState(false)
    function Upvote () {
        // number=101
        // console.log(number)
        if (upvote){
            setUpvote(false)
            setUp(Up-1)
        }
        else
        {
            setUpvote(true)
            setUp(Up+1)
            if (downvote){
                setdownvote(false)
                setUp(Up+1)
                setDown(Down-1)
            

            }

        }
    }
    
    function Downvote() {
        // number=101
        // console.log(number)
        if (downvote){
            setdownvote(false)
            setDown(Down-1)
        }
        else
        {
            setdownvote(true)
            setDown(Up+1)
            if (upvote){
                setUpvote(false)
                setDown(Down+1)
            

            }

        }
    }
   
    return (
<>
  <div>    
        <button onClick={Upvote} className='button-vote'><img className='arrowu'  src = {voteup} alt="this is vote up icon"/>{Up}</button>
        <button  onClick={Downvote} className='button-vote'><img className='arrowd' src = {votedown} alt ="this is vote down icon "/>{Down}</button>
      <button   className='save' ><img  src={SaveIcon} className='SaveIcon' alt="this is save icon" type="button" /></button>

   </div>

  </>
    )
}
export default Upvotebutton;
