const heading = React.createElement(
  "h1",
  {
    id: "heading",
    style: {
      color: "red",
    },
  },
  "Hello world"
);

// console.log(heading)

// Parent DOM tree

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "" }, "Im parent"),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm Parent h1 tag"),
    React.createElement("h2", {}, "I'm Parent h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm child h1 tag"),
    React.createElement("h2", {}, "I'm child h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);
