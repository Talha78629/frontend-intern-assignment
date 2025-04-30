// import React, { createContext, useContext, useReducer } from 'react';
// import { ProductsAction, ProductsState } from '../types';

// const initialState: ProductsState = {
//   products: [],
//   filteredProducts: [],
//   loading: true,
//   error: null,
//   searchQuery: '',
//   selectedCategory: 'all',
//   sortOption: 'price-asc',
//   currentPage: 1,
// };

// const productsReducer = (state: ProductsState, action: ProductsAction): ProductsState => {
//   switch (action.type) {
//     case 'SET_PRODUCTS':
//       return { ...state, products: action.payload, filteredProducts: action.payload };
//     case 'SET_LOADING':
//       return { ...state, loading: action.payload };
//     case 'SET_ERROR':
//       return { ...state, error: action.payload };
//     case 'SET_SEARCH_QUERY':
//       return { ...state, searchQuery: action.payload, currentPage: 1 };
//     case 'SET_CATEGORY':
//       return { ...state, selectedCategory: action.payload, currentPage: 1 };
//     case 'SET_SORT_OPTION':
//       return { ...state, sortOption: action.payload };
//     case 'SET_PAGE':
//       return { ...state, currentPage: action.payload };
//     default:
//       return state;
//   }
// };

// const ProductsContext = createContext<{
//   state: ProductsState;
//   dispatch: React.Dispatch<ProductsAction>;
// }>({
//   state: initialState,
//   dispatch: () => null,
// });

// export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [state, dispatch] = useReducer(productsReducer, initialState);

//   return (
//     <ProductsContext.Provider value={{ state, dispatch }}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };

// export const useProducts = () => useContext(ProductsContext);

import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { Product, ProductsAction, ProductsState } from '../types';

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  loading: true,
  error: null,
  searchQuery: '',
  selectedCategory: 'all',
  sortOption: 'price-asc',
  currentPage: 1,
};

const applyFiltersAndSorting = (
  products: Product[],
  searchQuery: string,
  selectedCategory: string,
  sortOption: string
): Product[] => {
  // Apply search filter
  let filtered = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Apply category filter
  if (selectedCategory !== 'all') {
    filtered = filtered.filter(product =>
      product.category === selectedCategory
    );
  }

  // Apply sorting
  switch (sortOption) {
    case 'price-asc':
      return [...filtered].sort((a, b) => a.price - b.price);
    case 'price-desc':
      return [...filtered].sort((a, b) => b.price - a.price);
    case 'title-asc':
      return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    case 'title-desc':
      return [...filtered].sort((a, b) => b.title.localeCompare(a.title));
    default:
      return filtered;
  }
};

const productsReducer = (state: ProductsState, action: ProductsAction): ProductsState => {
  const newState = { ...state };

  switch (action.type) {
    case 'SET_PRODUCTS':
      newState.products = action.payload;
      newState.filteredProducts = applyFiltersAndSorting(
        action.payload,
        state.searchQuery,
        state.selectedCategory,
        state.sortOption
      );
      break;
    case 'SET_LOADING':
      newState.loading = action.payload;
      break;
    case 'SET_ERROR':
      newState.error = action.payload;
      break;
    case 'SET_SEARCH_QUERY':
      newState.searchQuery = action.payload;
      newState.currentPage = 1;
      newState.filteredProducts = applyFiltersAndSorting(
        state.products,
        action.payload,
        state.selectedCategory,
        state.sortOption
      );
      break;
    case 'SET_CATEGORY':
      newState.selectedCategory = action.payload;
      newState.currentPage = 1;
      newState.filteredProducts = applyFiltersAndSorting(
        state.products,
        state.searchQuery,
        action.payload,
        state.sortOption
      );
      break;
    case 'SET_SORT_OPTION':
      newState.sortOption = action.payload;
      newState.filteredProducts = applyFiltersAndSorting(
        state.products,
        state.searchQuery,
        state.selectedCategory,
        action.payload
      );
      break;
    case 'SET_PAGE':
      newState.currentPage = action.payload;
      break;
    default:
      return state;
  }

  return newState;
};

const ProductsContext = createContext<{
  state: ProductsState;
  dispatch: React.Dispatch<ProductsAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);