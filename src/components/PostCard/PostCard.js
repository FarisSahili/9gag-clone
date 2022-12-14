import './PostCard.css';
import { useState } from "react";
import voteup from './photo-post-card/voteup.ico';
import votedown from './photo-post-card/votedown.ico';
import SaveIcon from './photo-post-card/saveicon.ico';
import DropdownIcon from './photo-post-card/dropdownicon.ico';
import CommitIcon from './photo-post-card/commit.ico';
import WhatsAppIcon from './photo-post-card/Whatsapp.ico';
import MessangerIcon from './photo-post-card/Messenger.ico';
import ShareIcon from './photo-post-card/Share.ico';
import Link from './photo-post-card/link.ico';
import Email from './photo-post-card/email.ico';
import Facebook from './photo-post-card/facebook.ico';
import Pinterest from './photo-post-card/pinterest.ico';
import Twitter from './photo-post-card/twitter.ico';
import Telegram from './photo-post-card/telegram.ico';
import post from '../Posts';
// const SaveIcons = ({ isSelected, onClick }) => {
//     return (
//       <div className="save-icon">
// <button  className ="save-button" onClick={() => onClick()}>
//     <svg xmlns="http://www.w3.org/2000/svg" 
//          viewBox="0 0 12 12" 
//          fill={isSelected ? "red" : "white"}
//          className="bx bx-bookmark">
//             <path d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z">
//              </path>
//      </svg>
// </button>
//       </div>
//     )
//    };
  

const PostCard = (props) => {

    return (
        <div className='post-container'>
            <div className='gagger-part'>
                <div className='gagger-prof-pic'>
                    <a href = "gagger-page-html">
                    <img src={props.op_user_avatar} className='AvatarPic' alt = "this is avatar "/>
                    </a>

                <div className='gagger-name'>
                    <a>{props.op_user}</a>
                    <span> {props.post_time}</span>
                </div>
  
                <div className='save-icon'>
                    <button className='save-button' />

                </div>  

                    <div className='save-icon'>
                        <button className='save-button'>
                            <img src={SaveIcon} className='SaveIcon' alt="this is save icon" type="button" />
                        </button>
                    </div>

                    <div className="dropdown">
                        <button className='dropdown-button' data-bs-toggle="dropdown" type="button">
                            <img src={DropdownIcon} className='dropdownIcon' alt="this is save icon" type="button" />
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
                                        <h4 >{props.title}</h4>
                            </div>
                            <div className='memes-media'>
                            <img src={props.content} alt="" />
                            </div>
                        <div className='container-tag'>
                                <a  className='Post-Card-Tag' >{props.tags[0]}</a>
                                <a  className='Post-Card-Tag' >{props.tags[1]}</a>
                        </div>
                        <div className='button-card'>
                            <div className='vote-button'>
                                 <a className='button-vote'><img src = {voteup} alt="this is vote up icon"/>{props.up_votes}k</a>
                                 <a  className='button-vote'><img src = {votedown} alt ="this is vote down icon "/>  {props.down_votes}</a>
                                 <a className='button-vote'><img src = {CommitIcon} alt ="this is commit icon " />{props.commentt}</a>
                            </div>

                    <div className='share-buttons'>
                        <a className='share-icon'>
                            <img src={WhatsAppIcon} alt="this is WhatsAppIcon" /></a>

                        <a className='share-icon'>
                            <img src={MessangerIcon} alt="this is MessangerIcon " /></a>
                        <div class="dropdown">
                            <button className="dropdown" type="button" data-bs-toggle="dropdown" >
                                <img className='share-icon' src={ShareIcon} alt="this is ShareIcon " />
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" ><img className='dropdown-share-icon' src={Link} alt="this is Copylink Icon" />Copy Link</a></li>
                                <li><a className="dropdown-item" ><img className='dropdown-share-icon' src={Email} alt="this is Email Icon" />Email</a></li>
                                <li><a className="dropdown-item">
                                    <img className='dropdown-share-icon' src={Facebook} alt="this is Facebook Icon" />Facebook</a></li>
                                <li><a className="dropdown-item" ><img className='dropdown-share-icon' src={Pinterest} alt="this is pinterest Icon" />pinterest</a></li>
                                <li><a className="dropdown-item">
                                    <img className='dropdown-share-icon' src={Twitter} alt="this is Twitter Icon" />Twitter</a></li>
                                <li><a className="dropdown-item"><img className='dropdown-share-icon' src={Telegram} alt="this is telegram Icon" />Telegram</a></li>

                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            <>
            {post.map((post) => {
                return <PostCard key={post.id}
                op_user={post.op_user} op_user_avatar={post.op_user_avatar}  title={post.title}  content={post.content} post_date={post.post_date} 
                tags={post.tags}   up_votes={post.up_votes}  down_votes={post.down_votes}  commentt={post.commentt}   
                
                />
            })}
        </>

        </div>
    )
}

export default PostCard;

