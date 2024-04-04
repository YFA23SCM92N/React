import { Link } from "react-router-dom"
import { CDN_URL } from "../utils/constants"

const RestaurantCardComponent =  (props) => {
    const {resData} = props
    // console.log(resData)
    const {name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId, id} = resData?.info
    return (
        <div data-testid="resCard" className="w-72 m-2 p-2 h-full cursor-pointer hover:shadow-md shadow-slate-200" >
            <Link to={"/restaurants/" + id}>
                <div>
                    {/* {console.log(cloudinaryImageId)} */}
                    <img className = "h-40 w-11/12 rounded-lg"
                        alt = "res-logo"
                        src = {CDN_URL + cloudinaryImageId}
                    />
                </div>
                <div className="py-2">
                    <h4 className="font-bold text-lg">{name}</h4>
                    <h4 className="text-sm">{cuisines.join(", ")}</h4>
                    <div className="flex item-center justify-between text-xs py-2">
                        <div className="bg-green-700 flex text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="white"
                                className="w-4 h-4 p-0.5"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <h4 className="p-0.5">{avgRating}</h4>
                        </div>
                        
                        <h4>{resData.info.sla.deliveryTime} MIN</h4>
                        <h4>{costForTwo}</h4>
                    </div>
                    
                </div>
                
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