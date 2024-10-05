import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  return (
    <div className="sidebar">
      <div className="top">
        <i onClick={ ()=>setExtended(prev=>!prev)} className="fa-solid fa-bars menu"></i>

        <div className="new-chat">
          <i className="fa-solid fa-plus"></i>
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? 
          <div className="recent">
            <p className="recent-title">Recent</p>

            <div className="recent-entry">
              <i className="fa-regular fa-message"></i>
              <p>What is react...</p>
            </div>
          </div>
         : null}
      </div>

      <div className="buttom">
        <div className="buttum-item recent-entry">
          <i className="fa-regular fa-circle-question"></i>
         {extended ? <p>Help</p>: null} 
        </div>
        <div className="buttum-item recent-entry">
          <i className="fa-solid fa-clock-rotate-left"></i>
         {extended ? <p>Activity</p>:null} 
        </div>
        <div className="buttum-item recent-entry">
          <i className="fa-solid fa-gear"></i>
          {extended ? <p>Settings</p> : null }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
