export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  export interface ProductsState {
    products: Product[];
    filteredProducts: Product[];
    loading: boolean;
    error: string | null;
    searchQuery: string;
    selectedCategory: string;
    sortOption: string;
    currentPage: number;
  }
  
  export type ProductsAction =
    | { type: 'SET_PRODUCTS'; payload: Product[] }
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'SET_ERROR'; payload: string | null }
    | { type: 'SET_SEARCH_QUERY'; payload: string }
    | { type: 'SET_CATEGORY'; payload: string }
    | { type: 'SET_SORT_OPTION'; payload: string }
    | { type: 'SET_PAGE'; payload: number };