import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const cartItems = useSelector((store) => store.cart.items)

    // console.log(cartItems)

    const dispatch = useDispatch();
    // console.log(items)

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item))
    }

    const handleRemoveItem = (item) => {
        // Dispatch an action
        dispatch(removeItem(item))
    }
    
    const itemCount = (item) => {
        return cartItems.reduce((count, cartItem) => {
            if (cartItem.card.info.id === item.card.info.id) {
                return count + 1;
            }
            return count;
        }, 0);
    }

    return (
    <div>
        {items.map(item => (
            <div data-testid="foodItems" key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between items-start">
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
            <div className="w-3/12 p-4 relative flex flex-col justify-center items-center">
                <img className="block mx-auto mb-4" src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} />
                <div className="absolute bottom-0 flex justify-center w-full">
                    {itemCount(item) === 0 ? (
                        <button className="p-2 bg-white text-green-500 shadow-lg" onClick={() => handleAddItem(item)}>
                            Add
                        </button>
                    ) : (
                        <div className="flex items-center bg-white">
                            <button className="p-2 text-green-500 " onClick={() => handleRemoveItem(item)}>
                                -
                            </button>
                            <button className="p-2 text-green-500">{itemCount(item)}</button>
                            <button className="p-2 text-green-500" onClick={() => handleAddItem(item)}>
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>))}
    </div>

)}

export default ItemList;