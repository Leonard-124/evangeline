
// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import products from '../../assets/productdata';
// import right_arrow from '../../assets/images/right-arrow.png';

// const Productpath = () => {
//   const { id } = useParams();
//   const product = products.find(p => p.id === parseInt(id));

//   if (!product) return null;

//   return (
//     <div className="flex items-center gap-2 text-gray-600 text-sm my-4 mt-20 ml-6">
//       <Link to="/Shop">Shop</Link>
//       <img src={right_arrow} alt="arrow" className="w-7 h-7" />
//       <Link to={`/categories/${product.category}`}>{product.category}</Link>
//       <img src={right_arrow} alt="arrow" className="w-7 h-7" />
//       <span>{product.name}</span>
//     </div>
//   );
// };

// export default Productpath;
////////////////////////////////////////////////

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import right_arrow from '../../assets/images/right-arrow.png';

const Productpath = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/products/${id}`);
        if (!res.ok) return;
        const data = await res.json();
        setProduct(data);
      } catch {
        setProduct(null);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return null;

  return (
    <div className="flex items-center gap-2 text-gray-600 text-sm my-4 mt-20 ml-6">
      <Link to="/Shop">Shop</Link>
      <img src={right_arrow} alt="arrow" className="w-7 h-7" />
      <Link to={`/categories/${product.category}`}>{product.category}</Link>
      <img src={right_arrow} alt="arrow" className="w-7 h-7" />
      <span>{product.name}</span>
    </div>
  );
};

export default Productpath;