//import
import "./SidebarStyle.css";
import React, { useState } from "react";
import postData from "../../../data";
import PostCard from "../../Posts/PostCard";

//function
const Remove = ({ onClick }) => {
  return (
    <button className="btn-remove" onClick={() => onClick()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="remove"
        viewBox="-5 3 24 24"
      >
        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
      </svg>
    </button>
  );
};

const Star = ({ isSelected, onClick }) => {
  return (
    <div className="star">
      <button className="star-btn" onClick={() => onClick()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isSelected ? "gold" : "gainsboro"}
          className="bi bi-star-fill"
          viewBox="0 0 14 17"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      </button>
    </div>
  );
};

const Sidebar = () => {
  //  const [Posts, setPosts] = useState([postData]); // array of posts

  //  const [filteredPosts, setFilteredPosts] = useState([]); // array of filtered posts

  //  const handleTagClick = (item) =>
  // {
  //    const filtered = Posts.filter((Post) => Post.tags.includes(item)); // filter posts that include the clicked tag
  //   setFilteredPosts(filtered);
  // };

  const favoriteSection = () => {
    if (favorites.length > 0) {
      return (
        <ul className="sidebar-menu">
          <h3 className="h3Sections">favorites</h3>

          {favorites.map((item, index) => {
            return (
              <div className="rowContainer">
                <li
                 key={index}
                  className="li-filter"
                  onClick={() => {
                    setRecent((current) => [...current, item]);
                  }}
                >
                  <div className="sidebarItem">{item}</div>
                </li>
                <div className="star-btn-container">
                  <Star
                    isSelected={true}
                    onClick={() => {
                      deleteItemFromFavorite(index);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </ul>
      );
    }
  };

  const Clear = () => {
    document.getElementById("recent-menu").innerHTML = "";
    setRecent.length = 0;
  };

  const recentSection = () => {
    if (recent.length > 0) {
      return (
        <>
          <div className="contanier">
            <span className="spanSections">Recents</span>
            <button onClick={Clear} id="clear-btn">
              <a id="clear">Clear</a>
            </button>
          </div>
          <ul id="recent-menu">
            {recent.map((item, index) => {
              return (
                <li key={index} className="li-filter">
                  <div className="rowContainer">
                    <div className="sidebarItem">{item}</div>
                    <div className="btnsContainer">
                      <Remove
                        onClick={() => {
                          deleteItemFromRecent(index);
                        }}
                      />

                      <Star
                        isSelected={false}
                        onClick={() => {
                          setFavorites((current) => [...current, item]);
                          { favoriteSection(); }
                        }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      );
    }
  }; // To hide recent text when there is no filter inside it

  const deleteItemFromFavorite = (selectedIndex) => {
    setFavorites((current) =>
      current.filter((_item, index) => index !== selectedIndex)
    );
  }; // To delete items from fav

  const deleteItemFromRecent = (selectedIndex) => {
    setRecent((current) =>
      current.filter((_item, index) => index !== selectedIndex)
    );
  }; // when i click at x button

  const [favorites, setFavorites] = useState([]);
  const [recent, setRecent] = useState([]);

  const [ExplorePopular, setExplorePopular] = useState([
    "world cup",
    "brazil",
    "football",
    "fifa",
    "jaban",
    "sport",
    "qatar 2022",
    "cat",
  ]); //array for Explore Popular filters

  const [Popular, setPopular] = useState([
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
  ]); //array for Popular filters

  const [AllSection, setAllSection] = useState([
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
  ]); //array for all section filters

  return (
    <div className="wr-side-bar">
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog"></div>
        </div>

        <div className="offcanvas-body">
          <div className="card">
            <div className="card-body">
              <p className="card-title">New to 9GAG?</p>
              <p className="card-text">Sign up now to see more content! </p>
              <button type="button" className="btn-card btn btn-primary">
                Sign up
              </button>
            </div>
          </div>

          <div className="section">
            <ul className="sidebar-menu-9gag">
              <h3 className="h3Sections">9GAG</h3>

              <li className="label9gagSection">
                <a>
                  <img
                    className="icons-sidebar-9gag-sction"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAWFJREFUWEftl/ExBDEUh7+rgBJ0gA6owKgAFTgVoAMqoAM6UAIl0AEVnPmZi3GRfUnes+PmZt/fecm3v02+7M5Ys5qtGQ8bCbQHPCyTPgZeIqlHE9oBnoHtJcQ7sA+8eqEiQIJ4ApTQz1JCh4DgussLNASTANxQXqBH4Kjy+BqjPdVVHqB74KRxFY09axz7NawX6AY471kAuAXmrT09QKfAXevE2TilpLSq1QoUgUkQTVAtQDrWcs1flBxlirMGJBi5JokvCiU3yVGDUBZQbuEoTOo3bT4EVBNfFG5QnCWgsWFMm5eAWiwcTSj1/7J5DuQRXxRuRZw50CI6u7P/myMHugIunZN6264Brdt0l40BuAKQP0VNjBPQxiWk/VAq62CMuoeGErb0MQHpFU4J1cT6Lwl9GF+SFtAFoEu8WDUP6RNWfwu7hW7rtGhB/RhsZX1vwIH1718D8l6Y7r4JqBbdJ6C/TSVM8APAAAAAAElFTkSuQmCC"
                  />
                </a>
                <a className="label-section-9gag">Home</a>
              </li>
              <li className="label9gagSection">
                <a>
                  <img
                    className="icons-sidebar-9gag-sction"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAS1JREFUWEft1dENAiEQBNC5CrQTLUE7sBRbsANLsQMtwVK0AzOGNWQFhgNz8QN/1ONu8xgWbsKffaY/82CA1IqMhEZCiQQOADYimZONL9FDawA3gfo4lgBx8gq1OEihfgLahnW/q50Txnn/NaTlH+kGWXEW3gNQqBKGNbpAvvhDoPz9TwDceeeo0ZtBuZnmUCnMLiQaN3oTKFWcca9CQ3hUCWM9ZCjrx+q3fa44C/OM8ShejxuYy2TJ+IYmipN5f2rOITVTjnuUbXN+lzBfG1SBFMYKepRdn4VRCdVicqjZmBJoLsaj+D/XM8VzNLVkrZgYxd/qsEzCPKgXU/kWyd/mQfFh1dQDvaLUkhF1AXBsjb0HpbZ9T+2mZwdIxTYSGgmpBNT46KGRkEpAjb8Ay/9KJZw4IWIAAAAASUVORK5CYII="
                  />
                </a>
                <a className="label-section-9gag">Trending</a>
              </li>
              <li className="label9gagSection">
                <a>
                  <img
                    className="icons-sidebar-9gag-sction"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAnpJREFUWEftmNExRkEMhY8KUAEqQAWoABWgAlSAClABKkAHVIAK0AEVMJ/ZNZF/92728mCMvNzhZjfnnpxNsv+UfplN/TI8+jOAliRtSeI5k56QfS/pJT0v0rMrCb0MHUraTSAigQB3Iuko4oxPFNCGpGNJ89GNnd+TpH1JV631EUCwcuA2ek6b30giGKnCSCGgVyXxEXNuHXsNstUCdJ60kvcFCJvy/4htJ38LjLU7tcVDgDwz15IIgC56DNEDYt0sgiX2n7AaIOi+NN6cGMB8xzzbmyVN1QChi0wzzACwZuhlJb28lYSuaoaoM1PEWPCOJUA2VWgGoQ6lyfpXU5ECkz6ATKe/J/xLgAieFyC+loB7AIGD1J8lQMSatSx5QLBxlxxgJ1J3egGxvZXEsq3oHhBVlUqMnUraC6h4DKBqHA8IQWaBFk9BAeAYQPYUcxA4GB/mAVFxF9O7L1QOMDUGkJUGMYlVBPRmAreqeHa1gDjWMBuxYiwfdAwgdEbjzTbYGoxfCNCYlBHDV+EWKJuyBzNPTWhojKgtMwxtEabCoh5z7K1ePFNrlVYSPvaWymKvCag1gxqq8uHCSLze1lHCSF2pNVnbOl79ONxqrnwJNaJ3BqoRSXN9NCBCzZXNLKU9taWVUTt+FHtldEBrHeMWkFJp6BrQ2MCPsHwdQu1NH2li3LBDXvcIW6stpBKgjLQRQ8BUcUBlGxyHI/2qdA0CGIxxktCCvQYx+uZrkJ+nWhNl10WRYubvWRGW8AE0Pe9HLoo2KGyxcR5xW4CoM3xI8cpTWhxJWWkdFR195B8b8gxFo8w/NnAycypbwD/fjwUUDtDr+A+oxdg7vKCZJSqiUPwAAAAASUVORK5CYII="
                  />
                </a>{" "}
                <a className="label-section-9gag">Fresh</a>
              </li>
              <li className="label9gagSection">
                <a>
                  <img
                    className="icons-sidebar-9gag-sction"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAQRJREFUWEftl1ENwjAQQN8cgAKQgAQcEBzgAFAAOAAF4ABwAg6QgAPILUCWpt11zQYNuX1ubff6rndtCzJ7isx4+BugIXAERh7DO2CRaj7V0BpYBX56B/o5AQlL6kSTO9YZMiAxYIa0JDFDbRoSm3Og5wx6A6bApfo+tV40CdmjZnZLYJsT0OaVsR+mXxtSgWTTnATifQZkn2pah+pCpgLJQhsEYi4L8PRtoNjZtLWoVUMGpGWZGTJDQOwyKCuKW6ljO1va+4p1tYiZoWwMxW6uM2Af2ISvzhU7dkxvlsldfRw4fhwqAHIclXa+u720E4j3EzumF0g7S3f+PfXE2BmYAWlqnzuIayV08ErbAAAAAElFTkSuQmCC"
                  />
                </a>{" "}
                <a className="label-section-9gag" href="#">
                  Top
                </a>
              </li>
            </ul>

            {favoriteSection()}


            {recentSection()}

            <h3 className="h3Sections">Explore Popular Tags</h3>
            <ul className="sidebar-menu">
              {ExplorePopular.map((item ,index) => {
                return (
                  <div className="filtersSections">
                    <li
                      key={index}
                      className="li-filter"
                      onClick={() => {
                        // {handleTagClick()};
                        // {filteredPosts.map((index) => (
                        //   <PostCard key={id}
                        //    op_user={op_user}
                        //    op_user_avatar={op_user_avatar}
                        //    title={title}
                        //    content={content}
                        //    post_date={post_date}
                        //    tags={tags}
                        //    up_votes={up_votes}
                        //    down_votes={down_votes}
                        //    comment={comment}
                        //   />
                        // ))}

                        setRecent((current) => [...current, item]);
                        { recentSection();}
                      }}
                    >
                      <div className="sidebarItem">{item}</div>
                    </li>
                    <div className="starContainer">
                      <Star
                        onClick={() => {
                          setFavorites((current) => [...current, item]);
                          {
                            favoriteSection();
                          }
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
                  <div className="filtersSections">
                    <li
                      key={index}
                      className="li-filter"
                      onClick={() => {
                        setRecent((current) => [...current, item]);
                        {
                          recentSection();
                        }
                      }}
                    >
                      <div className="sidebarItem">{item}</div>
                    </li>
                    <div className="starContainer">
                      <Star
                        onClick={() => {
                          setFavorites((current) => [...current, item]);
                          {
                            favoriteSection();
                          }
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
                  <div className="filtersSections">
                    <li
                      key={index}
                      className="li-filter"
                      onClick={() => {
                        setRecent((current) => [...current, item]);
                        {
                          recentSection();
                        }
                      }}
                    >
                      <div className="sidebarItem">{item}</div>
                    </li>
                    <div className="starContainer">
                      <Star
                        onClick={() => {
                          setFavorites((current) => [...current, item]);
                          {
                            favoriteSection();
                          }
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
  );
};

//export

export default Sidebar;
