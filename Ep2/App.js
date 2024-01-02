import React from "react";
import ReactDOM from "react-dom/client";
// const myHeading = React.createElement('h1', { id: "myHeading" }, "Hello from React!"); // document.createElement('h1'),
// const root = ReactDOM.createRoot(document.querySelector('.root'));
// root.render(myHeading);

const myHeading = React.createElement(
  "div",
  { id: "parentDiv" },
  React.createElement(
    "div",
    { id: "childDiv" },
    React.createElement("h1", {}, "I am h3 Tag")
  )
);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(myHeading);
