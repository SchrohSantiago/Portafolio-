import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Portafolio } from "./Portafolio";
import { RecruiterModeProvider } from "./context/RecruiterMode";
import { ThemeProvider } from "./context/ThemeContext";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RecruiterModeProvider>
        <Portafolio />
      </RecruiterModeProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
