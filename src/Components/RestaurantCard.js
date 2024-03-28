import { Link } from "react-router-dom"
import { CDN_URL } from "../utils/constants"

const RestaurantCardComponent =  (props) => {
    const {resData} = props
    const {name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId, id} = resData?.info
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <Link to={"/restaurants/" + id}>
                <img className = " rounded-lg"
                    alt = "res-logo"
                    src = {CDN_URL + cloudinaryImageId}
                />
                <h4 className="font-bold py-4 text-lg">{name}</h4>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{costForTwo}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{resData.info.sla.deliveryTime} minutes</h4>
            </Link>
            
        </div>
    )
}

export const withPromotedLabel = (RestaurantCardComponent) => {
    return (props) => (
        <div>
            <label className="absolute bg-black text-white m-1 p-1 rounded-lg">Promoted</label>
            <RestaurantCardComponent {...props}/>
        </div>
    )
}

export default RestaurantCardComponent;