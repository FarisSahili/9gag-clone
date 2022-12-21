import PostList from "../../Posts/PostList";
import SocialMediaSignup from "../../SignupLoginModal/SocialMediaSignup";
import Navbar from "../../UI/Navbar";
import Sidebar from "../../UI/Sidebar/Sidebar";
import SinglePostPage from "../SinglePostPage";
import Interests from "./Interests";
import Dark from "../../../dark";

const HomePage = (props) => {
    return(
        <>
            <Navbar/>
            <Sidebar/>
            <SocialMediaSignup/>
            <Interests/>
            <PostList/> 
        </>
    );
}

export default HomePage;