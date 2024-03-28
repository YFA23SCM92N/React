import { CDN_URL } from "../utils/constants";

const ItemList = ({item}) => {
    return (
        <div className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
            <div className="w-9/12">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.price 
                            ? item.card.info.price/100
                            : item.card.info.defaultPrice/100}
                        </span>
                    </div>

                    <p className="text-xs">{item.card.info.description}</p>
            </div>

            <div className="w-3/12 p-4">
                    <div className="absolute -bo">
                        <button className="p-2 mx-20 bg-white text-green-500 shadow-lg"
                            // onClick = {() => handleAddItem(item)}
                        >
                            Add +
                        </button>
                    </div>
                    <img src={CDN_URL + item.card.info.imageId}/>
            </div>
        </div>
    )
}

export default ItemList;