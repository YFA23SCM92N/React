import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart =  () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const reducedCartItems = cartItems.reduce((acc, curr) => {
        if (!acc.ids.includes(curr.card.info.id)) {
            acc.ids.push(curr.card.info.id);
            acc.items.push(curr);
        }
        return acc;
    }, { ids: [], items: [] }).items;

    return (
        <div className="min-h-[45vh]">
            {cartItems.length === 0 
                ? 
                (
                    <div className=" p-2 my-10 m-auto border-2 border-slate-200 rounded-md w-2/5">
                        <div className="flex justify-between p-2 m-2 items-center">
                            <p className="m-2 p-2">Your cart is empty</p>
                            <Link to="/">
                                <button className="bg-green-100 m-2 p-2 rounded-">Add Items</button>
                            </Link>
                        
                        </div>
                    </div>
                    
                    
                )
                :
                (
                    <div className="text-center m-4 p-4">
                        <h1 className="text-2xl font-bold">Cart</h1>
                        <div className="w-6/12 m-auto">
                            <button className="p-2 m-2 bg-black text-white rounded-lg"
                                    onClick={handleClearCart}
                            >
                                Clear Cart
                            </button>
                            <ItemList items={reducedCartItems} />
                        </div> 
                    </div>
                )
            }
        </div>
    )
}

export default Cart;
