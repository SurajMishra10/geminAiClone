import { createContext, useState } from "react";
import run from "../config/gemin";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input,setInput] = useState("");
  const [recentPrompt,setRecentPrompt] = useState("");
  const [prevPrompt,setprevPrompt] = useState([]);
  const [showResult,setShowresult] = useState(false);
  const [loading,setLoadig] = useState(false);
  const [resulData,setResultData] = useState("");

  const onSent = async (prompt) => {
    setResultData("");
    setLoadig(true);
    setShowresult(true);
    const response = await run(input);
    setResultData(response);
    setLoadig(false);
    setInput("");
  };
  

  const contextValue = {
    prevPrompt,
    setprevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resulData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
