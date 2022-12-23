import PostList from "../../Posts/PostList";
import SocialMediaSignup from "../../SignupLoginModal/SocialMediaSignup";
import ModalTags from "../../UI/CustomizeTags/CustomTags";
import Navbar from "../../UI/Navbar";
import Sidebar from "../../UI/Sidebar/Sidebar";
import Interests from "./Interests";
import Dark from "../../../dark";
import RecommendedPosts from "../Shuffle";
import TagButton from "../../Tags/Tag";

const HomePage = (props) => {
    return (
        <>
        
            <Navbar/>
            <Sidebar/> 
            <ModalTags/>
            <Interests/>
            <PostList/>  
           
        
        </>
    );
}

export default HomePage;