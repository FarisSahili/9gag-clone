//import
import './SidebarStyle.css' ;
import React, { useState } from "react";


//function
const Star = ({ isSelected, onClick }) => {
  return (
    <div className="star">
      <button onClick={() => onClick()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          fill={isSelected ? "gold" : "#919191"}
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      </button>
    </div>
  )
};



const Side= () =>{



  const filterArrayFromFavoriteP = (selectedIndex) => {
    setPopular((current) =>current.filter((_item, index) => index !== selectedIndex)
    );
  };


  const filterArrayFromFavoriteE = (selectedIndex) => {
    setExplorePopular((current) =>current.filter((_item, index) => index !== selectedIndex)
    );
  };


  const filterArrayFromFavoriteA = (selectedIndex) => {
    setAllSection((current) =>current.filter((_item, index) => index !== selectedIndex)
    );
  };

  const deleteItemFromFavorite = (selectedIndex) => {
    setFavorites((current) =>current.filter((_item, index) => index !== selectedIndex)
    );
  };


  const [favorites, setFavorites] = useState([]);


  const[ExplorePopular,setExplorePopular] = useState([

  "world cup",
  "brazil",
  "football",
  "fifa",
  "jaban",
  "sport",
  "qatar 2022",
  "cat",
  ]);
  


  const[Popular,setPopular] = useState([
  
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
  
  
  
  const[AllSection,setAllSection] = useState([
  
    
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
   <button type  ="button"  className="btn-card btn btn-primary"data-toggle="modal" data-target="#myModal" onClick={"#myModal"} >Sign up</button>
</div>
</div>

<div className="section">
        
<ul className="sidebar-menu-9gag">
<h3 className="h3Sections">9GAG</h3> 

<li><a ><img className="icons-sidebar-9gag-sction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAZZJREFUWEftl+ExxUAUhb9XASVQASpABagAFaACdEAFdIAKHhWgAnRABcwxu+Ylk917d5M3kzG5/5Lc7H57cnKymTGymo2Mh38JtAncBaUPgJc+qvdVaA14BlYDxCewBbzXQvUBEsQckEKLJYV2AcEVVy1QCiYCVEPVAt0De8by1SNPFVUN0C1w6JxFvcfO3t+2UqAr4KRkAuAaOPXeUwJ0BNx4B271SSWpZZYXqA9MhHBBeYD0WitrhihlVDY4LSDBKGti8PWFUjYpo5JQOaB2CveFifdn0zwFZAVfHPwVuAAew4mdcLxh0CeDswvIC/MA7Ccm9gRnJ1QXkGewL0CPNPW90qL0gV0pTfM2kDf4cupEBs/C1NsIzjbQt9O5l8EruXZ569w53h9HG8g7yJAKNRZn5VAKUN5ZNzz0lsivrLq1QHoSue1Fzj9LAxKUXl2p+BS8sh2O27vIRSstFcjp2UbbBGSpNik0KWQpYF0fnYfOAH3EO8tKagWc/hasDZelSrz+AWgTl/z3t4C8Ew3WNwFZUv4ATUFZJd0EnoUAAAAASUVORK5CYII="/></a> <a className='label-section-9gag' href="#">Home</a></li>
<li><a><img className="icons-sidebar-9gag-sction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAS1JREFUWEft1dENAiEQBNC5CrQTLUE7sBRbsANLsQMtwVK0AzOGNWQFhgNz8QN/1ONu8xgWbsKffaY/82CA1IqMhEZCiQQOADYimZONL9FDawA3gfo4lgBx8gq1OEihfgLahnW/q50Txnn/NaTlH+kGWXEW3gNQqBKGNbpAvvhDoPz9TwDceeeo0ZtBuZnmUCnMLiQaN3oTKFWcca9CQ3hUCWM9ZCjrx+q3fa44C/OM8ShejxuYy2TJ+IYmipN5f2rOITVTjnuUbXN+lzBfG1SBFMYKepRdn4VRCdVicqjZmBJoLsaj+D/XM8VzNLVkrZgYxd/qsEzCPKgXU/kWyd/mQfFh1dQDvaLUkhF1AXBsjb0HpbZ9T+2mZwdIxTYSGgmpBNT46KGRkEpAjb8Ay/9KJZw4IWIAAAAASUVORK5CYII="/></a><a className='label-section-9gag' href="#">Trending</a></li>
<li><a><img className="icons-sidebar-9gag-sction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAnpJREFUWEftmNExRkEMhY8KUAEqQAWoABWgAlSAClABKkAHVIAK0AEVMJ/ZNZF/92728mCMvNzhZjfnnpxNsv+UfplN/TI8+jOAliRtSeI5k56QfS/pJT0v0rMrCb0MHUraTSAigQB3Iuko4oxPFNCGpGNJ89GNnd+TpH1JV631EUCwcuA2ek6b30giGKnCSCGgVyXxEXNuHXsNstUCdJ60kvcFCJvy/4htJ38LjLU7tcVDgDwz15IIgC56DNEDYt0sgiX2n7AaIOi+NN6cGMB8xzzbmyVN1QChi0wzzACwZuhlJb28lYSuaoaoM1PEWPCOJUA2VWgGoQ6lyfpXU5ECkz6ATKe/J/xLgAieFyC+loB7AIGD1J8lQMSatSx5QLBxlxxgJ1J3egGxvZXEsq3oHhBVlUqMnUraC6h4DKBqHA8IQWaBFk9BAeAYQPYUcxA4GB/mAVFxF9O7L1QOMDUGkJUGMYlVBPRmAreqeHa1gDjWMBuxYiwfdAwgdEbjzTbYGoxfCNCYlBHDV+EWKJuyBzNPTWhojKgtMwxtEabCoh5z7K1ePFNrlVYSPvaWymKvCag1gxqq8uHCSLze1lHCSF2pNVnbOl79ONxqrnwJNaJ3BqoRSXN9NCBCzZXNLKU9taWVUTt+FHtldEBrHeMWkFJp6BrQ2MCPsHwdQu1NH2li3LBDXvcIW6stpBKgjLQRQ8BUcUBlGxyHI/2qdA0CGIxxktCCvQYx+uZrkJ+nWhNl10WRYubvWRGW8AE0Pe9HLoo2KGyxcR5xW4CoM3xI8cpTWhxJWWkdFR195B8b8gxFo8w/NnAycypbwD/fjwUUDtDr+A+oxdg7vKCZJSqiUPwAAAAASUVORK5CYII="/></a> <a className='label-section-9gag' href="#">Fresh</a></li>                      <li><a><img className="icons-sidebar-9gag-sction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAQRJREFUWEftl1ENwjAQQN8cgAKQgAQcEBzgAFAAOAAF4ABwAg6QgAPILUCWpt11zQYNuX1ubff6rndtCzJ7isx4+BugIXAERh7DO2CRaj7V0BpYBX56B/o5AQlL6kSTO9YZMiAxYIa0JDFDbRoSm3Og5wx6A6bApfo+tV40CdmjZnZLYJsT0OaVsR+mXxtSgWTTnATifQZkn2pah+pCpgLJQhsEYi4L8PRtoNjZtLWoVUMGpGWZGTJDQOwyKCuKW6ljO1va+4p1tYiZoWwMxW6uM2Af2ISvzhU7dkxvlsldfRw4fhwqAHIclXa+u720E4j3EzumF0g7S3f+PfXE2BmYAWlqnzuIayV08ErbAAAAAElFTkSuQmCC"/></a> <a className='label-section-9gag' href="#">Top</a></li>
</ul>
               



<h3 className="h3Sections">Favorites</h3> 

<ul className="sidebar-menu">
          {favorites.map((item, index) => {
            return (
              <div className="rowContainer">
                <div className="sidebarItem">{item}</div>
                <div className="btnsContainer">
                  <Star isSelected={true}  onClick={() => { deleteItemFromFavorite(index);  }} />
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
                  <div className="sidebarItem">{item}</div>
                  <div className="btnsContainer">
                    <Star
                      onClick={() => {
                        filterArrayFromFavoriteE(index);
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
        <div className="sidebarItem">{item}</div>
        <div className="btnsContainer">
          <Star
            onClick={() => {
              filterArrayFromFavoriteP(index);
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
        <div className="sidebarItem">{item}</div>
        <div className="btnsContainer">
          <Star
            onClick={() => {
              filterArrayFromFavoriteA(index);
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
