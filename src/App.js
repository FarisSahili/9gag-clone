import './App.css';
import Post from './components/Post';


import Navbar from './components/Navbar';

import Scroll from './components/Scroll';
import Logincard from './components/Logincard';

function App() {
  return (

<>
 <Navbar />
 <Scroll /> 
    <Post/>
<Logincard />
    <Post/>
</>
  );
}

export default App;
