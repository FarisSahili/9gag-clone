import PostList from "../../Posts/PostList";
import SocialMediaSignup from "../../SignupLoginModal/SocialMediaSignup";
import ModalTags from "../../UI/CustomizeTags/CustomTags";
import Navbar from "../../UI/Navbar";
import Sidebar from "../../UI/Sidebar/Sidebar";
import Interests from "./Interests";
import Dark from "../../../dark";
import RecommendedPosts from "../Shuffle";
import TagButton from "../../Tags/Tag";
import Logincard from "../../Posts/LoginPost";

const HomePage = (props) => {
    return (
        <>
      
            <Navbar/>
            <Sidebar/>
            <aside>
            <SocialMediaSignup/> 
          
            <ModalTags/> 
            </aside>
            <Interests/>
            <TagButton/>
         
            <PostList/>  
            
          
      
        </>
    );
}

export default HomePage;