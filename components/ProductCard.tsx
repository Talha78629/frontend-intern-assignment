// import Image from 'next/image';
// import Link from 'next/link';
// import { Product } from '../types';

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard = ({ product }: ProductCardProps) => {
//   return (
//     <Link href={`/products/${product.id}`} passHref>
//       <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
//         <div className="relative h-48 w-full">
//           <Image
//             src={product.image}
//             alt={product.title}
//             fill
//             style={{ objectFit: 'contain' }}
//             className="p-4"
//             priority={false}
//           />
//         </div>
//         <div className="p-4">
//           <h3 className="text-lg text-gray-800 font-semibold mb-1 truncate">{product.title}</h3>
//           <p className="text-gray-600 text-sm mb-2 capitalize">{product.category}</p>
//           <p className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
      <Link href={`/products/${product.id}`} passHref>
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer h-full flex flex-col border border-gray-100 p-2">
          {/* Smaller image container */}
          <div className="relative w-full h-24 mb-2"> {/* Reduced height */}
            <Image
              src={product.image}
              alt={product.title}
              fill
              style={{ objectFit: 'contain' }}
              className="p-1" // Reduced padding
              sizes="80px" // Smaller expected size
            />
          </div>
          <div className="mt-auto">
            <h3 className="text-xs text-gray-700 font-medium line-clamp-2 mb-1">
              {product.title}
            </h3>
            <p className="text-[10px] text-gray-500 mb-1">
              {product.category}
            </p>
            <p className="text-xs font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
      </Link>
    );
  };

export default ProductCard;