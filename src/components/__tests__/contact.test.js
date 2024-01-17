import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"




describe("Contact Us", () => {
    test("should load contact us component", () => {
        render(<Contact />)                      //install @babel/preset-react  to read JSX in testcases and include them in bable config.

        // const heading=screen.getByRole("heading")
        const heading = screen.getByText("Submit")  //finding Submit somewhere in my component
        expect(heading).toBeInTheDocument();
    });

    test("should load contact us component", () => {
        render(<Contact />)                      //install @babel/preset-react  to read JSX in testcases and include them in bable config.

        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument();
    });

    //instead of test you can write it , its is alias of test
    it("should load 2 input box in contact us component", () => {
        render(<Contact />)                      //install @babel/preset-react  to read JSX in testcases and include them in bable config.
        //Querying
        const inputBoxes = screen.getAllByRole("textbox")

        console.log(inputBoxes.length);             //returns JSX object

        expect(inputBoxes.length).toBe(2);
        expect(inputBoxes.length).not.toBe(3);
    });
});