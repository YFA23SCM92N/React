/**
 * <div id="parent"> 
 *      <div id="child1">
 *          <h1>This is h1 tag</h1>
 *          <h2>This is h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>This is h1 tag</h1>
 *          <h1>This is h2 tag</h1>
 *      </div>
 * </div>
 * 
 * 
 * 
 * 
 */

//const header1 = React.createElement("h1", {}, "Hello!");
const parent = React.createElement(
    "div",
    {id : "parent"},
    React.createElement(
        "div",
        {id : "child1"},
        [React.createElement("h1", {}, "This is first h1 tag"),
        React.createElement("h2", {}, "This is first h2 tag")]
    ),
    React.createElement(
        "div",
        {id : "child2"},
        [React.createElement("h1", {}, "This is first h1 tag"),
        React.createElement("h2", {}, "This is first h2 tag")]
    )
);

console.log(parent);

const header = React.createElement("h1", {id:"heading"}, "Hello From React!");

console.log(header);

// const root1 = ReactDOM.createRoot(document.getElementById("root"));

// root1.render(header);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);