// const handleClick =()=>{
//     const [count, setCount] = useState(100);

//   setCount(current => current + 1);
// };
 
import { useState } from 'react';
import votedown from './photo-post-card/votedown.ico';

import voteup from './photo-post-card/voteup.ico';

const Upvotebutton = () =>{
// let number = '100';
const [number,setNumber] = useState(100);
const [numberd,setNumberd] = useState(101);

    const Upvote =()=>{
        // number=101
        // console.log(number)
        setNumber(current =>current +1)
    }
    
    const Downvote =()=>{
        // number=101
        // console.log(number)
        setNumberd(current =>current -1)
    }
    
    return (

  <div>    
        <button onClick={Upvote} className='button-vote'><img src = {voteup} alt="this is vote up icon"/>{number}</button>
        <button  onClick={Downvote} className='button-vote'><img src = {votedown} alt ="this is vote down icon "/>  {numberd}</button>

   </div>
    )
}
export default Upvotebutton;
