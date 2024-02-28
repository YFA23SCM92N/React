import React from "react";
import ReactDOM from "react-dom/client";

// React Element

//JSX => Babel transpiles it to React.createRFelemet => HTMLElement(render)


const number = 10000;

const elem = <span>React Element</span>

const HeadingComponent = () => { 
    return    (
        <div id="container">
            Namaste React Functional Component1
        </div>
    );
};

console.log(HeadingComponent);

const headingComponent1 =  (
        <div id="container">
            Namaste React Functional Component
        </div>
);



const Title = () => (
    <h1 className="heading" tabIndex={"5"}>
        {title2}
        {headingComponent1}
        {HeadingComponent()}
        Namaste React using JSX
    </h1>
);

const title2 = (
    elem
);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <Title />);