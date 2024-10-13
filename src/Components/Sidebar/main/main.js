import React, { useContext } from "react";
import "./main.css";
import userIcon from "./user.icon.webp";
import geminiIcon from "./Gemini.icon.jpeg";
import { Context } from "../../../context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={userIcon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, User.</span>
              </p>
              <p>How can i help you today ?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  suggest beautifull places to see on an upcomming road trip
                </p>
                <i className="fa-regular fa-compass"></i>
              </div>

              <div className="card">
                <p>Briefly summarize this concept: urben planning </p>
                <i className="fa-regular fa-lightbulb"></i>
              </div>

              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <i className="fa-regular fa-message"></i>
              </div>

              <div className="card">
                <p>Improve the readability of following code</p>
                <i className="fa-solid fa-code"></i>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={userIcon} alt="" />
              <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
              <img src={geminiIcon} alt="" />
              <p >{resultData}</p>
            </div>
          </div>
        )}

        <div className="main-buttom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <i className="fa-regular fa-image"></i>
              <i className="fa-solid fa-microphone"></i>
              <i onClick={() => onSent()} class="fa-regular fa-paper-plane"></i>
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};
export default Main;
