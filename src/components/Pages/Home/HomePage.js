import SocialMediaSignup from "../../SignupLoginModal/SocialMediaSignup";
import ModalTags from "../../UI/CustomizeTags/CustomTags";
import Navbar from "../../UI/Navbar";
import Sidebar from "../../UI/Sidebar/Sidebar";
import Logincard from "../../Posts/LoginPost";
import Content from "./Content";
const HomePage = (props) => {
    return (
        <>
            <Navbar/>
            <Sidebar/>
            <aside>
            <SocialMediaSignup/> 
            <ModalTags/> 
            </aside>
            <Content/>
            <Logincard/>
        </>
    );
}

export default HomePage;