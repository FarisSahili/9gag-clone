import PostList from "../../Posts/PostList";
import Interests from "./Interests";
import TagButton from "../../Tags/Tag";

import homegag from './homegag.png'
import './Content.css'
const Content = (props) => {
    return (
        <>
            <img src={homegag} className="gag" alt="Responsive image"/>
            <Interests/>
            <TagButton/>
            <PostList/>  
        </>
    );
}

export default Content;