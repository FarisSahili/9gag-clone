import './Navbar.css';
import img from './image.png';

const Navbar = () => {
    return(
      <nav className="navbar navbar-expand-lg " id="navbar" >
      <div className="container-fluid">
            <div id="menu-div">
              <button id="menu-but" type='button'> <img id="menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAIVJREFUSEvtlcENgCAQBPeoQa3H0rQzbUep4TAQX0KIj40YPQrYSSYDCBodacSFgR8zb6qT6sG5SVUDy7sH5utWUXUvQoNG4B5CxnkXmKW4tmNVJzsdMAKgBeaB1aouxnWqpsXtgeWWahqxMmTXKcn531sdv0VmYJtqtmdxMQ1Xt0z191Uf+B0nH2ATIcQAAAAASUVORK5CYII="/></button>
            </div>  
              <a id="gag-but" className="navbar-brand" href="#" ><img id="gag-img" src={img}  /></a>
                
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">  
             
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" id="shuffle" ><b>🔀 Shuffle</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="getApp" ><b>📱 Get App</b></a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link" href="#" id="memeLand"><b>🏴‍☠️ Memeland</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="potatoz"><b> 🥔 Potatoz</b></a>
            </li>
           
          </ul>
  
          <img id="search-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAjRJREFUSEvlllFO20AQhme8m742nKDpCRoeKxwgUnYl3sIJCjegJyCcoPQEDScgb0g2UqAE9ZHcoOEEmFds71RrOZEdbO86kssD+xIpmp1vZv6ZWSO80cE34oI1+M7394Hoi4PYVkQBAcx3pbzdNPBK8J+rq07cap0C0VEJIADECQvDs68HB4s6QZSCZ75/AgA/bJ0R0UlPyp+29oXgmeeNAfHbygnRhXKcSczYTb/fD6bTaZvF8b6j1DBnhzh2B4NjG/gr8Fqmj0g03JFyXubs3vO6hDgBgE+pzXdXiHMTPAdONOX8b3rpMeS8qzM0OdEVaEWRDi6Bsyj6bNI8B86WGIm2qzJdDybN/CH5n+jClbKsIROTPNj3yfZiURUygQeuEFtVlVqB9ZwiwFQbK8TD3cFA61br/L6+HjpEl0nSAP2eEDdlDlbgbFOFnG/ZaLvuNNX6yabJshmPEOBUX3KFsN5o6/BZKhcBnPWEGP33jE1yNaaxaSpyJb3z/QABPtqMg6GrjXI1MscmfV/NcW5zIS5CxrZtujvp5jh+AKIOATxHnHdM96p3NeIClTo07mrHudTQOsvH7nVCHCPR5IXz2+Xr9CGK9ghxWPRWI9HxjpRjq81VMI/W77Eurw4s+0Sa4OYvEMZGOrOk2wuObqSI83NdiXvPOyLEX0uzKrj1hkp3eZcA2oQ4Z0otirS3hVuD67wWNvBGwDrILLyo5I2Bl3D9W9ThjYI3Gqc6mm5i+/4y/gdaBUkuj2W3yQAAAABJRU5ErkJggg=="/>
            <button id="sign-but" type="button" className="buttons" > <b>Sign up/ Log in</b></button>
            <div class="dropdown">
            <button class="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false" id="profile-but" className="buttons" ><svg id="prof" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
            </button>
            <ul class="dropdown-menu">
                  <li><a  class="dropdown-item" href="#">Sign up or Log in</a></li>
                  <li><a class="dropdown-item" href="#">Dark Mode</a></li>
                  <li><a class="dropdown-item" href="#">Download 9GAG App</a></li>
                  <li><a class="dropdown-item" href="#">Help Center</a></li>
                  <li><a class="dropdown-item" href="#">Report Problems</a></li>
                  <li><a id="Terms"  class="dropdown-item" href="#">Terms & Policies</a></li>
                  <li><a id="Advertise" class="dropdown-item" href="#">Advertise</a></li>
                  <li><a id="Contact" class="dropdown-item" href="#">Contact</a></li>
                  <p id="gag" href="#">9GAG <i >&copy;</i> 2022</p>
                </ul> 


            </div>
            <button id="post-but" type="button" className="buttons"><img className='post-pen' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAXJJREFUSEvt1v1NwkAYBvDnJRViAthOoCPUCZQNcAM20RHcwDiBI8gIt4F1gn4cibQcPXOJNYVeP+hdQ2Lsv5D+eN57yHuEMz10Jhd/B/4Kw5uR47wB8AGwXIiHS88LjidrNXG22fhSyncAbgmKiGgxnk5ZGbcGyzB0M8dRya40vYlyIW7Lya3BCsuSZCWJXrSFlfJ1Mp+vis+MYTXei90uIM+L2vDJbPbrGcGlMw3GQiwacVuJNUViDXicC+Ebn3FNe9WkdfgzEd0bt7oBLXpzgKu2F0fQ++/UAdXiupZ3LtcJqHJi3XhPTmwbVT+gNfEQaCs8FNoID4nWwkOjtXCaJAGIrjvcTlrbW/eOSrl+FvnHkKg2cZokSxCpG0TT0ztp7VpMOX8C8NigGqPaxFvO1wTc1cBWUP2oOVcLvXp9kfKTRqPl8Zbp0AXtVw7KVSpWLAFGwBpSsny/Z7qbYl+0klitsC3g2kaMtpNJun9YTeAbfjfzH40wiiEAAAAASUVORK5CYII="/> <b>  Post </b>
            </button> 
        </div>
      </div>
    </nav>
    
                     
    )
    }//end func
    export default Navbar
   