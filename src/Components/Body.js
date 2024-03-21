import RestaurantCardComponent from "./RestaurantCard";
import {resList} from "../utils/mockData";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";


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
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" 
                           className=" border border-solid border-black" 
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
                <div className="search m-4 p-4 items-center">
                    <button 
                        className="filter-btn px-4 py-2 m-4 bg-gray-100 rounded-lg" 
                        onClick={() => {
                            // filter data
                            const filteredList = 
                            listOfRestaurants.filter((res) => res.info.avgRating > 4.3)
                                setFilteredListOfRestaurants(filteredList)
                            console.log(listOfRestaurants)
                        }
                    }
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                
            </div>

            <div className=" flex flex-wrap">
                { filteredListOfRestaurants.map(restaurant => <RestaurantCardComponent key={restaurant.info.id} resData = {restaurant}/>)}
            </div>
        </div>
    )
}

export default Body;