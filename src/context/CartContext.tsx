// "use client"; // Use this if you're using Next.js 13+ with the App Router

// import React, { createContext, useContext, useState, ReactNode } from "react";

// interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// }

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: number) => void;
//   clearCart: () => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   // Add item to cart
//   const addToCart = (item: CartItem) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
//       if (existingItem) {
//         // Update quantity if item already exists
//         return prevCart.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
//             : cartItem
//         );
//       } else {
//         // Add new item
//         return [...prevCart, item];
//       }
//     });
//   };

//   // Remove item from cart
//   const removeFromCart = (id: number) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   // Clear entire cart
//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };


"use client";

// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext(null);

// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cartCount, setCartCount] = useState(0);

//   return (
//     <CartContext.Provider value={{ cartCount, setCartCount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

// import React, { createContext, useContext, useState } from 'react';

// // Create the CartContext
// const CartContext = createContext<{
//   cartCount: number;
//   setCartCount: React.Dispatch<React.SetStateAction<number>>;
//   addToCart: (productId: number) => Promise<void>;
// } | null>(null);

// // CartProvider to wrap the app
// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cartCount, setCartCount] = useState(0);

//   const addToCart = async (productId: number) => {
//     try {
//       const nonce = 'your_actual_nonce_value'; // Replace with the actual nonce

//       const response = await fetch('https://bullet-mart.net.pk/wp-json/wc/store/cart/add-item', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'X-WP-Nonce': nonce,
//         },
//         body: JSON.stringify({
//           id: productId,
//           quantity: 1,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Cart Response:', data);

//         if (data && data.cart_contents_count !== undefined) {
//           setCartCount(data.cart_contents_count); // Update cart count
//         } else {
//           console.warn('Cart count not found in response. Response:', data);
//         }
//       } else {
//         const errorData = await response.json();
//         console.error('API Error:', response.status, response.statusText, errorData);
//       }
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cartCount, setCartCount, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Hook to use CartContext
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };


//8/1

// import React, { createContext, useContext, useState } from 'react';
// import axios from 'axios';

// // Create the CartContext
// const CartContext = createContext<{
//   cartCount: number;
//   setCartCount: React.Dispatch<React.SetStateAction<number>>;
//   addToCart: (productId: number) => Promise<void>;
// } | null>(null);

// // CartProvider to wrap the app
// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cartCount, setCartCount] = useState(0);

//   const addToCart = async (productId) => {
//     try {
//       const response = await fetch('https://bullet-mart.net.pk/?wc-ajax=add_to_cart', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'X-WP-Nonce': ajax_object.nonce,
//         }, 
//         body: JSON.stringify({
//           id: productId,
//           quantity: 1,
//         }),
//       });
  
//       if (response.ok) {
//         const data = await response.json();
//         console.log('Product added to cart:', data);
//       } else {
//         console.log('Error:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };
  

//   return (
//     <CartContext.Provider value={{ cartCount, setCartCount, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Hook to use CartContext
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };


//21 jan

"use client";

import React, { createContext, useContext, useState } from "react";

// Cart context type
interface CartItem {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add to cart function
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
