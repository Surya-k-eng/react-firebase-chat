import React, { useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/AddUser";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatList">
      ChatList
      <div className="search">
        <div className="searchbar">
          <img src="./search.png" alt="search" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt="add"
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>

      {/* Chat items */}
      <div className="items">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>HI</p>
        </div>
      </div>

      <div className="items">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
          <span>John Smith</span>
          <p>HI</p>
        </div>
      </div>

      <div className="items">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
          <span>Mary Johnson</span>
          <p>Nigga</p>
        </div>
      </div>
      {addMode &&  <AddUser/>}
    </div>
  );
};

export default ChatList;
