import './GetApp.css'
import img from './get-app-logo/Logo-getapp.png'
import imgContentPhones from './get-app-logo/content in get app page.png'
import imgContentAppStore from './get-app-logo/appstore-in-get-app.png'
import imgContentGooglePlay from './get-app-logo/googleplay-in-getapp.png'



const GetApp = () => {
    return(
      <div className='getapp-page'>

                    <div className='nav-get-app'>
                              <div className='logo-nav-get-app'>
                              <a>
                              <img src={img} className='logo-header'/>
                              </a> 
                            </div>  
                          <div className='nav-without-logo'>
                                    <ul className="nav justify-content-end">
                                          <li className="nav-item">
                                            <a className="nav-link disabled">FAQ</a>
                                          </li>
                                          <li className="nav-item">
                                            <a className="nav-link disabled">RULES</a>
                                          </li>
                                          <li className="nav-item">
                                            <a className="nav-link disabled" aria-current="page" href="#">TIPS</a>
                                          </li>
                                          <li className="nav-item">
                                            <a className="nav-link disabled" aria-current="page" href="#">CULTURE</a>
                                          </li>
                                          <li className="nav-item">
                                            <a className="nav-link disabled" aria-current="page" href="#" >ADVERTISE</a>
                                          </li>
                                          <li className="nav-item">
                                            <a className="nav-link disabled" aria-current="page" href="#">DISABLED</a>
                                          </li>
                                          <li className="nav-item-blue">
                                          <a className="nav-link active" aria-current="page" href="#">GET THE APP</a>
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
                                <img src={imgContentAppStore} className='img-App-store-in-get-app'/>
                                <img src={imgContentGooglePlay} className='img-Google-play-in-get-app'/>
                                </a>  
                            </div>
                    </div>

                    <div className='footer-wr-getapp'>



                    </div>
      </div>
    );
}
export default GetApp;


