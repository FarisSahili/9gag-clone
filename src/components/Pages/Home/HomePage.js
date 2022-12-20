import PostList from "../../Posts/PostList";
import Navbar from "../../UI/Navbar";
import Sidebar from "../../UI/Sidebar/Sidebar";
import Interests from "./Interests";
import Dark from "../../../dark";

const HomePage = (props) => {
    return(
        <>
            <Navbar/>
            <Sidebar/>
            <Interests/>
            <PostList/>
        </>
    );
}

export default HomePage;