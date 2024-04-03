import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        
    )

    // const loginButton = screen.getByRole("button");

    const loginButton = screen.getByRole("button", {name: "login"})

    expect(loginButton).toBeInTheDocument();
    
})

it("Should render header component with cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        
    )

    const cartItems = screen.getByText("Cart( 0 items )")

    expect(cartItems).toBeInTheDocument();
    
})

it("Should render header component with cart is there or not", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        
    )

    const cartItems = screen.getByText(/Cart/)

    expect(cartItems).toBeInTheDocument();
    
})

it("Should change login to ,logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        
    )

    const loginButton = screen.getByRole("button", {name:"login"})

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name:"logout"})

    expect(logoutButton).toBeInTheDocument();
    
})