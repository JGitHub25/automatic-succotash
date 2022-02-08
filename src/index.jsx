// index.jsx
import React from "react";
import ReactDOM from "react-dom";
import { Component, Component2, Home } from "./Home";
function App() {
  return (
    <>
      <Home />
      <Component2 />
      <Component />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
