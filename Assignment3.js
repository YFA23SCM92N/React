import React from "react";
import ReactDOM from "react-dom/client";

// const elementByReact = React.createElement(
//     "div",
//     {class: 'title'},
//     React.createElement("h1",{},"This is H1 Tag"),
//     React.createElement("h2",{},"This is H2 Tag"),
//     React.createElement("h2",{},"This is H3 Tag")
// )

// const elementByJSX = (
//     <div class = "title">
//         <h1>This is H1 Tag</h1>
//         <h2>This is H2 Tag</h2>
//         <h3>This is H3 Tag</h3>
//     </div>

// )

// // Pass attributes to tags
// const Element = (props) => {
//     return (
//         <div class = "title">
//             <h1>{props.tag1}</h1>
//             <h2>{props.tag2}</h2>
//             <h3>This is H3 Tag</h3>
//         </div>
//     )

// };

// const App = () => {
//     return <Element tag1 = "This is H1 Tag" tag2 = "This is H2 Tag" />
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App />);


{/* <div style ="float:left" class = "logo">
            <img src="React.png">
        </div>
        <div style ="float:middle">
            <input type="text" method="put" id="search" placeholder="Search" value="">
        </div>
        <div style ="float:right" class = "icon">
            <img src="userIcon.png">
        </div> */}

const LogoComponent = () => (
    <div style={{ float: 'left' }} className = "logo">
            <img src="React.png" alt="Logo"/>
    </div>
);

const searchBar = (
    <div style={{ float: 'middle' }}>
            <input type="text" id="search" placeholder="Search" value=""/>
    </div>
);

const UserIcon = () => {
    return (
        <div style={{ float: 'right' }} class = "icon">
            <img src="userIcon.png"/>
        </div>
    );
};

const HeaderComponent = () => (
    <div id="header">
        <LogoComponent />
        {searchBar}
        {UserIcon()}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<HeaderComponent />);
