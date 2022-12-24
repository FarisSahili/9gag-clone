//import
import Navbar from "../Navbar";
import Sidebar from "./Sidebar";
import "./SidebarStyle.css";
import React, { useState } from "react";
import PostCard from "../../Posts/PostCard";
import filteredPosts from "./Sidebar";
import PostList from "../../Posts/PostList";

//function

const SidePage = (props) => {
  const [tagButtons, setTagButtons] = useState([
    "funny",
    "awesome",
    "random",
    "wtf",
    "wholesome",
    "animals",
    "lastest news",
    "world cup",
    "meme",
    "movie tv",
  ]);


  return (
    <>
      <>
        <Navbar />
        <Sidebar />
      </>

      <div className="content">
        <div className="containerL">
          <div className="sectionsPage">
            <div className="firstSection">
              <div className="profile-header">
                <h1 className="h1Post">messi</h1>
                <button className="btn-tag " href="#">
                  <div>
                    <a>
                      <img
                        className="pin-icon"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAXdJREFUWEft1+1NwzAQBuD3JoAN6AaUCSgblAmYgQlgg7ICEzACsEE3ADaACa56USKlwT6fG1+oBP7TH4nqR/dhXwRHtuTIPPibIFU9BXDTZeNRRD5zmQmPkKouATwDIIrrHcC1iGxTqFBQAtMbGKGrFCoMZGBMVCSIKXoBcG50MtN3MaypMBARXTGXULci8tCjm4K6NG26ov3uJAcqBjSqGXYQi7aE+gCwbJ6yTAGXUF8AVuNOm5yyQjflUIsUhimeBHK0NvdIoRbND0Ynpm+ePZR1oR8UoUpMv/+riKxK00U16EBMsoAn32XRmKqingPjBs2FcYHmxBRBc2NM0G9gSiDOKmelc2Pw3N3a1QejqvKueZsbk42Qqq4BPDlBTSJjDmiqeg/gzgFqirEixLHzsgBqjrFAnPRODFAIJglyFDTHznVunnGk2Xzlx20/KmhGgrMMU8jfrYjwOAhbKRBnFn5ThW8+efwIC8vgj6sHtGjUP6gU4R0td8YlahIbSgAAAABJRU5ErkJggg=="
                      />
                    </a>
                  </div>
                  Use Tag
                </button>
              </div>

              <div className="tab-bar">
                <ul className="menu">
                  <li>
                    <a className="selected" href="#">
                      Hot
                    </a>
                  </li>
                  <li>
                    <a className="selected" href="#">
                      Fresh
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="secondtSection">
              {tagButtons.map((item, index) => {
                return (
                  <button className="Tag-Button-sidebar" key={index}>
                    <b className="sidebarItemButton">{item}</b>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="postPartL">
        <PostList />
      </div>


    </>
  );
};

//export
export default SidePage;
