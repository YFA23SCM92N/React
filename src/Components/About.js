import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(){
        super();
        // console.log("Parent Constructor");
    }

    componentDidMount(){
        // console.log("Parent component DidMount")
    }

    render(){
        // console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
    
                <UserClass name="Yaswanth (class)"  Location = "Chicago"/>
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>

//             <UserClass name="Yaswanth (class)"  Location = "Chicago"/>
//         </div>
//     )
// }

export default About;