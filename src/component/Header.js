import React from "react";
import Emojis from "./Emojis";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <h1>Emoji Search</h1>
        <Emojis />
      </div>
    </>
  );
};

export default Header;
