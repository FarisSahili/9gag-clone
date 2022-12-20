import PostList from "../../Posts/PostList";
import SocialMediaSignup from "../../SignupLoginModal/SocialMediaSignup";
import Navbar from "../../UI/Navbar";
import Sidebar from "../../UI/Sidebar/Sidebar";
import Interests from "./Interests";


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