import React from "react";

const Header = () => {
  return (
    <header style={headerStyles}>
      <h1>Pomodoro Timer</h1>
      <div
        style={{
          display: "flex",
          flexBasis: "20%",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <p>About / Settings</p>
      </div>
    </header>
  );
};

const headerStyles = {
  display: "flex",
  justifyContent: "space-between",
  background: "gray",
  padding: "10px 20px"
};

export default Header;
