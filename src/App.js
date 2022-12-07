import './App.css';
import Navbar from './components/Navbar';
import PostCard from './components/PostCard/PostCard';
import LoginCard from './components/loginCard/LoginCard';
import Scroll from './components/Scroll';
import SideBar from './components/sidebar/Sidebar'
import { Modal } from 'react-bootstrap';
function App() 
{
  return (
  // <section>
  // </section>
  <>
  <Navbar/>
<Scroll/>
<TypeButton/>
<PostCard/>
<Modal/>
  </>
 
  );
}
export default App;

