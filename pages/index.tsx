import { useCallback, useEffect } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import ErrorMessage from '../components/ErrorMessage';
import LoadingSkeleton from '../components/LoadingSkeleton';
import Pagination from '../components/Pagination';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import SortControls from '../components/SortControls';
import { useProducts } from '../context/ProductsContext';
import { fetchProducts } from '../lib/api';

const ITEMS_PER_PAGE = 8;

const Home = () => {
  const { state, dispatch } = useProducts();
  const { loading, error } = state;

  const loadProducts = useCallback(async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const products = await fetchProducts();
      dispatch({ type: 'SET_PRODUCTS', payload: products });
    } catch (err) {
      dispatch({ 
        type: 'SET_ERROR', 
        payload: err instanceof Error ? err.message : 'An unknown error occurred' 
      });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, [dispatch]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-xl font-semibold text-center  text-blue-500 mb-4">All Products</h1>
      
      <div className="mb-4 flex flex-col md:flex-row gap-3 justify-between items-start">
        <SearchBar />
        <div className="flex gap-3 w-full md:w-auto">
          <CategoryFilter />
          <SortControls />
        </div>
      </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => <LoadingSkeleton key={i} />)}
          </div>
        ) : (
          <ProductList />
        )}
      </div>
    </div>
  );
};

const ProductList = () => {
  const { state } = useProducts();
  const { filteredProducts, currentPage } = state;
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
  {paginatedProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found matching your criteria.</p>
        </div>
      )}

      {filteredProducts.length > ITEMS_PER_PAGE && <Pagination />}
    </>
  );
};

export default Home;