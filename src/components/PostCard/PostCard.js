import './PostCard.css';
import AvatarPic from './avatar.png';
import voteup from './voteup.ico'
import votedown from './votedown.ico'
import video from './video.mp4'


const PostCard = () =>  {
    return ( 

<div className='post-container'>

        <div className='gagger-prof-pic'>
            <img src={AvatarPic} className='AvatarPic' alt = "this is avatar "/>
            </div>

            <div className = 'gagger-name'>
                <a href="gagger-page-html">nouralhuda312 <span>5h</span></a>
                
                    
                    <div className='save-icon'>
                        <div className='drop-down-minu'>
                            <div className='title-of-post'>
                                <h2>Baby Memes</h2>
                                <div className='memes-media'>
                                

  <video src={video} width="552" height="700"  controls="controls" />


                                </div>
                                <div className='container-tag'>
                                    <button className='Post-Card-Tag' type="button"><a href = "tag-html">Girl</a></button>
                                    <button className='Post-Card-Tag' type="button"><a href = "tag-html">Funny</a></button>
                                    <button className='Post-Card-Tag' type="button"><a href = "tag-html">Comic</a></button>
                                    <button className='Post-Card-Tag' type="button"><a href = "tag-html">random</a></button>

                                </div>
                                <div className='button-card'>
                                    <div className='vote-button'>
                                    <button type="button" class="vote-up" ><img src = {voteup} alt="this is vote up icon"/> 5.8k</button>
                                    <button type="button" class="vote-down"><img src = {votedown} alt ="this is vote down icon "/>325</button>

                                    


                                    </div>
                                    <div className='share-icon'>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                
            </div>
</div>

    )
}
export default PostCard;