import ph from './ph.png';
import './Newpost_page.css';

const Newpost_page=()=>
{
    console.log()
    return(
    <div>

            <div className='creat_post'><h4>Create Post</h4></div>
            
            <div className="dropdown">
                    <p className="btn_rules btn" type="button" data-bs-toggle="dropdown">9GAG Rules
                    </p>
                    <ul className="rules_menu dropdown-menu">
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
                    
                    <div className="container" >
            
                        <input  placeholder="Titel" className="titel form-control" ></input>
            

                            <img src={ph} className="choose_file"/>
                            <input  placeholder="Add at least 1 tag" className="add form-control" ></input>

                            <div className="btn-group dropup">
                                <button type="button" className="add_list toggle-button" data-bs-toggle="dropdown">00</button>
                                <ul className="dropdown-menu">
                                    <il><p>Enable anonymous posting</p><div class="form-check"><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input></div></il>
                                </ul>
                                </div>
                                <a href="#" class="hidenbtn btn btn-secondary btn-lg disabled">000</a>

                                </div>
                                
                </div>
    </div>
    )




}
export default Newpost_page