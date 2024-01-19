import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

describe("testing contact component", ()=>{
    test("Should contain heading in contact", ()=>{
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    test("Should contain placeholder for input in contact", ()=>{
        render(<Contact />);
        const inputName = screen.getByPlaceholderText("John Doe");
        expect(inputName).toBeInTheDocument();
    })
    test("Should contain two input fields in contact", ()=>{
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(3);
    })
    test("Should contain textarea in contact", ()=>{
        render(<Contact />);
        const textarea = screen.getByLabelText("Your Message");
        expect(textarea).toBeInTheDocument();
    })
    test("Should contain button in contact", ()=>{
        render(<Contact />);
        const button = screen.getByText("Send Message");
        expect(button).toBeInTheDocument();
    })
})
