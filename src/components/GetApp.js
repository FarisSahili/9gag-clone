import './GetApp.css'
const GetApp = () => {

    return (            
        
    <section>

            <nav className="navbar bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                <img src="9gag\src\images\logo-9gag-getapp.png" alt="Bootstrap" width="30" height="24"/>
                </a>
            </div>
            </nav>
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
                <a className="nav-link disabled">ADVERTISR</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled">JOBS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">GET THE APP</a>
            </li>
            </ul>
    </section>

    )
};
export default GetApp;
