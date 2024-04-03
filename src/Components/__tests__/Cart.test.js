import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";



global.fetch = jest.fn(() => {
    return Promise.resolve({

        json: () => Promise.resolve(MOCK_DATA)
    })
})

it("Should load Restro Menu Component", async () => {
    await act(async () => render(
        <Provider store={appStore}>
             <BrowserRouter>
                <Header />
             </BrowserRouter>
             
             <RestaurantMenu />
        </Provider>
        
    ));

    const accordianHeader = screen.getByText("Croissanwich (4)");
    fireEvent.click(accordianHeader)

    const foodItem = screen.getByText("Bacon Egg And Cheese Croissanwich");
    expect(foodItem).toBeInTheDocument()

    expect(screen.getAllByTestId("foodItems").length).toBe(4);

    const addBtns = screen.getAllByRole("button", {name: "Add +"});

    expect(screen.getByText("Cart( 0 items )")).toBeInTheDocument()

    fireEvent.click(addBtns[0])

    expect(screen.getByText("Cart( 1 items )")).toBeInTheDocument()
})