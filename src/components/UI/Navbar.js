import { Link } from 'react-router-dom';
// import LogoNavHome from './Pages/NavBarHomeImg/logoNavHome.png';
import './Navbar.css';
import RecommendedPosts from '../Pages/Shuffle';
import handleShuffle from '../Pages/Shuffle';
import CostuomTags from './CustomizeTags/CustomTags'
import SocialMediaSignup from '../SignupLoginModal/SocialMediaSignup';
import LogoNavHome from './NavBarHomeImg/logoNavHome.png'

const itemClicked = (event) => {
    event.stopPropagation();
}

const Navbar = () => {



    
    return(        
          <div className='basic-navbar sticky-top'>
             <div className='components'>
                <div className='left-components'>   
                        <div id="menu-div">
                        <button className="btn-start" type="button" data-bs-toggle="offcanvas" 
data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" ><img className="menue"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAH9JREFUWEft1UsKgDAMANH05npypTsXtYOGQAvTbaikLx9bLHbaYvmECVFFFFKIBCi+VQ9d9JpkfIgxEzKhLr5VDyVb5N91hchtJnREROWknaPkHPuHyufF2EtWeYbfd8qIXKGMUOUOev2Puocye4jKXRJ3yohVIYVIgOL2EAndFg4LJcntgd8AAAAASUVORK5CYII="/></button>
                        </div>  
                        <div className='logo-div'>
                            <Link to='/Home' id="gag-but" className="navbar-brand" href="#" ><img id="gag-img" src={LogoNavHome} /></Link>
                        </div>
                        <div className='left-div'>
                           <Link to='/shuffle' className="left-links"  onClick={RecommendedPosts}><b>🔀 Shuffle</b></Link>
                        </div>
                        <div className='left-div'>
                           <Link to='/getapp' className="left-links"><b>📱 Get App</b></Link>
                        </div>
                        <div className='left-div'>
                           <a className="left-links"><b>🏴‍☠️ Memeland</b></a>
                        </div>
                        <div className='left-div'>
                           <a className="left-links"><b>🥔 Potatoz</b></a>
                        </div>
                         
                </div>  
                <div className='right-components'>
                        <div className="dropdown" id='search-div' >
                            <button id="search-but" className="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false" > 
                                <img id="search-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAjRJREFUSEv
                                    lllFO20AQhme8m742nKDpCRoeKxwgUnYl3sIJCjegJyCcoPQEDScgb0g2UqAE9ZHcoOEEmFds71RrOZEdbO86kssD+xIpmp1vZv6ZWSO80cE34oI1+M739
                                    4Hoi4PYVkQBAcx3pbzdNPBK8J+rq07cap0C0VEJIADECQvDs68HB4s6QZSCZ75/AgA/bJ0R0UlPyp+29oXgmeeNAfHbygnRhXKcSczYTb/fD6bTaZvF8b6
                                    j1DBnhzh2B4NjG/gr8Fqmj0g03JFyXubs3vO6hDgBgE+pzXdXiHMTPAdONOX8b3rpMeS8qzM0OdEVaEWRDi6Bsyj6bNI8B86WGIm2qzJdDybN/CH5n+jCl
                                    bKsIROTPNj3yfZiURUygQeuEFtVlVqB9ZwiwFQbK8TD3cFA61br/L6+HjpEl0nSAP2eEDdlDlbgbFOFnG/ZaLvuNNX6yabJshmPEOBUX3KFsN5o6/BZKhc
                                    BnPWEGP33jE1yNaaxaSpyJb3z/QABPtqMg6GrjXI1MscmfV/NcW5zIS5CxrZtujvp5jh+AKIOATxHnHdM96p3NeIClTo07mrHudTQOsvH7nVCHCPR5IXz2
                                    +Xr9CGK9ghxWPRWI9HxjpRjq81VMI/W77Eurw4s+0Sa4OYvEMZGOrOk2wuObqSI83NdiXvPOyLEX0uzKrj1hkp3eZcA2oQ4Z0otirS3hVuD67wWNvBGwDr
                                    ILLyo5I2Bl3D9W9ThjYI3Gqc6mm5i+/4y/gdaBUkuj2W3yQAAAABJRU5ErkJggg=="/>
                            </button>
                                <ul id="search-drpdown" className="dropdown-menu">
                                        <li>
                                        <nav className="navbar navbar-light bg-light">
                                            <form className="form-inline">
                                            <div className="input-group">
                                                <div id="search-div" className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><svg id="nested-search" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                                </svg></span>
                                                </div>
                                                <input id="search-input" type="text" className="form-control" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1"  />
                                            </div>
                                            </form> 
                                        </nav> 
                                        </li>
                                </ul>
                        </div>  
                        
                        <div className='sign-div'>
                            <button id="sign-but" type="button" className="buttons" > <b>Sign Up/ Log In</b></button>
                        </div>
                        <div  id='profile-div' className="btn-group dropstart">
                                        <button type="button" className="btn btn-secondary " data-bs-toggle="dropdown" aria-expanded="false" id="profile-but"  >
                                                <svg id="prof" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                                </svg>  
                                        </button>
                                
                                        <ul id="prof-dropdowm" className="dropdown-menu">
                                                <li><a  className="dropdown-item"          >Sign up or Log in</a></li>
                                                <li><a  className="dropdown-item" href="#">Customize with Tags</a></li>
     
                                                <li>
                                                    <a id="dark-mode-link" className="dropdown-item" href="#" onClick={itemClicked}> <div id="f-div">Dark Mode<div id="s-div"  className="form-check form-switch">
                                                    <input  className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label></div> </div>
                                                    </a>
                                                </li> 
                                                <li><a className="dropdown-item" href="#">Download 9GAG App</a></li>
                                                <li><a className="dropdown-item" href="#">Help Center</a></li>
                                                <li><a className="dropdown-item" href="#">Report Problems</a></li>

                                            
                                        
                                                <li>
                                                <div className='Dropdown'>   
                                                    <div className='select'>  
                                                        <a href='#' id='term' className='test dropdown-item' onClick={itemClicked} >Terms & Policies
                                                            <div className='caret'>
                                                                <svg id='img-terms-id'  xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                                </svg>
                                                            </div>
                                                        </a>
                                                    </div>
                                                        <ul id='terms-show' className='menu'>
                                                            <li><a id="termss" href='#' className='test'>Terms</a></li>
                                                            <li><a id="Privacyy" href='#' className='test'>Privacy</a></li>
                                                            <li><a id="Copyrightt" href='#' className='test'>Copyright</a></li>
                                                        </ul>
                                                    
                                                </div>  
                                            </li>

                                            <li> 
                                                <div className='Dropdown'>  
                                                    <div className='select'>    
                                                        <a href='#' id='termm' className='test dropdown-item  ' onClick={itemClicked}>Advertise
                                                            <div className='caret'>
                                                                <svg id='img-advertise-id'  xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                                </svg>
                                                            </div>
                                                        </a>
                                                    </div>  
                                                        <ul id='ad-show' className='menu'>
                                                            <li><a id="Advertisee" href='#' className='test'>Advertise on 9GAG</a></li>
                                                            <li><a id="Reportt" href='#'className='test'>Report Ads</a></li>
                                                        </ul>
                                                </div>
                                            </li>

                                            <li>
                                                <div className='Dropdown'>  
                                                <div className='select'>    
                                                        <a href='#' id='contact' className='test dropdown-item' onClick={itemClicked}>Contact
                                                        <div className='caret'>
                                                            <svg id='img-contact-id'  xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                            </svg>
                                                        </div>     
                                                        </a>
                                                    </div>
                                                        <ul id='career-show' className='menu'>
                                                            <li><a id="Careerr" href='#' className='test'>Career</a></li>
                                                        </ul>
                                                </div>      
                                            </li>

                        
                                    
                                        <p id="gag" href="#" className='disabled'>9GAG <i>&copy;</i> 2022</p>
                                    </ul> 
                                </div>
                                <div className='post-but-div'>
                                    <Link to='/addnewpost' id="post-but" type="button" className="buttons"><img className='post-pen' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAXJJREFUSEvt1v1NwkAYBvDnJRViAthOoCPUCZQNcAM20RHcwDiBI8gIt4F1gn4cibQcPXOJNYVeP+hdQ2Lsv5D+eN57yHuEMz10Jhd/B/4Kw5uR47wB8AGwXIiHS88LjidrNXG22fhSyncAbgmKiGgxnk5ZGbcGyzB0M8dRya40vYlyIW7Lya3BCsuSZCWJXrSFlfJ1Mp+vis+MYTXei90uIM+L2vDJbPbrGcGlMw3GQiwacVuJNUViDXicC+Ebn3FNe9WkdfgzEd0bt7oBLXpzgKu2F0fQ++/UAdXiupZ3LtcJqHJi3XhPTmwbVT+gNfEQaCs8FNoID4nWwkOjtXCaJAGIrjvcTlrbW/eOSrl+FvnHkKg2cZokSxCpG0TT0ztp7VpMOX8C8NigGqPaxFvO1wTc1cBWUP2oOVcLvXp9kfKTRqPl8Zbp0AXtVw7KVSpWLAFGwBpSsny/Z7qbYl+0klitsC3g2kaMtpNJun9YTeAbfjfzH40wiiEAAAAASUVORK5CYII="/> <b>  Post </b>
                                    </Link>
                                </div> 
                </div>
             </div>
             <hr id="navbar-hr"/>
          </div>



    )
    }//end func
    export default Navbar;
  