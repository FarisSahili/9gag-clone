import PostList from "../../Posts/PostList";
import ModalTags from "../../UI/CustomizeTags/CustomTags";
import Navbar from "../../UI/Navbar";
import Sidebar from "../../UI/Sidebar/Sidebar";
import Interests from "./Interests";


const HomePage = (props) => {
    return(
        <>
        
            <Navbar/>
            <ModalTags/>
            
            <Sidebar/>
            <Interests/> 
            <PostList/>
           
        </>
    );
}

export default HomePage;