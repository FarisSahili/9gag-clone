import './GetApp.css'
import LogoGetApp from './get-app-logo/Logo-getapp.png'
import imgContentPhones from './get-app-logo/content in get app page.png'
import imgContentAppStore from './get-app-logo/appstore-in-get-app.png'
import imgContentGooglePlay from './get-app-logo/googleplay-in-getapp.png'



const GetApp = () => {
    return(
                               <nav class="navbar navbar-expand-lg">
                                    <div class="container-fluid">
                                        <a class="navbar-brand" href="#"><img src={LogoGetApp} className='logo-header'/></a>
                                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                          </button>
                                          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                            <div class="navbar-nav">
                                              <a class="nav-link" href="#">FAQ</a>
                                              <a class="nav-link" href="#">RULES</a>
                                              <a class="nav-link" href="#">TIPS</a>
                                              <a class="nav-link" href="#">CULTURE</a>
                                              <a class="nav-link" href="#">ADVERTISE</a>
                                              <a class="nav-link" href="#">JOBS</a>
                                              
                                              <a class="nav-link active" aria-current="page" id="blue-button" href="#">GET THE APP</a>
                                            </div>
                                          </div>
                                        </div>
                                      </nav>
                      
                
     
    );
}
export default GetApp;





           {/* <div className='content-getapp-page'>
                        <div className='phones-photo'>
                            <a>
                            <img src={imgContentPhones} className='img-phones-in-get-app'/>
                            </a> 
                        </div>  

                        <div className='wr-content-get-app'>
                          <h1 className='text-in-content-get-app'>Best LOLs and WTF GIFs</h1>
                        </div>
                        
                        <div className='two-photos-google-store-wr'>
                            <a>
                            <img src={imgContentAppStore} className='img-App-store-in-get-app' href="#"/>
                            <img src={imgContentGooglePlay} className='img-Google-play-in-get-app' href="#" />
                            </a>  
                          
                        </div>
                </div> */}

                {/* <div className='footer-wr-getapp'>
                  
                      <div className='footer-getapp'>
                            <nav className="nav flex-column">
                            <a className="navbar-brand" href="#" >TERMS</a>
                            <a className="navbar-brand" href="#" >PRIVACY</a>
                            <a className="navbar-brand" href="#" >BLOG</a>
                            <a className="navbar-brand" href="#" >FEEDBACK</a>
                            <a className="navbar-brand" href="#" >PRESS, PARTNERSHIPS OR GENERAL INQUIRIES</a>
                            <a className="navbar-brand" href="#" >COPYRIGHT</a>
                            </nav>
                      </div>                        
                      </div> */}
//                 </div>
// </div>
//       </div>




      // <div className="container-fluid">
      //   <div className="row">
      //     <div className='col-12 col-md-6 col-lg-4 col-xl-3'>