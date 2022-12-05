import './GetApp.css'
import img from './get-app-logo/Logo-getapp.png'
import imgContentPhones from './get-app-logo/content in get app page.png'
import imgContentAppStore from './get-app-logo/appstore-in-get-app.png'
import imgContentGooglePlay from './get-app-logo/googleplay-in-getapp.png'



const GetApp = () => {
    return(
      <div className="container-fluid">
        <div className="row">

        
          <div className='col-12 col-md-6 col-lg-4 col-xl-3'>

                <div className='nav-get-app'>
                          <div className='logo-nav-get-app'>
                          <a>
                          <img src={img} className='logo-header'/>
                          </a> 
                        </div>  
                      <div className='nav-without-logo'>
                                <ul className="nav justify-content-end">
                                      <li className="nav-item">
                                        <div className="faq-class">
                                            <a className="navbar-brand" href="#" >FAQ</a>
                                        </div>
                                      </li>
                                      <li className="nav-item">
                                        <div className='rules-class'>
                                          <a className="navbar-brand" href="#" >RULES</a>
                                        </div>
                                        
                                      </li>
                                      <li className="nav-item">
                                        <div className='tips-class'>
                                        <a className="navbar-brand" href="#">TIPS</a>
                                        </div>
                                        
                                      </li>
                                      <li className="nav-item">
                                        <div className='culture-class'>
                                        <a className="navbar-brand" href="#">CULTURE</a>
                                        </div>
                                      
                                      </li>
                                      <li className="nav-item">
                                        <div className='advertise-class'>
                                        <a className="navbar-brand" href="#" >ADVERTISE</a>
                                        </div>
                                        
                                      </li>
                                      <li className="nav-item">
                                        <div className='jops-class'>
                                        <a className="navbar-brand"  href="#">JOBS</a>
                                        </div>

                                      </li>
                                      <li className="nav-item-blue">
                                      <a className="nav-link active" href="#">GET THE APP</a>
                                      </li>
                                </ul>
                      </div>
                </div>

                <div className='content-getapp-page'>
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
                </div>

                <div className='footer-wr-getapp'>
                  
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
                      </div>
                </div>
</div>
      </div>
     
    );
}
export default GetApp;