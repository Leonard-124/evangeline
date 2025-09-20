
import React, { useContext, useRef, useEffect, useState } from 'react';
import { CartContext } from '../Context/Context';
import { SearchContext } from '../Context/Context';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  const { addToCart } = useContext(CartContext);
  const { search = '' } = useContext(SearchContext) || {};
  const scrollerRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        setError('Could not load products.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const scrollByOffset = (offset) => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const filteredProducts = products.filter(product =>
    (product.name || '').toLowerCase().includes((search || '').toLowerCase())
  );

  if (loading) return <div className="mt-7 text-center">Loading...</div>;
  if (error) return <div className="mt-7 text-center text-red-500">{error}</div>;

  return (
    <div className="mt-7">
      <hr />
      <h1 className="text-[40px] text-gray-600 mt-12 text-center">New Arrivals</h1>
      <div className="relative mt-6 -mx-4 px-4">
        {/* Left Scroll Button */}
        {filteredProducts.length > 2 && (
          <button
            onClick={() => scrollByOffset(-300)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 shadow"
            aria-label="Scroll left"
          >
            ◀
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto py-4 px-2 no-scrollbar snap-x snap-mandatory scroll-smooth"
          style={{ WebkitOverflowScrolling: 'touch' }}
          aria-label="New Arrivals - swipe to browse"
        >
          {filteredProducts.length === 0 ? (
            <div className="w-full text-center text-gray-500 py-8">No new arrivals found.</div>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="snap-start flex-shrink-0 w-64 md:w-72 lg:w-80 border border-gray-300 rounded shadow-sm bg-white overflow-hidden"
                role="group"
                aria-label={product.name}
              >
                <Link to={`/productcard/product/${product._id}`}>
                  <img
                    src={product.imageUrl || 'https://via.placeholder.com/300x200?text=No+Image'}
                    alt={product.name || 'Product'}
                    className="w-full h-48 object-cover"
                    draggable={false}
                  />
                  <h2 className="text-lg font-semibold mt-2 text-center">{product.name || 'Unnamed Product'}</h2>
                </Link>
                <div className="p-3 flex flex-col items-center">
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description || 'No description available.'}</p>
                  <div className="mt-3 ">
                    <div>
                      <p className="text-gray-500 line-through text-sm">
                        Was: Ksh {product.oldPrice !== undefined ? product.oldPrice : 'N/A'}
                      </p>
                      <p className="text-red-500 font-bold">
                        Now: Ksh {product.newPrice !== undefined ? product.newPrice : 'N/A'}
                      </p>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-yellow-500 text-white w-40 px-3 py-2 rounded shadow hover:bg-yellow-600 cursor-pointer"
                      aria-label={`Add ${product.name || 'product'} to cart`}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Scroll Button */}
        {filteredProducts.length > 2 && (
          <button
            onClick={() => scrollByOffset(300)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 shadow"
            aria-label="Scroll right"
          >
            ▶
          </button>
        )}
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default NewArrivals;

