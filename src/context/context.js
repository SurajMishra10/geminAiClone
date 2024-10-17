import { createContext, useState } from "react";
import run from "../config/gemin";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]); // Renamed to prevPrompts
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false); // Renamed to setLoading
  const [resultData, setResultData] = useState("");

  const deleyPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = ()=>{
    setLoading(false)
    setShowResult(false)

  }

  const onSent = async (prompt) => {
    try {
      setResultData("");
      setLoading(true);
      setShowResult(true);
      let response;
      if (prompt !== undefined) {
        response = await run(prompt);
        setRecentPrompt(prompt);
      } else {
        setPrevPrompts((prev) => [...prev, input]);
        setRecentPrompt(input);
        response = await run(input);
      }

      let responseArray = response.split("**"); // Split by '**' for bold text
      let newResponse = ""; // Initialize newResponse as an empty string

      for (let i = 0; i < responseArray.length; i++) {
        if (i % 2 === 1) {
          // If the index is odd, wrap the text in <b></b> tags for bold
          newResponse += "<b>" + responseArray[i] + "</b>";
        } else {
          // If the index is even, just append the text
          newResponse += responseArray[i];
        }
      }

      // Replace single '*' with a new line
      let newResponse2 = newResponse.replace(/\*(?=[^\*])/g, "<br />"); // Use <br /> for new lines
      let newResponseArray = newResponse2.split(" ");

      for (let i = 0; i < newResponseArray.length; i++) {
        const nextWord = newResponseArray[i];
        deleyPara(i, nextWord + " ");
      }

      setLoading(false);
      setInput("");
    } catch (error) {
      console.error(error);
      // Handle error and provide a better user experience
    }
  };
  

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
