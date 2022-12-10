import './PostCard.css';
import AvatarPic from './avatar.png';
import voteup from './voteup.ico';
import votedown from './votedown.ico';
import SaveIcon from './saveicon.ico';
import DropdownIcon from './dropdownicon.ico';
import CommitIcon from './commit.ico';
import WhatsAppIcon from './Whatsapp.ico';
import MessangerIcon from './Messenger.ico';
import ShareIcon from './Share.ico';
import Link  from './link.ico';
import Email from './email.ico';
import Facebook from './facebook.ico';
import Pinterest from './pinterest.ico';
import Twitter from './twitter.ico';
import Telegram from './telegram.ico';

const PostCard = (props) =>  {

    return ( 
<div className='post-container'>
        <div className='gagger-part'>
                <div className='gagger-prof-pic'>
                    <a href = "gagger-page-html">
                    <img src={props.icon} className='AvatarPic' alt = "this is avatar "/>
                    </a>

                <div className='gagger-name'>
                    <a className='gagger'>{props.name}</a>
                    <span> {props.time}h</span>

                </div>
  
                <div className='save-icon'>
                    <button className='save-button'>
                            <img src={SaveIcon} className='SaveIcon' alt="this is save icon" type = "button" />
                    </button>
                </div>  

<div className="dropdown">
                        <button className='dropdown-button' data-bs-toggle="dropdown" type="button">
                            <img src={DropdownIcon} className='dropdownIcon' alt="this is save icon" type = "button" />
                        </button>
                         <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">Download Media</button></li>
                                <li><button className="dropdown-item" type="button">Save</button></li>
                                <li><button className="dropdown-item" type="button">I Don't Like This</button></li>
                                <li><button className="dropdown-item" type="button">I've seen this</button></li>
                                <li><button className="dropdown-item" type="button">Hide Post</button></li>
                                <li><button className="dropdown-item" type="button">Report Post</button></li>
                                <li><button className="dropdown-item" type="button">Block</button></li>
                        </ul>
             </div>
 </div>  
                            <div className='title-of-post'>
                                    <h4 >{props.description}</h4>
                            </div>
                            <div className='memes-media'>
                            <img className='Media' src={props.image} alt="" />
                            </div>
                        <div className='container-tag'>
                                <a  className='Post-Card-Tag' >{props.type1}</a>
                                <a  className='Post-Card-Tag' >{props.type2}</a>
                        </div>
                        <div className='button-card'>
                            <div className='vote-button'>
                            <button type="button" className="votebutton"><img className='voteup' src={voteup} alt='voteup icon'/>{props.up}</button>
                            <button type="button" className="votebutton"><img className='votedown' src={votedown} alt='vote down icon'/>{props.down}</button>
                            <button type="button" className="votebutton"><img className='commit' src={CommitIcon} alt='commit icon'/>{props.commt}</button>
                            </div>

                    <div className='share-buttons'>
                                    <a className='share-icon'>
                                    <img src = {WhatsAppIcon} alt="this is WhatsAppIcon"/></a>
                                    
                                    <a  className='share-icon'>
                                    <img src = {MessangerIcon} alt ="this is MessangerIcon "/></a>
                        <div class="dropdown">
                                <button className="dropdown" type="button" data-bs-toggle="dropdown">
                                <a className='share-icon'><img src = {ShareIcon} alt ="this is ShareIcon "/></a>
                                </button>
                            <ul className="dropdown-menu">
                                <li><a  className="dropdown-item" ><img  className='dropdown-share-icon' src = {Link} alt="this is Copylink Icon"/>Copy Link</a></li>
                                <li><a className="dropdown-item" ><img className='dropdown-share-icon' src = {Email} alt="this is Email Icon"/>Email</a></li>
                                <li><a className="dropdown-item">
                                    <img className='dropdown-share-icon' src = {Facebook} alt="this is Facebook Icon"/>Facebook</a></li>
                                <li><a className="dropdown-item" ><img className='dropdown-share-icon' src = {Pinterest} alt="this is pinterest Icon"/>pinterest</a></li>
                                <li><a className="dropdown-item">
                                    <img className='dropdown-share-icon' src = {Twitter} alt="this is Twitter Icon"/>Twitter</a></li>
                                <li><a className="dropdown-item"><img className='dropdown-share-icon' src = {Telegram} alt="this is telegram Icon"/>Telegram</a></li>

                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
                        
                   
             
</div>
    )
}

export default PostCard;

