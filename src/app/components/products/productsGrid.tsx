// 'use client';

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { useCart } from '../../context/CartContext';  // Importing the CartContext hook
// import '../../globals.css';

// const ProductsGrid = () => {
//   const [products, setProducts] = useState<any[]>([]);
//   const [cartMessage, setCartMessage] = useState<string | null>(null); // For feedback messages

//   useEffect(() => {
//     fetch('https://bullet-mart.net.pk/wp-json/wp/v2/product?_embed')
//       .then((response) => response.json())
//       .then((data: Product[]) => {
//         setProducts(data);
//       })
//       .catch((error) => console.error('پراڈکٹس لوڈ کرنے میں مسئلہ:', error));
//   }, []);

//   const removeHtmlTags = (html: string): string => {
//     return html.replace(/<\/?[^>]+(>|$)/g, '');
//   };

//   const addToCart = async (productId: number) => {
//     try {
//       const response = await fetch('https://bullet-mart.net.pk/wp-json/wc/store/cart/items', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           id: productId, // WooCommerce product ID
//           quantity: 1, // Default quantity
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setCartMessage('پراڈکٹ کامیابی سے کارٹ میں شامل کر دی گئی ہے!');
//         console.log('Cart Response:', data); // For debugging
//       } else {
//         setCartMessage('کارٹ میں پراڈکٹ شامل کرنے میں مسئلہ ہوا۔');
//       }
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       setCartMessage('کارٹ میں پراڈکٹ شامل کرنے میں مسئلہ ہوا۔');
//     }
//   };

//   return (
//     <div className="products-page">
//       <h1>تمام پراڈکٹس</h1>
//       {cartMessage && <p className="cart-message">{cartMessage}</p>} {/* Feedback Message */}
//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <h2>{product.title.rendered}</h2>
//             <img
//               src={
//                 product._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
//                 'https://via.placeholder.com/150'
//               }
//               alt={product.title.rendered}
//             />
//             <p>{removeHtmlTags(product.excerpt.rendered)}</p>
//             <p>قیمت: {product.price || 'موجود نہیں'}</p> {/* Show product price */}
//             <Link href={`/products/${product.id}`}>مزید پڑھیں</Link>
//             {/* Add to Cart Button */}
//             <button onClick={() => addToCart(product.id)} className="add-to-cart-btn">
//               کارٹ میں شامل کریں
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsGrid;

// 'use client';

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';

// const ProductsGrid = () => {
//   const [products, setProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState<string | null>(null); // Error state

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(
//           'https://bullet-mart.net.pk/wp-json/wp/v2/product?_embed'
//         );
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (err) {
//         setError('پراڈکٹس لوڈ کرنے میں مسئلہ ہے۔ براہ کرم دوبارہ کوشش کریں۔');
//         console.error('Error fetching products:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const removeHtmlTags = (html: string): string => {
//     return html.replace(/<\/?[^>]+(>|$)/g, '');
//   };

//   if (loading) {
//     return <p>...loading</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className="products-page">
//       <h2 className="">All Products</h2>
//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <h2>{product.title?.rendered || 'title not available'}</h2>
//             <img
//               src={
//                 product._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
//                 'https://via.placeholder.com/150'
//               }
//               alt={product.title?.rendered || 'product image'}
//               className="product-image"
//             />
//             <p className="product-description">
//               {removeHtmlTags(product.excerpt?.rendered || '').slice(0, 100)}...
//             </p>
//             <p>Price: {product.price || 'product not available'}</p>
//             <Link href={`/products/${product.id}`} className="details-link">
//               more detail
//             </Link>
//             <button
//               onClick={() => alert(`Product ID: ${product.id} added to cart!`)}
//               className="add-to-cart-btn"
//             >
//               Add to Cart            </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsGrid;


'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const ProductsGrid = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://bullet-mart.net.pk/wp-json/wp/v2/product?_embed'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError('پراڈکٹس لوڈ کرنے میں مسئلہ ہے۔ براہ کرم دوبارہ کوشش کریں۔');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const removeHtmlTags = (html: string): string => {
    return html.replace(/<\/?[^>]+(>|$)/g, '');
  };
  const addToCart = async (productId: number) => {
    try {
      const response = await fetch(
        'https://bullet-mart.net.pk/wp-json/wc/store/cart/items',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: productId, // Product ID
            quantity: 1,   // Default quantity
          }),
          credentials: 'include', // Ensure cookies are sent for session handling
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        alert('پراڈکٹ کامیابی سے کارٹ میں شامل کر دی گئی ہے!');
        console.log('Cart Response:', data); // Check if the response contains the updated cart items
        fetchCartItems(); // Fetch updated cart items after adding to cart
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'Failed to add product to cart.'}`);
        console.log('API Error:', errorData); // Log the API error
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('کارٹ میں پراڈکٹ شامل کرنے میں مسئلہ ہوا');
    }
  };
  
  const fetchCartItems = async () => {
    try {
      const response = await fetch(
        'https://bullet-mart.net.pk/wp-json/wc/store/cart/items'
      );
      if (response.ok) {
        const cartItems = await response.json();
        console.log('Updated Cart Items:', cartItems);
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  if (loading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="products-page">
      <h2 className="">All Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.title?.rendered || 'Title Not Available'}</h2>
            <img
              src={
                product._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
                'https://via.placeholder.com/150'
              }
              alt={product.title?.rendered || 'Product Image'}
              className="product-image"
            />
            <p className="product-description">
              {removeHtmlTags(product.excerpt?.rendered || '').slice(0, 100)}...
            </p>
            <p>Price: {product.price || 'Product not available'}</p>
            <Link href={`/products/${product.id}`} className="details-link">
              more detail
            </Link>
            <button
              onClick={() => addToCart(product.id)} // Call the updated addToCart function
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
