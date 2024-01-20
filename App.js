import React from "react";
import ReactDOM from "react-dom/client";

// React.createElememt => Object (creates) => HTMLElement (render)

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Namaste React 🚀"
);

console.log(heading);

// JSX => Javascript Syntax

const jsxHeading = <h1 id="heading">Namate React</h1>;

console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(jsxHeading);
