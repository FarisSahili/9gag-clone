import './PostCard.css';
import AvatarPic from './avatar.png';
import voteup from './voteup.ico';
import votedown from './votedown.ico';
import video from './video.mp4';
import SaveIcon from './saveicon.ico';
import DropdownIcon from './dropdownicon.ico';
import CommitIcon from './commitIcon.ico';
import WhatsAppIcon from './Whatsapp.ico';
import MessangerIcon from './Messenger.ico';
import ShareIcon from './Share.ico';
import Link  from './link.ico';
import Email from './email.ico';
import Facebook from './facebook.ico';
import Pinterest from './pinterest.ico';
import Twitter from './twitter.ico';
import Telegram from './telegram.ico';



const PostCard = () =>  {
    return ( 
<div className='post-container'>
        <div className='gagger-part'>
                <div className='gagger-prof-pic'>
                    <a href = "gagger-page-html">
                    <img src={AvatarPic} className='AvatarPic' alt = "this is avatar "/>
                    </a>
                <div className='gagger-name'>
                    <a>nouralhuda312</a>
                    <span> 5h </span>
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
                                        <h4 >Why hadn't I ever heard a miniature Italian speak before?!</h4>
                            </div>
                            <div className='memes-media'>
                                <video className='video-card' src={video}  controls="controls" />
                            </div>
                        <div className='container-tag'>
                                <a  className='Post-Card-Tag' href = "tag-html">Girl</a>
                                <a  className='Post-Card-Tag' href = "tag-html">Funny</a>
                                <a  className='Post-Card-Tag' href = "tag-html">Comic</a>
                                <a  className='Post-Card-Tag' href = "tag-html">Random</a>

                        </div>
                        <div className='button-card'>
                            <div className='vote-button'>
                                 <a className='button-vote'><img src = {voteup} alt="this is vote up icon"/>70</a>
                                 <a  className='button-vote'><img src = {votedown} alt ="this is vote down icon "/> 325</a>
                                 <a className='button-vote'><img src = {CommitIcon} alt ="this is commit icon " /> 92</a>
                            </div>

                    <div className='share-buttons'>
                                    <a className='share-icon' href ="https://api.whatsapp.com/send?text=Bottomless%20table%20%0Ahttps%3A%2F%2F9gag.com%2Fgag%2Fa3ZM8Y3%3Fref%3Dwsa"target="_blank">
                                    <img src = {WhatsAppIcon} alt="this is WhatsAppIcon"/></a>
                                    
                                    <a  className='share-icon'href="https://www.facebook.com/login.php?api_key=111569915535689&skip_api_login=1&display=popup&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfdb134347208b8%26domain%3D9gag.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252F9gag.com%252Ff1455ea92053674%26relation%3Dopener%26frame%3Df28b458ebb7c02c%26result%3D%2522xxRESULTTOKENxx%2522&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fsend%3F_path%3Dsend%26app_id%3D111569915535689%26client_id%3D111569915535689%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Dfdb134347208b8%2526domain%253D9gag.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252F9gag.com%25252Ff1455ea92053674%2526relation%253Dopener%2526frame%253Df28b458ebb7c02c%2526result%253D%252522xxRESULTTOKENxx%252522%26sdk%3Djoey%26display%3Dpopup%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df2e825b170e4a9%2526domain%253D9gag.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252F9gag.com%25252Ff1455ea92053674%2526relation%253Dopener%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252F9gag.com%252F%26link%3Dhttps%253A%252F%252F9gag.com%252Fgag%252Fa3ZM8Y3%253Fref%253Dfbm%26locale%3Den_US%26version%3Dv8.0%26from_login%3D1">
                                    <img src = {MessangerIcon} alt ="this is MessangerIcon "/></a>
                        <div class="dropdown">
                                <button className="dropdown" type="button" data-bs-toggle="dropdown">
                                <a className='share-icon'><img src = {ShareIcon} alt ="this is ShareIcon "/></a>
                                </button>
                            <ul className="dropdown-menu">
                                <li><a  className="dropdown-item" href="#"><img  className='dropdown-share-icon' src = {Link} alt="this is Copylink Icon"/>Copy Link</a></li>
                                <li><a className="dropdown-item" href="#"><img className='dropdown-share-icon' src = {Email} alt="this is Email Icon"/>Email</a></li>
                                <li><a className="dropdown-item" href="https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252F9gag.com%252Fgag%252FaBd8dDN%253Fref%253Dfb.s%26switched_accounts%3D1&display=popup">
                                    <img className='dropdown-share-icon' src = {Facebook} alt="this is Facebook Icon"/>Facebook</a></li>
                                <li><a className="dropdown-item" href="#"><img className='dropdown-share-icon' src = {Pinterest} alt="this is pinterest Icon"/>pinterest</a></li>
                                <li><a className="dropdown-item" href="https://twitter.com/intent/tweet?via=9GAG&source=tweetbutton&original_referer=https%3A%2F%2F9gag.com%2Fgag%2FaBd8dDN%3Fref%3Dt&text=When%20you%20are%20the%20life%20and%20soul%20of%20the%20party...&url=https%3A%2F%2F9gag.com%2Fgag%2FaBd8dDN%3Fref%3Dt">
                                    <img className='dropdown-share-icon' src = {Twitter} alt="this is Twitter Icon"/>Twitter</a></li>
                                <li><a className="dropdown-item" href="https://t.me/share/url?text=Bottomless%20table&url=https%3A%2F%2F9gag.com%2Fgag%2Fa3ZM8Y3%3Fref%3Dtgm"><img className='dropdown-share-icon' src = {Telegram} alt="this is telegram Icon"/>Telegram</a></li>

                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
                        
                   
             
</div>
    )
}
export default PostCard;
