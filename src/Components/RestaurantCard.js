const RestaurantCardComponent =  (props) => {
    const {resData} = props
    const {name, cuisines, avgRating, costForTwo, deliveryTime, img} = resData?.info
    return (
        <div className="res-card" >
            <img className = "res-logo"
                alt = "res-logo"
                src = {resData.info.img}
            />
            <h4>{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCardComponent;