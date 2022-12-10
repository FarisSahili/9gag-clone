
import './App.css';
import Navbar from './components/navbarhome/Navbar';
import PostCard from './components/PostCard/PostCard';
import Posts from './components/Posts';
import Side from './components/sidebar/Side';
function App() 
{
return(
<section>
<Navbar/>
<Side/>
<Posts/> 
</section>
);
}
export default App;
