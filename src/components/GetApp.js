import './GetApp.css'
import img from './get-app-logo/logo-nav-get-app.png'
const GetApp = () => {
    return(
      <div className='nav-get-app'>
              <div className='logo-nav-get-app'>
                <a className='logo-header' >
                <img src={img}/>
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
                              <a className="nav-link disabled">TIPS</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link disabled">CULTURE</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link disabled">ADVERTISE</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link disabled">DISABLED</a>
                            </li>
                            <li className="nav-item-blue">
                            <a className="nav-link active" aria-current="page" href="#">GET THE APP</a>
                            </li>
                      </ul>
            </div>
      </div>
    );
}
export default GetApp;


