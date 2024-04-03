import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard.js"
import MOCK_DATA from "../mocks/resCardMock.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


// it("Should render restaurant card component with props data", () => {
//     render(
//         <BrowserRouter>
//             <RestaurantCard resData = {MOCK_DATA}/>
//         </BrowserRouter>
//     );

//     const resName = screen.getByText("Lavonne");

//     expect(resName).toBeInTheDocument();

// });

it("Should render restro card component with promoted label", () => {

    //Test Higher order componet with promoted label

    render(
        <BrowserRouter>
            <RestaurantCard resData = {MOCK_DATA}/>
        </BrowserRouter>
    );

    const deliveryTime = screen.getByText("22 minutes");


})