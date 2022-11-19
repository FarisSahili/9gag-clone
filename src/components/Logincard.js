import './Logincard.css';
const Logincard = () =>  {



    return (

    <div className="signup-list-banner" >
  <div className="signup-list-banner__content">
    <div className="signup-list-banner__content__logo" >
    </div>
    <div className="signup-list-banner__content__des" >
      <h4 >
        9GAG is the largest meme community on the internet 
      </h4>
      <p className="signup-list-banner__content__def" >
        This is the place to discover the latest memes for sharing and to grow your meme collection. 
      </p>
    </div>
  </div>
  <div className="signup-list-banner__action" >
    
    <button className="signup-list-banner__action__btn" href="/loginhtml" type="button">
      Log in 
    </button>
    <button className="signup-list-banner__action__btn signup" href="/signuphtml" type = "button ">
      Create new account 
    </button>

      </div>
</div>





    )
}

export default Logincard 