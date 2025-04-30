
import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types';

const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  price: 9.99,
  description: 'Test description',
  category: 'electronics',
  image: 'https://test.com/image.jpg',
  rating: {
    rate: 4.5,
    count: 100
  }
};

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} />);
    
    // Verify product title
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    
    // Verify product price
    expect(
      screen.getByText(`$${mockProduct.price.toFixed(2)}`)
    ).toBeInTheDocument();
    
    // Verify product category
    expect(
      screen.getByText(mockProduct.category, { exact: false })
    ).toBeInTheDocument();
    
    // Verify product image
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining(encodeURIComponent(mockProduct.image))
    );
    
    // Verify link exists with correct href
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/products/${mockProduct.id}`);
  });
});