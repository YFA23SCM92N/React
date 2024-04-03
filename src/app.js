import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";
import Help from "./Components/Help";
import Profile from "./Components/Profile";
import UserDataContext from "./contexts/UserDataContext";
import Footer from "./Components/Footer";
//import Grocery from "./Components/Grocery";

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

    // Chunking
    // Code Splitting
    // Lazy Loading
    // On Demand Loading

//const Grocery = lazy(() => displayGrocery(import("./Components/LazyLoadComponent")));

const Grocery = lazy(() => (import("./Components/Grocery")))



const AppLayout = () => {

    const [userData, setUserData] = useState({
        name: "Yaswanth",
        email: "yaswanthmahesh7@gmail.com",
        address: "3001 S King Drive",
        phone: "8985784383",
      });

    return (
        <Provider store={appStore}>
            <UserDataContext.Provider value={{userData: userData, setUserData: setUserData}}>
                <div className="app mt-5">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </UserDataContext.Provider>
        </Provider>
        
    )

}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/help",
                element: <Help />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery /></Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/profile",
                element: <Profile />
            }
        ],
        errorElement: <Error />
    },
]);

// function displayGrocery(promise){
//     return new Promise(resolve => {
//         setTimeout(resolve, 2000);
//     }).then(() => promise);
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)