// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import ErrorMessage from '../../components/ErrorMessage';
// import LoadingSpinner from '../../components/LoadingSpinner';
// import { fetchProductById } from '../../lib/api';
// import { Product } from '../../types';
// import Image from 'next/image';
// import Link from 'next/link';

// const ProductDetails = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!id) return;

//     const loadProduct = async () => {
//       try {
//         const data = await fetchProductById(id as string);
//         setProduct(data);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'Product not found or API error');
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadProduct();
//   }, [id]);

//   if (loading) return <LoadingSpinner />;
//   if (error) return <ErrorMessage message={error} />;
//   if (!product) return <ErrorMessage message="Product not found." />;

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
//         <Link href="/" passHref>
//           <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//             ← Back to Products
//           </button>
//         </Link>
//         <div className="flex flex-col md:flex-row gap-6">
//           <div className="md:w-1/2 relative h-64">
//             <Image
//               src={product.image}
//               alt={product.title}
//               fill
//               style={{ objectFit: 'contain' }}
//               className="p-4"
//               priority={false}
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//             />
//           </div>
//           <div className="md:w-1/2">
//             <h1 className="text-2xl text-gray-700 font-bold mb-2">{product.title}</h1>
//             <p className="text-gray-600 mb-2 capitalize">{product.category}</p>
//             <p className="text-xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
//             <p className="text-gray-700 mb-4">{product.description}</p>
//             <div className="flex items-center">
//               <span className="text-yellow-500">★ {product.rating.rate}</span>
//               <span className="text-gray-500 ml-2">({product.rating.count} reviews)</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;


import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage';
import LoadingSpinner from '../../components/LoadingSpinner';
import { fetchProductById } from '../../lib/api';
import { Product } from '../../types';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id as string);
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Product not found or API error');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) return <ErrorMessage message="Product not found." />;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-4">
        <Link href="/" passHref>
          <button className="mb-3 px-3 py-1.5 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
            ← Back to Products
          </button>
        </Link>
        
        <div className="flex flex-col md:flex-row gap-4">
          {/* Compact Image Section */}
          <div className="md:w-2/5 relative h-48">
            <Image
              src={product.image}
              alt={product.title}
              fill
              style={{ objectFit: 'contain' }}
              className="p-2"
              priority={true}
              sizes="(max-width: 768px) 50vw, 30vw"
            />
          </div>
          
          {/* Compact Details Section */}
          <div className="md:w-3/5">
            <h1 className="text-lg font-bold text-gray-800 mb-1">{product.title}</h1>
            <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
            <p className="text-lg font-semibold text-blue-600 mb-3">${product.price.toFixed(2)}</p>
            
            <div className="text-sm text-gray-700 mb-3 space-y-2">
              {product.description.split(', ').map((item, index) => (
                <div key={index}>• {item.trim()}</div>
              ))}
            </div>
            
            <div className="flex items-center text-sm">
              <span className="text-yellow-500">★ {product.rating.rate}</span>
              <span className="text-gray-500 ml-1">({product.rating.count} reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;