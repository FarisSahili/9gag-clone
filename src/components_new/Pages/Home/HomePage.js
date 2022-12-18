import PostList from "../../Posts/PostList";
import Navbar from "../../UI/Navbar";
import Interests from "./Interests";

const HomePage = (props) => {
    return(
        <>
            <Navbar/>
            <Interests/>
            <PostList/>
        </>
    );
}

export default HomePage;