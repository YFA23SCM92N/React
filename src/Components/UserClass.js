import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props)
        // console.log(this.props.name + "Child Constructor");
        // console.log(this.props)

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "India",
            }
        }
    }

    async componentDidMount(){
        // console.log(this.props.name + "Child componentDidMount")

        const data = await fetch ("https://api.github.com/users/YFA23SCM92N");
        const json = await data.json();

        this.setState({
            userInfo: json
        })

        console.log(json);
    }

    render(){

        // console.log(this.props.name + "Child rendered ")

        const {name, Location, avatar_url} = this.state.userInfo;

        return(
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: Chicago</h3>
                <h4>Contact: @yaswanthmahesh</h4>
                
            </div>
            
        )
        
    }

}

export default UserClass;