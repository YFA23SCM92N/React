import { Link } from "react-router-dom"
import { CDN_URL } from "../utils/constants"

const RestaurantCardComponent =  (props) => {
    const {resData} = props
    const {name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId, id} = resData?.info
    return (
        <div className="res-card" >
            <Link to={"/restaurants/" + id}>
                <img className = "res-logo"
                    alt = "res-logo"
                    src = {CDN_URL + cloudinaryImageId}
                />
                <h4>{name}</h4>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{costForTwo}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{resData.info.sla.deliveryTime} minutes</h4>
            </Link>
            
        </div>
    )
}

export default RestaurantCardComponent;