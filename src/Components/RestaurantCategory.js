import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex, index}) => {
    const {title} = data

    const handleClick = () => {
        // setShowIndex(prevIndex => prevIndex === index ? null : index);
        setShowIndex();
    };


    return (
        <div>
            {/*Header */}
            <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">
                        {title} ({data.itemCards.length})
                    </span>
                    {showItems ? (<span>⬆️</span>) : (<span>⬇️</span>)}
                </div>

                {showItems && <ItemList items={data?.itemCards}/>}
                

            </div>
                        
        </div>
    )
}

export default RestaurantCategory;