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

    }
    
    function Downvote() {
        // number=101
        // console.log(number)
        if (downvote){
            setdownvote(false)
            setDown(Down-1)
        }


        }
    }
    function color (){
        const button = document.getElementById('my-button');
button.addEventListener('click', () => {
  button.style.backgroundColor = 'blue';
});
    }
   
    return (
<>
  <div>   
        <button id="my-button"  onClick={() => {{Upvote};{color}}} className='button-vote'> <img  src = {voteup} alt="this is vote up icon"/>{Up}</button>
        <button  onClick={Downvote} className='button-vote'><img src = {votedown} alt ="this is vote down icon "/>{Down}</button>
      <button   className='save' ><img  src={SaveIcon} className='SaveIcon' alt="this is save icon" type="button" /></button>

     </div>

  </>
    )
}
export default Upvotebutton;
