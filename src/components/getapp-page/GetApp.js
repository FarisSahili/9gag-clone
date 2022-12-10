import './GetApp.css'
import LogoGetApp from './get-app-logo/Logo-getapp.png'
import imgContentPhones from './get-app-logo/content in get app page.png'
import imgContentAppStore from './get-app-logo/appstore-in-get-app.png'
import imgContentGooglePlay from './get-app-logo/googleplay-in-getapp.png'



const GetApp = () => {
    return(
      <div classNameName="container-fluid">
       <div classNameName="row">
           <div classNameName='col-12 col-md-6 col-lg-4 col-xl-3'>
                               <nav className="navbar navbar-expand-lg">
                                    <div className="container-fluid">
                                        <a className="navbar-brand" href="#"><img src={LogoGetApp} className='logo-header'/></a>
                                          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                          </button>
                                          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                            <div className="navbar-nav">
                                              <a className="nav-link" href="#">FAQ</a>
                                              <a className="nav-link" href="#">RULES</a>
                                              <a className="nav-link" href="#">TIPS</a>
                                              <a className="nav-link" href="#">CULTURE</a>
                                              <a className="nav-link" href="#">ADVERTISE</a>
                                              <a className="nav-link" href="#">JOBS</a>
                                              
                                              <a className="nav-link" aria-current="page" id="blue-button" href="#">GET THE APP</a>
                                            </div>
                                          </div>
                                        </div>
                                      </nav>



                                      <div className='content-getapp-page'>

        

                        <div className='phones-photo col'>
                          <img src={imgContentPhones} className="rounded float-start" id="Phones-photo" alt="..."/>
                        </div>  

                        <div className='wr-content-get-app col'>
                          <h1 className='text-in-content-get-app'>Best LOLs and WTF GIFs</h1>
                        </div> 
                        
                         <div className='two-photos-google-store-wr col'>
                            <a>
                            <img src={imgContentAppStore} className='img-App-store-in-get-app' href="#"/>
                            <img src={imgContentGooglePlay} className='img-Google-play-in-get-app' href="#" />
                            </a>  
                        </div> 
                </div> 

                <div className='footer-wr-getapp'>
                      <div className='footer-getapp'>
                            <nav className="nav flex-column">
                            <a className="nav-link" href="#" id="footer">TERMS</a>
                            <a className="nav-link" href="#" id="footer" >PRIVACY</a>
                            <a className="nav-link" href="#" id="footer">BLOG</a>
                            <a className="nav-link" href="#" id="footer">FEEDBACK</a>
                            <a className="nav-link" href="#" id="footer">PRESS, PARTNERSHIPS OR GENERAL INQUIRIES</a>
                            <a className="nav-link" href="#" id="footer">COPYRIGHT</a>
                            </nav>
                      </div>                        
                  </div>

                                  </div>
                              </div>
                            </div>
    );
}
export default GetApp;
