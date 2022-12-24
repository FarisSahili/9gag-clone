import "./Profile.css"; 
import imagge from '../image/happy-drake.jpg';



const Profile = () => {
  return(
    <div className="container">
         <div className="photo-div">  
            <img  className="img" src={imagge} /> 
              <div className="prof">
                  <div  className="prof-name">
                    <h4><b>DRAKE</b></h4>
                  </div>
                  <div className="prof-details">
                    <p>@icu2o <span className="profile-span">.</span> 380 days</p>
                  </div> 
              </div>     
         </div> 
         <div className="caption">
              <p>My Funny Collection</p>
         </div>
         <div className="linkes-div">
              <div className="post-div">
                   <a className="profile-links">Posts</a>
              </div>
              <div className="comment-div">
                   <a className="profile-links">Comments</a>
              </div>
              <div id="but-div" className="dropdown "> 
                     <button id="but" className="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                          </svg>
                     </button>
                     <ul id="dropdown-menu-id" className="dropdown-menu">
                        <li><a  className="dropdown-item" href="#">Copy link</a></li>
                        <li><a  className="dropdown-item" href="#">Report @icu2o</a></li>
                        <li><a  className="dropdown-item" href="#">Block @icu2o</a></li>
                    </ul> 
              </div>
         </div>
            <hr id="prof-hr"/>
    </div>
  )
}

export default Profile