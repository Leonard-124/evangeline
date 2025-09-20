
// import React from 'react'
// import products from '../../../assets/productdata'

// const Related = () => {
//   return (
//     <div>
//       <h2 className='text-[25px] font-[600] text-gray-800'>Related products</h2>
//       <div>
//         {products.filter(product => product.category === "Related").map(filteredProduct => (
//           <div key={filteredProduct.id}>
//             <img src={filteredProduct.image} alt={filteredProduct.name} className="w-[240px] h-[240px] object-cover" />
//             <h3>{filteredProduct.name}</h3>
//             <p>{filteredProduct.description}</p>
//             <p>Price: ${filteredProduct.new_price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Related


import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Related = () => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Fetch the current product
    const fetchCurrentProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/products/${id}`);
        if (!res.ok) return;
        const data = await res.json();
        setCurrentProduct(data);
      } catch {
        setCurrentProduct(null);
      }
    };
    fetchCurrentProduct();
  }, [id]);

  useEffect(() => {
    // Fetch related products by category (excluding current product)
    const fetchRelatedProducts = async () => {
      if (!currentProduct || !currentProduct.category) return;
      try {
        const res = await fetch(`http://localhost:3000/api/products?category=${currentProduct.category}`);
        if (!res.ok) return;
        const data = await res.json();
        // Exclude the current product from related products
        const filtered = data.filter(p => (p._id || p.id) !== (currentProduct._id || currentProduct.id));
        setRelatedProducts(filtered);
      } catch {
        setRelatedProducts([]);
      }
    };
    fetchRelatedProducts();
  }, [currentProduct]);

  if (!currentProduct) return null;

  return (
    <div>
      <h2 className='text-[25px] font-[600] text-gray-800 mb-4'>Related products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {relatedProducts.length === 0 ? (
          <p className="text-gray-400">No related products found.</p>
        ) : (
          relatedProducts.map(product => (
            <div key={product._id || product.id} className="border rounded p-3 flex flex-col items-center">
              <Link to={`/productcard/product/${product._id || product.id}`}>
                <img
                  src={product.imageUrl || product.image || 'https://via.placeholder.com/240'}
                  alt={product.name}
                  className="w-[240px] h-[240px] object-cover mb-2"
                />
                <h3 className="font-semibold">{product.name}</h3>
              </Link>
              <p className="text-sm text-gray-500">{product.description}</p>
              <p className="text-red-600 font-bold mt-1">Price: Ksh {product.newPrice !== undefined ? product.newPrice : product.new_price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Related;
