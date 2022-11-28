import './PostCard.css';
import AvatarPic from './nour.png';
import MemesMedia from './memes.png';
import voteup from './voteup.ico'
import votedown from './votedown.ico'


const PostCard = () =>  {
    return ( 
<div className='post-container'>
        <div className='gagger-part'>

        <div className='gagger-prof-pic'>
            <img src={AvatarPic} className='AvatarPic'/>
            <div className = 'gagger-name'>
                <a href="gagger-page-html">nouralhuda312</a><span>5h</span>
                
                    
                    <div className='save-icon'>
                        <div className='drop-down-minu'>
                            <div className='title-of-post'>
                                <h2>Web Developers Memes</h2>
                                <div className='memes-media'>
                                    <img src={MemesMedia}/>
                                </div>
                                <div className='container-tag'>
                                    <button className='Post-Card-Tag' type="button"><a href = "tag-html">Web</a></button>
                                    <button className='Post-Card-Tag' type="button"><a href = "tag-html">Web Developers</a></button>
                                    <button className='Post-Card-Tag' type="button"><a href = "tag-html">Funny</a></button>
                                    <button className='Post-Card-Tag' type="button"><a href = "tag-html">CAP</a></button>

                                </div>
                                <div className='button-card'>
                                    <div className='vote-button'>
                                    <button type="button" class="vote-up" ><img src = {voteup}/> 5.8k</button>
                                    <button type="button" class="vote-down"><img src = {votedown}/>325</button>

                                    


                                    </div>
                                    <div className='share-icon'>

                                    </div>
                                </div>

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