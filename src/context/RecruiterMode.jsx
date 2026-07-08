import React, { createContext, useContext, useState } from "react";

const RecruiterModeContext = createContext();

export const RecruiterModeProvider = ({ children }) => {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  const toggle = () => setIsRecruiterMode((prev) => !prev);

  return (
    <RecruiterModeContext.Provider value={{ isRecruiterMode, toggle }}>
      {children}
    </RecruiterModeContext.Provider>
  );
};

export const useRecruiterMode = () => useContext(RecruiterModeContext);
