import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  
  const transition = (newMode, replace = false) => {
    setMode(newMode);
    replace === true ? setHistory(prev => [...prev.slice(0, prev.length - 1), newMode]) : setHistory(prev => [...prev, newMode]);
  }

  const back = () => {
    if (history.length <= 1) {
      return
    } else {
      setHistory(prev => [...prev.slice(0, prev.length - 1)])
    }
  }

  

  return { mode: history[history.length -1] , transition, back };
}