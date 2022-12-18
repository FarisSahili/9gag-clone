import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import RecommendedPosts from './components/Pages/Shuffle';
import GetApp from './components/Pages/SpecialPgaes/GetApp';
import HomePage from './components/Pages/Home/HomePage';
import AddNewPost from './components/Pages/SpecialPgaes/AddNewPostFile/AddNewPost';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
     <BrowserRouter>
       <Routes>
       <Route path="/Home" index element={<HomePage/>} />
       <Route path="/shuffle" element={<RecommendedPosts/>} />
       <Route path="/getapp" element={<GetApp/>} />
       <Route path="/addnewpost" element={<AddNewPost/>} />
       </Routes>
   </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
