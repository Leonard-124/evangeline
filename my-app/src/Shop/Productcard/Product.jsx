

// import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import products from '../../assets/productdata';
// import { CartContext } from '../../Context/Context';

// const Product = () => {
//   const { id } = useParams();
//   const { addToCart } = useContext(CartContext);

//   // Find the product by id
//   const product = products.find(p => p.id === parseInt(id));

//   if (!product) {
//     return <div>Product not found.</div>;
//   }

//   return (
//     <>
//         <div className="product-details flex justify-around mb-9">
//         <div className=' flex flex-col gap-2 w-[240px] h-[240px] object-cover'>
//             <img src={product.image} alt={product.name} className="w-[240px] h-[240px] object-cover" />
//              <img src={product.image} alt={product.name} className="w-[240px] h-[240px] object-cover border-2 border-gray-200 rounded" />
//               <img src={product.image} alt={product.name} className="w-[240px] h-[240px] object-cover" />
//             </div>
//         <div className='h-[600px] w-[500px]'>
//             <img src={product.image} alt={product.name} className="w-full h-full object-cover" /></div>
//         <div className=' flex flex-col gap-20'>  
//         <h2 className='text-[35px] font-[600] text-gray-800'>{product.name}</h2>
//       <p className='tracking-[-1px] text-[20px] '>{product.description}</p>
//       <p className='line-through text-red-500'>Old Price: ${product.old_price}</p>
//       <p>New Price: ${product.new_price}</p>
//       <button onClick={() => addToCart(product)} className='bg-yellow-400 rounded p-2 font-[600] tracking-[-1px] text-[15px] cursor-pointer hover:bg-amber-600'>Add to Cart</button>
//       </div>
//     </div>
//     <hr />
//     </>

//   );
// };

// export default Product;


import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../Context/Context';
import Related from './Related/Related';

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/products/${id}`);
        if (!res.ok) throw new Error('Product not found');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError('Product not found.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="mt-10 text-center">Loading...</div>;
  if (error || !product) return <div className="mt-10 text-center text-red-500">{error || 'Product not found.'}</div>;

  return (
    <>
      <div className="product-details flex flex-wrap justify-around mb-9 mt-20">
        <div className='flex flex-col gap-2 w-[240px]'>
          <img src={product.imageUrl || 'https://via.placeholder.com/240'} alt={product.name} className="w-[240px] h-[240px] object-cover" />
          <img src={product.imageUrl || 'https://via.placeholder.com/240'} alt={product.name} className="w-[240px] h-[240px] object-cover border-2 border-gray-200 rounded" />
          <img src={product.imageUrl || 'https://via.placeholder.com/240'} alt={product.name} className="w-[240px] h-[240px] object-cover" />
        </div>
        <div className='h-[600px] w-[500px]'>
          <img src={product.imageUrl || 'https://via.placeholder.com/500x600'} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className='flex flex-col gap-8 max-w-[400px]'>
          <h2 className='text-[35px] font-[600] text-gray-800'>{product.name || 'Unnamed Product'}</h2>
          <p className='tracking-[-1px] text-[20px]'>{product.description || 'No description available.'}</p>
          <p className='line-through text-red-500'>Old Price: Ksh {product.oldPrice !== undefined ? product.oldPrice : 'N/A'}</p>
          <p>New Price: Ksh {product.newPrice !== undefined ? product.newPrice : 'N/A'}</p>
          <button
            onClick={() => addToCart(product)}
            className='bg-yellow-400 rounded p-2 font-[600] tracking-[-1px] text-[15px] cursor-pointer hover:bg-amber-600'
          >
            Add to Cart
          </button>
        </div>
      </div>
      <hr />
      <Related/>
    </>
  );
};

export default Product;