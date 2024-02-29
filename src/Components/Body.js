import RestaurantCardComponent from "./RestaurantCard";
import {resList} from "../utils/mockData";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";


export const Body = () => {

    // Local State Variable - Super Powerful Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("")

    useEffect( () => {
        fetchData();
    } , []);

    async function fetchData () {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
          );
          const json = await data.json();
          console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

          console.log(resList);

          // Optional Chaining
          const restaurantList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          setFilteredListOfRestaurants(restaurantList);
          setListOfRestaurants(restaurantList);

    }

    // Shimmer UI
    if(filteredListOfRestaurants.length === 0)
        return <Shimmer />

    console.log("hello");

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" 
                           className="search-box" 
                           value = {searchText} 
                           onChange={(e) => {
                                setSearchText(e.target.value);
                            }} />
                    <button onClick={() => {
                        var filteredRestaurants = 
                            listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
                        setFilteredListOfRestaurants(filteredRestaurants);
                        console.log(filteredRestaurants);
                    }}>Search</button> 
                    
                </div>
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        // filter data
                        const filteredList = 
                            resList.filter((res) => res.info.avgRating > 4.2)
                        setListOfRestaurants(filteredList)
                        console.log(listOfRestaurants)
                    }
                }
                >
                    Top Rated Restaurants
                </button>
            </div>

            <div className="res-container">
                { filteredListOfRestaurants.map(restaurant => <RestaurantCardComponent key={restaurant.info.id} resData = {restaurant}/>)}
            </div>
        </div>
    )
}

export default Body;