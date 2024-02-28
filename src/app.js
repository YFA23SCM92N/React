import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import {Body} from "./Components/Body";
/**
 * 
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *      - Restaurant Card
 *          - Image
 *          - Name
 *          - StarRating, Cuisine, DeliveryTime
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 */



const AppLayout = () => {
    return (
        <div className="app">
            {/* Header */}
            <Header />
            <Body />
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)