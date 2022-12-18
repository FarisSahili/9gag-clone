<<<<<<< HEAD
import './GetApp.css';

import LogoGetApp from './getAppPage-images/Logo-getapp.png';
import imgContentPhones from './getAppPage-images/content in get app page.png';
import imgContentAppStore from './getAppPage-images/appstore-in-get-app.png';
import imgContentGooglePlay from './getAppPage-images/googleplay-in-getapp.png';
=======
import './GetApp.css'
import LogoGetApp from './getAppPage-images/Logo-getapp.png'
import imgContentPhones from './getAppPage-images/content in get app page.png'
import imgContentAppStore from './getAppPage-images/appstore-in-get-app.png'
import imgContentGooglePlay from './getAppPage-images/googleplay-in-getapp.png'
>>>>>>> 61382ed332782c784d57692fed587f64b5d2d456

const GetApp = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" id="nav-logo-getapp" href="#"><img src={LogoGetApp} className='logo-header' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" id="toggler-getapp"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav" id="nav-getapp">
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

            <div className="container-fluid">
                <div className="row">
                    <div className='col-12 col-md-6 col-lg-4 col-xl-3'>
                        <div className='content-getapp-page'>

                            <div className='phones-photo col'>
                                <img src={imgContentPhones} className="rounded float-start" id="Phones-photo" alt="..." />
                            </div>

                            <div className='wr-content-get-app col'>
                                <p className="h1" id="h1-getapp" >Best LOLs and WTF GIFs</p>
                            </div>
 
                            <div className='two-photos-google-store-wr col'>
                                <a>
                                    <img src={imgContentAppStore} className='img-App-store-in-get-app' href="#" />
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
        </>
    );
}
export default GetApp;