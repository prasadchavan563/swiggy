import { RestaurantCard } from "../RestaurantCard"
import { render ,screen} from "@testing-library/react"
import MOCK_DATA from "../__tests__/mocks/resCardMock.json"
import "@testing-library/jest-dom"


// it("should render RestaurantCard component with data",()=>{
//     render(<RestaurantCard restaurant={MOCK_DATA}/>)
//     const name=screen.getByText("Domino's Pizza")
//     expect(name).toBeInTheDocument()

// })

// it("should render RestaurantCard component with data", () => {
//     render(<RestaurantCard restaurant={MOCK_DATA} />);
  
//     // Use getByRole to find the element with the "card-tags" class
//     const cardTags = screen.getByRole("heading", { name: /Pizzas/i });
  
//     // Check if the "card-tags" element exists
//     expect(cardTags).toBeInTheDocument();
  
//     // Check the text content of the "card-tags" element separately
//     const cardTagsText = cardTags.textContent;
//     expect(cardTagsText).toMatch(/Pizzas/i);
//   });
  
  
  it("should load data",()=>{

  })