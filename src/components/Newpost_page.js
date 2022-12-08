import ph from './ph.png';
import './Newpost_page.css';
import Setting from './Setting.ico';
import Graphup from './Graphup.ico';

const Newpost_page=()=>
{
    console.log()
    return(
    <div>

            <div className='creat_post'><h4>Create Post</h4></div>
            
            {/*<div class="dropdown accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                9GAG Rules
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <ul class="rules_menu accordion-body">
                <ol>
                        <li className='rules'>No pornography</li>
                        <li className='rules'>No violence or gory contents</li>
                        <li className='rules'>No hate speech and bullying</li>
                        <li className='rules'>No spamming and manipulation</li>
                        <li className='rules'>No deceptive content</li>
                        <li className='rules'>No illegal activities</li>
                        <li className='rules'>No impersonation</li>
                        <li className='rules'>No copyright infringement</li>

                        </ol>
                </ul>
                </div>
    </div>*/}
            
            <div className="dropdown">
                    <p className="btn_rules btn" data-bs-toggle="dropdown"><p className='g99'>9GAG Rules</p>
                    </p>
                    <ul className="rules_menu dropdown-menu">
                        <ol>
                        <li className='rules'>No pornography</li>
                        <li className='rules'>No violence or gory contents</li>
                        <li className='rules'>No hate speech and bullying</li>
                        <li className='rules'>No spamming and manipulation</li>
                        <li className='rules'>No deceptive content</li>
                        <li className='rules'>No illegal activities</li>
                        <li className='rules'>No impersonation</li>
                        <li className='rules'>No copyright infringement</li>

                        </ol>
    </ul>
                    
                    <div className="container" >
            
                        <input  placeholder="Titel" className="titel form-control" maxlength="15" required></input>
            

                            <img src={ph} className="choose_file"/>
                            <input  placeholder="Add at least 1 tag" className="add form-control" data-bs-toggle="collapse" href="#collapseExample"></input>
                            <div className="collapse" id="collapseExample">
                            <div className="card-body">
                                <p className='tagestitl'>Add tags to categorize posts</p>
                                <button type="button" className="tages"><span><img className='graphup' src={Graphup} alt='Graph icon'/></span>
                                world cup <span>+</span>
                                </button>
                                <button type="button" className="tages"><span><img className='graphup' src={Graphup} alt='Graph icon'/></span>
                                deutschland<span>+</span>
                                </button>
                                <button type="button" class="tages"><span><img className='graphup' src={Graphup} alt='Graph icon'/></span>
                                9gag den deutschen <span>+</span>
                                </button>
                                <button type="button" className="tages"><span><img className='graphup' src={Graphup} alt='Graph icon'/></span>
                                japan <span>+</span>
                                </button>
                                <button type="button" className="tages"><span><img className='graphup' src={Graphup} alt='Graph icon'/></span>
                                germany <span>+</span>
                                </button>
                                <button type="button" className="tages"><span><img className='graphup' src={Graphup} alt='Graph icon'/></span>
                                meme <span>+</span>
                                </button>
                            </div>
                            </div>

                            <div className="btn-group dropup">
                                <button type="button" className="add_list toggle-button" data-bs-toggle="dropdown">
                                    <img className='setting' src={Setting} alt='setting icon'/>
                                </button>
                                <ul className="dd dropdown-menu">
                                <div className="mb-3 form-check">
                                <input type="checkbox" className="settingpt form-check-input" id="exampleCheck1"></input>
                                <label className="settingtext form-check-label" for="exampleCheck1">Enable anonymous posting</label>
                                </div>
                                </ul>
                                </div>
                                <button type="button" className="hidenbtn btn btn-primary" disabled>Post</button>
                                </div>
                                
                </div>
    </div>
    
    )




}
export default Newpost_page