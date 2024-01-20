import React from "react";
import ReactDOM from "react-dom/client";

// React.createElememt => React Element (JS Object creates) => HTMLElement (render)

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Namaste React 🚀"
);

console.log(heading);

// JSX => Javascript Syntax

// JSX (transpiled before it reaches the JS Engine) - PARCEL (has) - Babel
// Babel job is to transpile the code so that browser can understand

/*

How JSX works

JSX => Babel transpiles it to React.createElement => ReactElement => which is JS Object => get render HTMLElement

*/

const jsxHeading = <h1 id="heading">Namate React</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(jsxHeading);
