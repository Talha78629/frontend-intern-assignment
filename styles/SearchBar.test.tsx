import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../components/SearchBar';
import { ProductsProvider } from '../context/ProductsContext';

describe('SearchBar', () => {
  it('updates search query on user input', async () => {
    const user = userEvent.setup();
    render(
      <ProductsProvider>
        <SearchBar />
      </ProductsProvider>
    );

    const input = screen.getByRole('textbox'); // or getByPlaceholderText('Search products...')
    await user.type(input, 'laptop');
    expect(input).toHaveValue('laptop');
  });
});