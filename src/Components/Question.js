

const Question = ({title, description, setShowIndex, showItem}) => {


    const handleClick = () => {
        setShowIndex()
    }

    return (
        <div className="mb-4 border-2 border-gray-50 shadow-lg rounded-md">
            <div className="m-4 p-4 flex justify-between font-bold border" onClick={handleClick}>
                <span>{title}</span>
                {showItem ? (<span>⬆️</span>) : (<span>⬇️</span>)}
            </div>
            { showItem && 
                    (
                        <div className="p-2 m-2">{description}</div>
                    ) 
            }
        </div>
        
    )
}

export default Question;