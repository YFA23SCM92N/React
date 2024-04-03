// import { fireEvent, render, screen } from "@testing-library/react"
// import Body from "../Body"
// import MOCK_DATA from "../mocks/mockResListData.json"
// import { act } from "react-dom/test-utils";
// import { BrowserRouter } from "react-router-dom";
// import "@testing-library/jest-dom";


// global.fetch = jest.fn(() => {
//     return Promise.resolve({ 
//         json: () => {
//             return Promise.resolve(MOCK_DATA);
//         }
//     })
// });

// //
// it("Should render the Body Component with search button", async () => {
//     await act(async () => {
//         render (
//             <BrowserRouter>
//                 <Body />
//             </BrowserRouter>
//         )
//     });

//     const cardsBeforeSearch = screen.getAllByTestId("resCard");

//     expect(cardsBeforeSearch.length).toBe(20);

//     const searchBtn = screen.getByRole("button", {name: "Search"});

//     const searchInput = screen.getByTestId("searchInput");

//     fireEvent.change(searchInput, {target: {value: "burger"}});

//     fireEvent.click(searchBtn);

//     const cardsAfterSearch = screen.getAllByTestId("resCard");

//     expect(cardsAfterSearch.length).toBe(1);
    
// })

const { sum } = require("../sum")

test("Sum of two numbers", () => {
    const result = sum(3,4);

    // Assertion
    expect(result).toBe(7)
})