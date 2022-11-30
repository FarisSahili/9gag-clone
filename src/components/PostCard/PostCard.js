import './PostCard.css';
import AvatarPic from './avatar.png';
import voteup from './voteup.ico';
import votedown from './votedown.ico';
import video from './video.mp4';
import SaveIcon from './saveicon.ico';
import CommitIcon from './commitIcon.ico';




const PostCard = () =>  {
    return ( 

<div className='post-container'>

<div className='gagger-part'>
        <div className='gagger-prof-pic'>
            <a href = "gagger-page-html">
            <img src={AvatarPic} className='AvatarPic' alt = "this is avatar "/>
            </a>
            <div className='gagger-name'>
            <a  href="gagger-page-html">nouralhuda312</a>
            <span> 5h </span>
            </div>
            
            <div className='save-icon'>
                <button className='save-button'>
                       <img src={SaveIcon} className='SaveIcon' alt="this is save icon" type = "button" />
                       </button>
                    </div>
            
            </div>
           
        
                   
                        <div className='drop-down-minu'>
                        </div>  
                            <div className='title-of-post'>
                                <h2>Baby Memes</h2>
                                <div className='memes-media'>
                                

  <video className='video-card' src={video} width="552" height="700"  controls="controls" />


                            </div>
                            <div className='container-tag'>
                                <a  className='Post-Card-Tag' href = "tag-html">Girl</a>
                                <a  className='Post-Card-Tag' href = "tag-html">Funny</a>
                                <a  className='Post-Card-Tag' href = "tag-html">Comic</a>
                                <a  className='Post-Card-Tag' href = "tag-html">random</a>

                            </div>
                                <div className='button-card'>
                                    <div className='vote-button'>
                                 <a className='button-vote'><img src = {voteup} alt="this is vote up icon"/>5.8k</a>
                                 <a  className='button-vote'><img src = {votedown} alt ="this is vote down icon "/>325</a>
                                 <a className='button-vote'><img src = {CommitIcon} alt ="this is commit icon " />92</a>

                                    </div>
                                    <div className='share-icon'>

                                    </div>
                                </div>

                            </div>
                        </div>
                   
             
</div>

    )
}
export default PostCard;