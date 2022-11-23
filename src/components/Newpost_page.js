const Newpost_page=()=>
{
    console.log('hello')
    return(
       <div id='oop' className="container" >
              <h1>new post</h1>
              <div className="dropdown">
                  <h1 className="btn btn-secondary dropdown-toggle" href="#" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> 9GAG Rules<span className="navbar-toggler-icon"></span>
                  </h1>
                                    
                      <ol className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li>No pornography</li>
                        <li>No violence or gory contents</li>
                        <li>No hate speech and bullying</li>
                        <li>No spamming and manipulation</li>
                        <il>No deceptive content</il>
                        <il>No illegal activities</il>
                        <il>No impersonation</il>
                        <il>No copyright infringement</il>
                      </ol>
               </div>
              <div className="input-group input-group-lg">
                   <input type="text" className="form-control" aria-label="basil" aria-describedby="inputGroup-sizing-lg"></input>
              </div>

                  <p></p>
        
       </div>
         

    )




}
export default Newpost_page