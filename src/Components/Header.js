import {LOGO_URL} from "../utils/constants";
import {useContext, useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import UserDataContext from "../contexts/UserDataContext";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("login");
    // console.log("Header Rendered");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser)

    // Subscribing to store using a selector
    const cartItems = useSelector((store) => 
        store.cart.items
    )

    const {userData} = useContext(UserDataContext)

    return (
        <div className = " mx-5 flex flex-wrap items-center border-2 justify-between bg-pink-50 shadow-lg sm:bg-yellow-50 lg:bg-white">
            <div className="flex flex-wrap">
                <div className="logo-container">
                    <img
                        className="w-24 mx-2"
                        src={LOGO_URL} 
                    />
                </div>
                <div className="py-5">
                    <p>Welcome back, {userData?.name ? userData?.name : "Dude"}!</p>
                    <p className="text-xs">Hungry! Checkout for delicious food</p>
                </div>
                
            </div>
        
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    {/* <li className=" px-4">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li> */}
                    <li className=" px-4">
                    <Link to="/">Home</Link>
                    </li>
                    <li className=" px-4">
                        <Link to="/help">Help</Link>
                    </li>
                    <li className=" px-4">
                        <Link to="/cart">Cart( {cartItems.length} )</Link>
                    </li>
                    <li className=" px-4 ">
                        <Link to="/profile">Profile</Link>
                    </li>
                    {/* <button className="login bg-gray-50" onClick={
                        () => {
                            btnNameReact == "login" ? setBtnNameReact("logout")
                                                    : setBtnNameReact("login")
                        }
                    }>{btnNameReact}</button> */}
                </ul>
            </div>
        </div>
    )
}

export default Header;