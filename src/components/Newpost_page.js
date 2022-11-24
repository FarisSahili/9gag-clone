import ph from './ph.png';
import './Newpost_page.css';
const Newpost_page=()=>
{
    console.log()
    return(
       <div>

              <div className='creat_post'><h4>Create Post</h4></div>
              <div className="dropdown">
                    <p className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">9GAG Rules
                    </p>
                    <ul className="rules_menu dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <ol>
                        <li className='hhh'>No pornography</li>
                        <li className='hhh'>No violence or gory contents</li>
                        <li className='hhh'>No hate speech and bullying</li>
                        <li className='hhh'>No spamming and manipulation</li>
                        <li className='hhh'>No deceptive content</li>
                        <li className='hhh'>No illegal activities</li>
                        <li className='hhh'>No impersonation</li>
                        <li className='hhh'>No copyright infringement</li>

                        </ol>
                    </ul>
                    
                    <div id='oop' className="container" >
              
                         <input  placeholder="Titel" className="titel form-control" ></input>
              

                            <img src={ph} className="rounded mx-auto d-block"/>
                            <input  placeholder="Add at least 1 tag" className="add form-control" ></input>

                            <div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    o
  </button>
  <ul class="dropdown-menu">
    <il><p>Enable anonymous posting</p><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input></div></il>
  </ul>
                                </div>
                                </div>

                               
                </div>
       </div>
    )




}
export default Newpost_page