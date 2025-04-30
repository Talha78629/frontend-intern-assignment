

import { render } from '@testing-library/react';
import { ProductsProvider } from '../context/ProductsContext';

describe('ProductsContext', () => {
  it('renders provider without crashing', () => {
    // Simple test just to verify the provider renders
    const { container } = render(
      <ProductsProvider>
        <div>Test Child</div>
      </ProductsProvider>
    );
    
    expect(container).toBeInTheDocument();
  });
});