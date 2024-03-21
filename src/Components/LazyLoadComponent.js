import { useEffect, useState } from "react";
import Grocery from "./Grocery";

const LazyLoadComponent = () => {

    const [key, setKey] = useState(0);

    const reloadComponent = () => {
        setKey(prevValue => prevValue + 1);
    }

    useEffect(() => {
        reloadComponent();
    }, [])

    return (
        
        <Grocery key={key} />
    )
    
}

export default LazyLoadComponent;