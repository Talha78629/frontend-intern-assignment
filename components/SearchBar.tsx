import { useProducts } from '../context/ProductsContext';

const SearchBar = () => {
  const { state, dispatch } = useProducts();
  
  return (
    <div className="w-full sm:w-56 my-2">
      <label className="block mb-1 text-sm font-medium text-gray-700">Search:</label>
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-3 py-1.5 text-sm bg-white text-gray-800 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        value={state.searchQuery}
        onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
      />
    </div>
  );
};

export default SearchBar;