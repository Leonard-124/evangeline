

// import React, { useContext, useState } from 'react';
// import products from '../../assets/productdata';
// import { CartContext } from '../../Context/Context';

// const Groups = () => {
//   const { addToCart } = useContext(CartContext);
//   const [selectedCategory, setSelectedCategory] = useState("Phones");

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   // Filter products by selected category
//   const filteredProducts = products.filter(
//     (product) => product.category === selectedCategory
//   );

//   const categories = [
//     { key: "Phones", label: "Phones & Computers" },
//     { key: "Crockery", label: "Crockery & Utensils" },
//     { key: "Foods", label: "Foods & Snacks" },
//     { key: "Clothing", label: "Clothings & Wearables" },
//     { key: "Footwear", label: "Footwears" },
//     { key: "Accessories", label: "Accessories" },
//     { key: "Beauty", label: "Beauty Products" },
//     { key: "Sports", label: "Sports Equipment" },
//     { key: "Machines", label: "Machines & Electronics" },
//     { key: "Drinks", label: "Drinks & Beverages" },
//     { key: "Others", label: "Others" },
//   ];

//   return (
//     <div className="flex mt-20 w-full h-full ">
//       {/* Sidebar Categories */}
//       <div className="flex flex-col gap-2 w-[300px] h-[500px] p-4 border-r text-lg font-mono text-gray-700 mb-40">
//         {categories.map((cat) => (
//           <div
//             key={cat.key}
//             onClick={() => handleCategoryClick(cat.key)}
//             className={`p-2 border-b rounded cursor-pointer transition-colors duration-200 hover:bg-gray-100 ${
//               selectedCategory === cat.key ? "bg-gray-200 font-semibold" : ""
//             }`}
//           >
//             {cat.label}
//           </div>
//         ))}
//       </div>

//       {/* Product Display */}
//       <div className="bg-white w-full p-4">
//         <h1 className="text-center text-red-500 text-xl font-bold tracking-tight mb-4">
//           Featured Products
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProducts.length === 0 ? (
//             <p className="col-span-full text-center text-gray-400 mt-8">
//               No products found for this category.
//             </p>
//           ) : (
//             filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="flex flex-col items-center rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border"
//               >
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-48  object-cover rounded-md mb-3"
//                 />
//                 <h2 className="font-semibold text-gray-800">{product.name}</h2>
//                 <p className="text-sm text-gray-500">{product.description}</p>
//                 <p className="line-through text-gray-400">${product.old_price}</p>
//                 <p className="text-red-600 font-bold mt-2">${product.new_price}</p>
//                 <button className="mt-3 px-4 py-2 bg-amber-500 text-white text-sm rounded-lg hover:bg-blue-600 mb-1"
//                   onClick={() => addToCart(product)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Groups;
/////////////////////////////////////////////////////////////////////

// import React, { useContext, useState, useEffect } from 'react';
// import { CartContext } from '../../Context/Context';
// import { Link } from 'react-router-dom';

// const categories = [
//   { key: "phones", label: "Phones & Computer" },
//   { key: "crockery", label: "Crockery & Utensils" },
//   { key: "foods", label: "Foods & Snacks" },
//   { key: "clothing", label: "Clothings & Wearables" },
//   { key: "footwear", label: "Footwears" },
//   { key: "accessories", label: "Accessories" },
//   { key: "beauty", label: "Beauty Products" },
//   { key: "sports", label: "Sports Equipment" },
//   { key: "machines", label: "Machines & Electronics" },
//   { key: "drinks", label: "Drinks & Beverages" },
//   { key: "others", label: "Others" },
// ];

// const Groups = () => {
//   const { addToCart } = useContext(CartContext);
//   const [selectedCategory, setSelectedCategory] = useState("phones");
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // Fetch products when category or searchQuery changes
//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const params = new URLSearchParams();
//         if (selectedCategory) params.append('category', selectedCategory);
//         if (searchQuery) params.append('search', searchQuery);
//         const res = await fetch(`http://localhost:3000/api/products?${params.toString()}`);
//         if (!res.ok) throw new Error('Failed to fetch products');
//         const data = await res.json();
//         setProducts(Array.isArray(data) ? data : []);
//       } catch (err) {
//         setError('Could not load products.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, [selectedCategory, searchQuery]);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     setSearch('');
//     setSearchQuery('');
//   };

//   const handleSearchIconClick = () => {
//     setSearchQuery(search);
//   };

//   const handleSearchInputKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       handleSearchIconClick();
//     }
//   };

//   return (
//     <div className="flex mt-20 w-full h-full ">
//       {/* Sidebar Categories */}
//       <div className="flex flex-col gap-2 w-[300px] h-[500px] p-4 border-r text-lg font-mono text-gray-700 mb-40">
//         {categories.map((cat) => (
//           <div
//             key={cat.key}
//             onClick={() => handleCategoryClick(cat.key)}
//             className={`p-2 border-b rounded cursor-pointer transition-colors duration-200 hover:bg-gray-100 ${
//               selectedCategory === cat.key ? "bg-gray-200 font-semibold" : ""
//             }`}
//           >
//             {cat.label}
//           </div>
//         ))}
//       </div>

//       {/* Product Display */}
//       <div className="bg-white w-full p-4">
//         <h1 className="text-center text-red-500 text-xl font-bold tracking-tight mb-4">
//           Featured Products
//         </h1>
//         <div className="mb-6 flex justify-center">
//           <div className="relative w-1/2">
//             <input
//               type="text"
//               value={search}
//               onChange={e => setSearch(e.target.value)}
//               placeholder={`Search ${selectedCategory.toLowerCase()}...`}
//               className="border rounded px-4 py-2 w-full"
//               onKeyDown={handleSearchInputKeyDown}
//             />
//             <button
//               onClick={handleSearchIconClick}
//               className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//               aria-label="Search"
//               type="button"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
//                 viewBox="0 0 24 24" stroke="currentColor">
//                 <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
//                 <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2"/>
//               </svg>
//             </button>
//           </div>
//         </div>
//         {loading ? (
//           <div className="text-center text-gray-400 mt-8">Loading...</div>
//         ) : error ? (
//           <div className="text-center text-red-500 mt-8">{error}</div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {products.length === 0 ? (
//               <p className="col-span-full text-center text-gray-400 mt-8">
//                 No products found for this category or search.
//               </p>
//             ) : (
//               products.map((product) => (
//                 <div
//                   key={product._id}
//                   className="flex flex-col items-center rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border"
//                 >
//                   <Link to={`/productcard/product/${product._id}`} className="w-full">
//                     <img
//                       src={product.imageUrl || 'https://via.placeholder.com/300x200?text=No+Image'}
//                       alt={product.name}
//                       className="w-full h-48 object-cover rounded-md mb-3"
//                     />
//                     <h2 className="font-semibold text-gray-800">{product.name}</h2>
//                   </Link>
//                   <p className="text-sm text-gray-500">{product.description}</p>
//                   <p className="line-through text-gray-400">Ksh {product.oldPrice}</p>
//                   <p className="text-red-600 font-bold mt-2">Ksh {product.newPrice}</p>
//                   <button className="mt-3 px-4 py-2 bg-amber-500 text-white text-sm rounded-lg hover:bg-blue-600 mb-1"
//                     onClick={() => addToCart(product)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               ))
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Groups;
//////////////////////////////////////////////////////////////////////

// src/pages/Groups.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/Context';

const Groups = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState('phones');
  const [search, setSearch] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch products
  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (selectedCategory) params.append('category', selectedCategory);
        if (searchQuery) params.append('search', searchQuery);

        //const baseUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, '');
        //const res = await fetch(`${baseUrl}/products?${params}`);
        const res = await fetch(`http://localhost:3000/api/products?${params}`)

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        console.log('Fetched products:', data);

        if (isMounted) {
          if (Array.isArray(data)) {
            setProducts(data);
          } else if (Array.isArray(data.data)) {
            setProducts(data.data);
          } else {
            setProducts([]);
          }
        }
      } catch (err) {
        console.error('Fetch error:', err);
        if (isMounted) setError('Could not load products.');
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProducts();
    return () => {
      isMounted = false;
    };
  }, [selectedCategory, searchQuery]);

  const categories = [
    { key: 'phones', label: 'Phones & Computer' },
    { key: 'crockery', label: 'Crockery & Utensils' },
    { key: 'foods', label: 'Foods & Snacks' },
    { key: 'clothing', label: 'Clothings & Wearables' },
    { key: 'footwear', label: 'Footwears' },
    { key: 'accessories', label: 'Accessories' },
    { key: 'beauty', label: 'Beauty Products' },
    { key: 'sports', label: 'Sports Equipment' },
    { key: 'machines', label: 'Machines & Electronics' },
    { key: 'drinks', label: 'Drinks & Beverages' },
    { key: 'others', label: 'Others' },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearch('');
    setSearchQuery('');
  };

  const handleSearch = () => setSearchQuery(search);

  const ProductCard = ({ product }) => (
    <div className="flex flex-col items-center rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border">
      <Link to={`/productcard/product/${product._id}`} className="w-full">
        <img
          src={product.imageUrl || 'https://via.placeholder.com/300x200?text=No+Image'}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-3"
        />
        <h2 className="font-semibold text-gray-800">{product.name}</h2>
      </Link>
      <p className="text-sm text-gray-500">{product.description}</p>
      {product.oldPrice && (
        <p className="line-through text-gray-400">Ksh {product.oldPrice}</p>
      )}
      <p className="text-red-600 font-bold mt-2">Ksh {product.newPrice}</p>
      <button
        className="mt-3 px-4 py-2 bg-amber-500 text-white text-sm rounded-lg hover:bg-blue-600 mb-1"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );

  return (
    <div className="flex mt-20 w-full h-full">
      {/* Sidebar */}
      <aside className="flex flex-col gap-2 w-[300px] h-[500px] p-4 border-r text-lg font-mono text-gray-700 mb-40">
        {categories.map((cat) => (
          <div
            key={cat.key}
            onClick={() => handleCategoryClick(cat.key)}
            className={`p-2 border-b rounded cursor-pointer transition-colors duration-200 hover:bg-gray-100 ${
              selectedCategory === cat.key ? 'bg-gray-200 font-semibold' : ''
            }`}
          >
            {cat.label}
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main className="bg-white w-full p-4">
        <h1 className="text-center text-red-500 text-xl font-bold tracking-tight mb-4">
          Featured Products
        </h1>

        {/* Search */}
        <div className="mb-6 flex justify-center">
          <div className="relative w-1/2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search ${selectedCategory.toLowerCase()}...`}
              className="border rounded px-4 py-2 w-full"
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              aria-label="Search"
              type="button"
            >
              🔍
            </button>
          </div>
        </div>

        {/* Products */}
        {loading && (
          <div className="text-center text-gray-400 mt-8">Loading...</div>
        )}
        {error && (
          <div className="text-center text-red-500 mt-8">{error}</div>
        )}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.length === 0 ? (
              <p className="col-span-full text-center text-gray-400 mt-8">
                No products found for this category or search.
              </p>
            ) : (
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Groups;
