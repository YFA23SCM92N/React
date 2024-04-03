import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us test cases", () => {
    test("should load contact us component", () => {

        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument()
    });
    
    test("should load button inside contact component", () => {
    
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument()
    });
    
    test("should load any element with text submit contact component", () => {
    
        render(<Contact />);
    
        const submit = screen.getByText("Submit");
    
        //ASSERTION
        expect(submit).toBeInTheDocument()
    });
    
    it("Should load 2 input boxes inside contact component", () => { 
        render(<Contact />);
        
        // Querying
        const boxes = screen.getAllByRole("textbox");
    
        // console.log(boxes);
    
        // Assertion
        expect(boxes.length).toBe(2)
    })
})