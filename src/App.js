import React from "react";
import { useContext } from "react";
import "./styles.css";

const ThemeContext = React.createContext("light");

const Display = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme === "light" ? "black" : "papayawhip",
        color: theme === "light" ? "white" : "palevioletred",
      }}
    >
      {"The theme here is " + theme}

    </div>
  );
};

export default Display;
