import PostList from "../../Posts/PostList";
import SocialMediaSignup from "../../SignupLoginModal/SocialMediaSignup";
import ModalTags from "../../UI/CustomizeTags/CustomTags";
import Navbar from "../../UI/Navbar";
import Sidebar from "../../UI/Sidebar/Sidebar";
import Interests from "./Interests";
import Dark from "../../../dark";
import RecommendedPosts from "../Shuffle";
import TagButton from "../../Tags/Tag";
import Clear from "../../UI/Sidebar/Clear";

const HomePage = (props) => {
    return (
        <>
        
            <Navbar/>
<<<<<<< HEAD
=======
            <ModalTags/>
            <Sidebar/> 
>>>>>>> 1c51923e651aae10fcf3ce82d54398fbf3a709d3
            <SocialMediaSignup/> 
            <Interests/>
            <ModalTags/> 
            <Sidebar/>
           
            <TagButton/>
            <PostList/>  
          
      
        </>
    );
}

export default HomePage;