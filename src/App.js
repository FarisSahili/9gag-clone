
 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; 
//import CustomTags from '../src/components_new/UI/CustomizeTags/CustomTags.js'<CustomTags/>
import RecommendedPosts from './components_new/Pages/Shuffle';
import PostList from './components_new/Posts/PostList';

function App() 
{
  return (
   <BrowserRouter>
       <Routes>
        <Route path="/Pages/Shuffle" element={RecommendedPosts}/>

       </Routes>
   </BrowserRouter>
);
}

export default App;
