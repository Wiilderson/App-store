import Home from '@/app/page';
import '@testing-library/jest-dom';
import { act, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';

jest.mock('axios');

describe('Home', () => {
  test('fetches products and renders them', async () => {
    // Set up mock data
    const mockProducts = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ];
    const axiosSpy = jest.spyOn(axios, 'get');
    axiosSpy.mockResolvedValue({ data: { products: mockProducts } });

    // Render the component
    render(<Home />);

    // Wait for the component to render with the products
    await act(async () => {
      await waitFor(() => {
        screen.getByText('Product 1');
        screen.getByText('Product 2');
      });
    });

    // Your assertions go here
  });
});
