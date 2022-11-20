const Navbar = () => {
    return(
    <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
              <a className="navbar-brand" href="#">9GAG</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                   
                    <i className="fa-solid fa-bars"></i>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">🔀 Shuffle</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">📱 Get App</a>
                  </li>
                 
                  <li className="nav-item">
                    <a className="nav-link" href="#">🏴‍☠️ Memeland</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"> 🥔 Potatoz</a>
                  </li>
                 
                </ul>
                <form class="d-flex" role="search">
                   {/* <input onChange  class="form-control me-2" type="search" placeholder="Search" aria-label="Search">  */}
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
    )
    
    
    }//end func
    
    export default Navbar