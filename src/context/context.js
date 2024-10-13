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

  const onSent = async (prompt) => {
    try {
      setResultData("");
      setLoading(true);
      setShowResult(true);
      const response = await run(input);
      setResultData(response);
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
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
