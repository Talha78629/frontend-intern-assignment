// import { useProducts } from '../context/ProductsContext';

// const SortControls = () => {
//   const { state, dispatch } = useProducts();

//   return (
//     <div className="w-full sm:w-72 my-4">
//       <label className="block mb-2 text-lg font-medium text-gray-700">Sort By:</label>
//       <select
//         className="w-full px-4 py-2 bg-white text-gray-800 border border-blue-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//         value={state.sortOption}
//         onChange={(e) => dispatch({ type: 'SET_SORT_OPTION', payload: e.target.value })}
//       >
//         <option value="price-asc">Price: Low to High</option>
//         <option value="price-desc">Price: High to Low</option>
//         <option value="title-asc">Name: A to Z</option>
//         <option value="title-desc">Name: Z to A</option>
//       </select>
//     </div>
//   );
// };

// export default SortControls;


import { useProducts } from '../context/ProductsContext';

const SortControls = () => {
  const { state, dispatch } = useProducts();

  return (
    <div className="w-full sm:w-48 my-2">
      <label className="block mb-1 text-sm font-medium text-gray-700">Sort By:</label>
      <select
        className="w-full px-3 py-1.5 text-sm bg-white text-gray-800 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        value={state.sortOption}
        onChange={(e) => dispatch({ type: 'SET_SORT_OPTION', payload: e.target.value })}
      >
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="title-asc">Name: A to Z</option>
        <option value="title-desc">Name: Z to A</option>
      </select>
    </div>
  );
};

export default SortControls;