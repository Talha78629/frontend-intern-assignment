import { useProducts } from '../context/ProductsContext';

const Pagination = () => {
  const { state, dispatch } = useProducts();
  const totalPages = Math.ceil(state.filteredProducts.length / 8);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-10 space-x-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`px-4 py-2 rounded-lg border transition-all duration-200
            ${
              state.currentPage === page
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-blue-600 border-blue-300 hover:bg-blue-50 hover:shadow-sm'
            }`}
          onClick={() => dispatch({ type: 'SET_PAGE', payload: page })}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;