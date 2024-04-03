import RestaurantCardComponent, { withPromotedLabel } from "./RestaurantCard";
import {resList} from "../utils/mockData";
import {useState,useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Body = () => {

    // Local State Variable - Super Powerful Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("")

    const {setUserName, loggedInUser} = useContext(UserContext);

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCardComponent);


    useEffect( () => {
        fetchData();
    } , []);

    async function fetchData () {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
          );
          const json = await data.json();
          //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

          //console.log(resList);

          // Optional Chaining
          const restaurantList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          setFilteredListOfRestaurants(restaurantList);
          setListOfRestaurants(restaurantList);
          console.log(restaurantList);

    }

    const onlineStatus = useOnlineStatus();

    // Shimmer UI
    if(filteredListOfRestaurants.length === 0)
        return <Shimmer />

    if(onlineStatus == false){
        return (
            <h1>Looks like you're offline!! Please check your connection</h1>
        )
    }

    //console.log("hello");

    return (
        <div className="body">
            <div className="filter flex justify-center">
                <div className="search m-4 p-4">
                    <input type="text" 
                           className=" p-2 w-96 h-10 border border-solid border-black rounded-md" 
                           data-testid = "searchInput"
                           placeholder="Search for restaurants"
                           value = {searchText} 
                           onChange={(e) => {
                                setSearchText(e.target.value);
                            }} />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        var filteredRestaurants = 
                            listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
                        setFilteredListOfRestaurants(filteredRestaurants);
                        console.log(filteredRestaurants);
                    }}>Search</button> 
                    
                </div>
                {/* <div className="search m-4 p-4 items-center">
                    <label>UserName : </label>
                    <input className="border border-black p-2" onChange={(e) => {
                        setUserName(e.target.value)
                    }}>{}</input>
                </div> */}
                
            </div>

            <div className=" flex flex-wrap justify-center">
                { filteredListOfRestaurants.map(restaurant => 
                    (restaurant.info.sla.deliveryTime == 22 ? <RestaurantCardPromoted  key={restaurant.info.id} resData = {restaurant}/> : 
                                <RestaurantCardComponent key={restaurant.info.id} resData = {restaurant}/> )
                )}
            </div>
        </div>
    )
}

export default Body;