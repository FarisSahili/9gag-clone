//import
import './SidebarStyle.css' ;
import React, { useState } from "react";


//function



const Remove = ({ isSelected, onClick }) => {
  return (
    <div className="remove">
    <button  class="btn-remove" onClick={() => onClick()}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill={isSelected ? "gray"  : "gray"}
        className="bi bi-x"
        viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
    </button>
    </div>
  );
};


const Star = ({ isSelected, onClick }) => {
  return (
    <div className="star">
      <button  className ="star-btn" onClick={() => onClick()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill={isSelected ? "gold" : "#919191"}
          className="bi bi-star-fill"
          viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      </button>
    </div>
  )
};


const Side= () =>
{


  const filterArrayFromPopular = (selectedIndex) => 
  {
    setPopular((current) =>current.filter((_item, index) => index !== selectedIndex));
  };// For Popular section..


  const filterArrayFromExplorePopular = (selectedIndex) => 
  {
    setExplorePopular((current) =>current.filter((_item, index) => index !== selectedIndex));
   
  }; // For Explore Popular section..


  const filterArrayFromAllSection = (selectedIndex) =>
  {
    setAllSection((current) =>current.filter((_item, index) => index !== selectedIndex));
  }; // For Explore Popular section..



  const filterArrayFromRecent = (selectedIndex) => 
  {
    setRecent((current) =>current.filter((_item, index) => index !== selectedIndex));
  }; // For Explore recent section..


  

  const deleteItemFromFavorite = (selectedIndex) =>
   {
    setFavorites((current) =>current.filter((_item, index) => index !== selectedIndex));
  };// To delete items from fav



  const deleteItemFromRecent = (selectedIndex) =>
  {
   setRecent((current) =>current.filter((_item, index) => index !== selectedIndex));
 };// when i click at x button 






  const [favorites, setFavorites] = useState([]);
  const [recent, setRecent] = useState([]);



  const[ExplorePopular,setExplorePopular] = useState
  ([
  "world cup",
  "brazil",
  "football",
  "fifa",
  "jaban",
  "sport",
  "qatar 2022",
  "cat",
  ]);
  


  const[Popular,setPopular] = useState
  ([
    "Funny",
    "Latest News",
    "NSFW",
    "Girl",
    "WTF",
    "Cryptocurrency",
    "Anime & Mange",
    "Random",
    "Animals",
    "Anime Waifu",
    "Awesome",
    "Car",
    "Comic & Webtoon",
    "Cosplay",
    "Gaming",
    "GIF",
    "Girl Celebrity",
    "League of Legends",
    "Meme",
    "Relationshiop",
    "Savage",
    "Video",
  ])
  
  
  
  const[AllSection,setAllSection] = useState
  ([
  "Ask 9GAG",
  "Coronavirus",
  "Countryballs",
  "Cozy & Comfy",
  "Crappy Design",
  "Cyberpunk 2077",
  "Elden Ring",
  "Football",
  "Food & Drinks",
  "Formula 1",
  "Guy",
  "History",
  "LEGO",
  "Movie & TV",
  "Music",
  "Sport",
  "PC Master Race",
  "Pokemon",
  "Satifying",
  "Science & Tech",
  "Star Wars",
  "Superhero",
  "Teens Can Relate",
  "Warhammer",
  "Wholesome",
  "Anime Wallpaper",
  "Apex Legends",
  "Among Us",
  "Fashion & Beauty",
  "Fortnite",
  "Game of Thrones",
  "K-Pop",
  "NBA",
  "Harror",
  "Overwatch",
  "Resident Evil 8",
  "PUBG",
  "Wallpaper",
  "Dark Humor",
  ])




  return(
<div className='wr-side-bar'> 

<button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" 
data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" >Sidebar</button>

<div className="offcanvas offcanvas-start" data-bs-scroll="true" 
data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
<div class="offcanvas-header">
<div id="myModal" class="modal fade" role="dialog">
<div class="modal-dialog">

</div>
</div>
</div>




<div className="offcanvas-body">
<div className="card">
<div className="card-body">
   <p className="card-title">New to 9GAG?</p>
   <p className="card-text">Sign up now to see more content! </p>
   <button type="button"  className="btn-card btn btn-primary" data-toggle="modal" data-target="#myModal"  >Sign up</button>
</div>
</div>

<div className="section">
        
<ul className="sidebar-menu-9gag">
<h3 className="h3Sections">9GAG</h3> 

<li><a><img className="icons-sidebar-9gag-sction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAWFJREFUWEftl/ExBDEUh7+rgBJ0gA6owKgAFTgVoAMqoAM6UAIl0AEVnPmZi3GRfUnes+PmZt/fecm3v02+7M5Ys5qtGQ8bCbQHPCyTPgZeIqlHE9oBnoHtJcQ7sA+8eqEiQIJ4ApTQz1JCh4DgussLNASTANxQXqBH4Kjy+BqjPdVVHqB74KRxFY09axz7NawX6AY471kAuAXmrT09QKfAXevE2TilpLSq1QoUgUkQTVAtQDrWcs1flBxlirMGJBi5JokvCiU3yVGDUBZQbuEoTOo3bT4EVBNfFG5QnCWgsWFMm5eAWiwcTSj1/7J5DuQRXxRuRZw50CI6u7P/myMHugIunZN6264Brdt0l40BuAKQP0VNjBPQxiWk/VAq62CMuoeGErb0MQHpFU4J1cT6Lwl9GF+SFtAFoEu8WDUP6RNWfwu7hW7rtGhB/RhsZX1vwIH1718D8l6Y7r4JqBbdJ6C/TSVM8APAAAAAAElFTkSuQmCC"/></a><a className='label-section-9gag'>Home</a></li>
<li><a><img className="icons-sidebar-9gag-sction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAS1JREFUWEft1dENAiEQBNC5CrQTLUE7sBRbsANLsQMtwVK0AzOGNWQFhgNz8QN/1ONu8xgWbsKffaY/82CA1IqMhEZCiQQOADYimZONL9FDawA3gfo4lgBx8gq1OEihfgLahnW/q50Txnn/NaTlH+kGWXEW3gNQqBKGNbpAvvhDoPz9TwDceeeo0ZtBuZnmUCnMLiQaN3oTKFWcca9CQ3hUCWM9ZCjrx+q3fa44C/OM8ShejxuYy2TJ+IYmipN5f2rOITVTjnuUbXN+lzBfG1SBFMYKepRdn4VRCdVicqjZmBJoLsaj+D/XM8VzNLVkrZgYxd/qsEzCPKgXU/kWyd/mQfFh1dQDvaLUkhF1AXBsjb0HpbZ9T+2mZwdIxTYSGgmpBNT46KGRkEpAjb8Ay/9KJZw4IWIAAAAASUVORK5CYII="/></a><a className='label-section-9gag'>Trending</a></li>
<li><a><img className="icons-sidebar-9gag-sction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAnpJREFUWEftmNExRkEMhY8KUAEqQAWoABWgAlSAClABKkAHVIAK0AEVMJ/ZNZF/92728mCMvNzhZjfnnpxNsv+UfplN/TI8+jOAliRtSeI5k56QfS/pJT0v0rMrCb0MHUraTSAigQB3Iuko4oxPFNCGpGNJ89GNnd+TpH1JV631EUCwcuA2ek6b30giGKnCSCGgVyXxEXNuHXsNstUCdJ60kvcFCJvy/4htJ38LjLU7tcVDgDwz15IIgC56DNEDYt0sgiX2n7AaIOi+NN6cGMB8xzzbmyVN1QChi0wzzACwZuhlJb28lYSuaoaoM1PEWPCOJUA2VWgGoQ6lyfpXU5ECkz6ATKe/J/xLgAieFyC+loB7AIGD1J8lQMSatSx5QLBxlxxgJ1J3egGxvZXEsq3oHhBVlUqMnUraC6h4DKBqHA8IQWaBFk9BAeAYQPYUcxA4GB/mAVFxF9O7L1QOMDUGkJUGMYlVBPRmAreqeHa1gDjWMBuxYiwfdAwgdEbjzTbYGoxfCNCYlBHDV+EWKJuyBzNPTWhojKgtMwxtEabCoh5z7K1ePFNrlVYSPvaWymKvCag1gxqq8uHCSLze1lHCSF2pNVnbOl79ONxqrnwJNaJ3BqoRSXN9NCBCzZXNLKU9taWVUTt+FHtldEBrHeMWkFJp6BrQ2MCPsHwdQu1NH2li3LBDXvcIW6stpBKgjLQRQ8BUcUBlGxyHI/2qdA0CGIxxktCCvQYx+uZrkJ+nWhNl10WRYubvWRGW8AE0Pe9HLoo2KGyxcR5xW4CoM3xI8cpTWhxJWWkdFR195B8b8gxFo8w/NnAycypbwD/fjwUUDtDr+A+oxdg7vKCZJSqiUPwAAAAASUVORK5CYII="/></a> <a className='label-section-9gag'>Fresh</a></li>                      <li><a><img className="icons-sidebar-9gag-sction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAQRJREFUWEftl1ENwjAQQN8cgAKQgAQcEBzgAFAAOAAF4ABwAg6QgAPILUCWpt11zQYNuX1ubff6rndtCzJ7isx4+BugIXAERh7DO2CRaj7V0BpYBX56B/o5AQlL6kSTO9YZMiAxYIa0JDFDbRoSm3Og5wx6A6bApfo+tV40CdmjZnZLYJsT0OaVsR+mXxtSgWTTnATifQZkn2pah+pCpgLJQhsEYi4L8PRtoNjZtLWoVUMGpGWZGTJDQOwyKCuKW6ljO1va+4p1tYiZoWwMxW6uM2Af2ISvzhU7dkxvlsldfRw4fhwqAHIclXa+u720E4j3EzumF0g7S3f+PfXE2BmYAWlqnzuIayV08ErbAAAAAElFTkSuQmCC"/></a> <a className='label-section-9gag' href="#">Top</a></li>
</ul>
               



<h3 className="h3Sections">Favorites</h3> 

<ul className="sidebar-menu">
          {favorites.map((item, index) => {
            return (
              <div className="rowContainer">
                <div className="sidebarItem"><li>{item}</li></div>
                <div className="star-btn-container">
                  <Star isSelected={true}  onClick={() => {  

                       deleteItemFromFavorite(index);
                     

                    }} 
                     />
                </div>
              </div>
            
            );
          })}
            </ul>




  <div className="contanier"> <span className="spanSections">Recent</span><button type="button" className="btn btn-link"><a className="clear">Clear</a></button> </div>

<ul className="sidebar-menu">
          {recent.map((item, index) => {
            return (
              <div className="rowContainer">
                <div className="sidebarItem"><li>{item}</li></div>
                <div className="btnsContainer">

                <Remove
                    onClick={() => 
                    {
                      deleteItemFromRecent(index);
                    }}/>

                <Star isSelected={true} 
                  onClick={() => 
                  {
                    filterArrayFromRecent(index);
                    setFavorites((current) => [...current, item]);
                  }}/>
                </div>
              </div>
            
            );
          })}
         </ul>



<h3 className="h3Sections">Explore Popular Tags</h3> 

          <ul className="sidebar-menu">
            {ExplorePopular.map((item, index) => {
              return (
                <div className="rowContainer">
                  <div className="sidebarItem"><li
                    isSelected={() => {
                      filterArrayFromExplorePopular(index);
                      setRecent((current) => [...current, item]);
                    }}
                  >{item}</li></div>
                  <div className="starContainer">

                    <Star
                      onClick={() => {
                        filterArrayFromExplorePopular(index);
                        setFavorites((current) => [...current, item]);
                     
                      }}
                    />

                    </div>
                  
                </div>
              );
            })}
          </ul>





<h3 className="h3Sections">Popular </h3> 

<ul className="sidebar-menu">
  {Popular.map((item, index) => {
    return (
      <div className="rowContainer">
        <div className="sidebarItem"><li>{item}</li></div>
        <div className="starContainer">
          <Star
            onClick={() => {
              filterArrayFromPopular(index);
              setFavorites((current) => [...current, item]);
            }}
          />
        </div>
      </div>
    );
  })}
</ul>






<h3 className="h3Sections">All Sections</h3> 

<ul className="sidebar-menu">
  {AllSection.map((item, index) => {
    return (
      <div className="rowContainer">
        <div className="sidebarItem"><li>{item}</li></div>
        <div className="starContainer">
          <Star
            onClick={() => {
              filterArrayFromAllSection(index);
              setFavorites((current) => [...current, item]);
            }}
          />
        </div>
      </div>
    );
  })}
</ul>



              </div>
              </div>
              </div>
              </div>


  )
          }

//export

export default Side
