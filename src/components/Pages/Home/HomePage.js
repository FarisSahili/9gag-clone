import PostList from "../../Posts/PostList";
import SocialMediaSignup from "../../SignupLoginModal/SocialMediaSignup";
import ModalTags from "../../UI/CustomizeTags/CustomTags";
import Navbar from "../../UI/Navbar";
import Sidebar from "../../UI/Sidebar/Sidebar";
import SinglePostPage from "../SinglePostPage";
import Interests from "./Interests";
import Dark from "../../../dark";
import RecommendedPosts from "../Shuffle";

const HomePage = (props) => {
    return(
        <>
        
            <Navbar/>
            <Sidebar/>
            <Interests/>
        

      </>
    );
}

export default HomePage;