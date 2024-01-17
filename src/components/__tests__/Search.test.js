// import { render } from "@testing-library/react"
// import Body from "../Body"
// import MOCK_DATA from "../__tests__/mocks/resCardMock.json"
// import { act } from "react-dom/test-utils"

// global.fetch=jest.fn(()=>{
//     return Promise.resolve({
//         JSON:()=>{
//             return Promise.resolve(MOCK_DATA);
//         }
//     })
// })



// it("Should render Body component with Search",async()=>{

//     await act(()=>{
//         render(<Body />)
//     })
    

// })


import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { Body } from '../Body'; // Adjust the import path based on your project structure

describe('Body Component', () => {
  it('renders the component with initial data', async () => {
    render(
      <Router>
        <Body />
      </Router>
    );

    // You can add more specific assertions based on your component structure
    expect(screen.getByPlaceholderText(/Search for restaurant/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument();

    // Assuming the component fetches data asynchronously
    await waitFor(() => {
      expect(screen.getByText(/Looks like you're offline!!/i)).toBeInTheDocument();
    });
  });

  it('updates search text and triggers search', async () => {
    render(
      <Router>
        <Body />
      </Router>
    );

    const searchInput = screen.getByPlaceholderText(/Search for restaurant/i);
    const searchButton = screen.getByRole('button', { name: /Search/i });

    // Update the search text
    userEvent.type(searchInput, 'Pizza');

    // Trigger the search
    userEvent.click(searchButton);

    // Wait for the component to update with the search results
    await waitFor(() => {
      expect(screen.getByText(/No matches found/i)).toBeInTheDocument();
    });
  });

  // Add more test cases based on the component's behavior

  // Example test case for setting user name
  it('updates user name input', () => {
    render(
      <Router>
        <Body />
      </Router>
    );

    const userNameInput = screen.getByPlaceholderText(/Set UserName/i);

    userEvent.type(userNameInput, 'John Doe');

    expect(userNameInput).toHaveValue('John Doe');
  });
});
