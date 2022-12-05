import './CommentPage.css';
import elonMusk from './comments-page-photo.png';

const CommentPage = () => {
    return(
    <div  className ="page-commints" >
                        <div  className ="comments-and-button-wr" >
                        <div className ="comments-num-wr">
                            <p class="text-start">877 Comments</p>
                        </div>
                        <div className='button-wr'>
                            <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end">
                            <li className="page-item"><a className="page-link" href="#">Hot</a></li>
                            <li className="page-item"><a className="page-link" href="#">Fresh</a></li>
                            </ul>
                            </nav>
                        </div>
                        </div>  
                        <div className="card">
                                <div className="card-body">
                                Log in or sign up to leave a comment
                                    <button type="button" className="btn btn-light">Log in</button>
                                    <button type="button" className="btn btn-primary">Sign up</button>
                                </div>                             
                        </div>           
                <div className='comments-and-accounts'>
                <img src={elonMusk} className="elon-musk-photo"/>
                <a className='title-account' herf="#">Elon Musk</a>
                <h5 className='the-comment'>The only referee who made it to a cover of PES.</h5>
                </div>
    </div>
     
       
    );
}
export default CommentPage;