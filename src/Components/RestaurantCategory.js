import ItemList from "./ItemList";


const RestaurantCategory = ({data, showItems, setShowIndex, index}) => {

    const itemCards = data.itemCards;

    console.log(itemCards)

    const handleClick = () => {

        setShowIndex()
    }

    return (
        <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" 
                onClick={handleClick}
            >
                <span className="font-bold text-lg">
                            {data.title} ({data.itemCards.length})
                </span>
                <span>⬇️</span>
            </div>
            
             {showItems && itemCards.map(
                (item) => <ItemList key={item?.card?.info?.id} item = {item}/>
            )}
        </div>
    )
}

export default RestaurantCategory;