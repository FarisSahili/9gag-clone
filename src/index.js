import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecommendedPosts from './components/Pages/Shuffle';
import GetApp from './components/Pages/SpecialPgaes/GetApp';
import HomePage from './components/Pages/Home/HomePage';
import AddNewPost from './components/Pages/SpecialPgaes/AddNewPostFile/AddNewPost';
<<<<<<< HEAD
import ModalTags from './components/UI/CustomizeTags/CustomTags';
 
=======
import SocialMediaSignup from './components/SignupLoginModal/SocialMediaSignup';
>>>>>>> 4a06d21cbfa13e8f1af568e77792631589f17063
import SinglePostPage from './components/Pages/SinglePostPage';
import PostComments from './components/Posts/Comments/PostComments';


<<<<<<< HEAD


=======
//import handleShuffle from './components/Pages/Shuffle';
// import ModalTags from './components/UI/CustomizeTags/CustomTags';
>>>>>>> 4a06d21cbfa13e8f1af568e77792631589f17063
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
<<<<<<< HEAD
     <BrowserRouter>
       <Routes>
       <Route path="/" element={<HomePage/>}  />
       <Route path="/home" element={<HomePage/>}  />
       <Route path="/shuffle" element={<RecommendedPosts/>} />
       <Route path="/getapp" element={<GetApp/>} />
       <Route path="/addnewpost" element={<AddNewPost/>} />
       <Route path="/" element={<ModalTags/>} />
       </Routes>
   </BrowserRouter>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shuffle" element={<RecommendedPosts />} />
        <Route path="/getapp" element={<GetApp />} />
        <Route path="/addnewpost" element={<AddNewPost />} />
        <Route path="/comment" element={<SinglePostPage/>} /> 
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
>>>>>>> 4a06d21cbfa13e8f1af568e77792631589f17063
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
