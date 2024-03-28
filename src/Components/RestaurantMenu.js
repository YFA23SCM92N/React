import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {

    const {resId} = useParams();

    const [showIndex, setShowIndex] = useState(null)

    const resInfo = useRestaurantMenu(resId);

    console.log(resInfo)

    if(resInfo == null)
        return <Shimmer />

    const {name, cuisines, costForTwoMessage} = 
            resInfo?.cards[2]?.card?.card?.info

    const {itemCards} = 
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const itemCategories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )

    console.log(itemCategories)

    return (
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <p className=" font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>

            {itemCategories.map((category, index) =>
                <RestaurantCategory 
                    key = {category?.card?.card?.title}
                    data = {category?.card?.card}
                    setShowIndex = {setShowIndex}
                    showItems = {index === showIndex ? true : false}
                    setShowIndex = {() => {
                        setShowIndex(index === showIndex ? null : index)
                    }}
                    index = {index}
                />
            )}
        </div>
        
    )
}

export default RestaurantMenu;