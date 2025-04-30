// import { useEffect, useState } from 'react';
// import { useProducts } from '../context/ProductsContext';

// const CategoryFilter = () => {
//   const { state, dispatch } = useProducts();
//   const [categories, setCategories] = useState<string[]>([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch('https://fakestoreapi.com/products/categories');
//         const data = await res.json();
//         setCategories(data);
//       } catch (error) {
//         console.error('Failed to fetch categories:', error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   return (
//     <div className="w-full sm:w-64 my-4">
//       <label className="block mb-2 text-lg font-medium text-gray-700">Filter by Category:</label>
//       <select
//         className="w-full px-4 py-2 bg-white text-gray-800 border border-blue-400 rounded-lg shadow-md hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         value={state.selectedCategory}
//         onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: e.target.value })}
//       >
//         <option value="all">All Categories</option>
//         {categories.map((category) => (
//           <option key={category} value={category}>
//             {category.charAt(0).toUpperCase() + category.slice(1)}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default CategoryFilter;


import { useEffect, useState } from 'react';
import { useProducts } from '../context/ProductsContext';

const CategoryFilter = () => {
  const { state, dispatch } = useProducts();
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products/categories');
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="w-full sm:w-48 my-2">
      <label className="block mb-1 text-sm font-medium text-gray-700">Category:</label>
      <select
        className="w-full px-3 py-1.5 text-sm bg-white text-gray-800 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        value={state.selectedCategory}
        onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: e.target.value })}
      >
        <option value="all">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;