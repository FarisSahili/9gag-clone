import Navbar from '../UI/Navbar';
import './LoginPost.css';
const Logincard = () =>  {



    return (
      <>

<div className='container'>
    <div className="LoginCard" >
      <div className='content-card'>
    <div className="Login-9gag-logo" >
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M40 44.6875L19.6875 32.9688V28.2812L40 16.5625L60.3125 28.2812V51.7188L40 63.4375L19.6875 51.7188L27.8125 47.0312L40 54.0625L52.1875 47.0312V37.6562L40 44.6875ZM31.875 30.625L40 35.3125L48.125 30.625L40 25.9375L31.875 30.625Z" fill="white"/>
</svg>
{/* /*fromlogo.svg on component */ }

    </div>
    <div className="card-9gag-des" >
      <h4 className='loginh4 ' >
        9GAG is the largest meme community on the internet </h4>
      <p className="card-9gag-def pp" >
        This is the place to discover the latest memes for sharing and to grow your meme collection. 
      </p>
    </div>
  </div>
  <div className="card-9gag-buttons" >
    
    <p className="login-button" href="./loginModal" >
      Log in 
    </p>
    <p className="signup-button" href="./signupModal" >
      Create new account 
    </p>

      </div>
</div>
</div>



</>

    )
}

export default Logincard 