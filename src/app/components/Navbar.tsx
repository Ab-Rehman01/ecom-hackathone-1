// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav>
//       {/* Promo Banner */}
//       <div className="bg-black border-b text-white text-center p-2">
//         <p>Sign up and get 20% off your first order. <span className="font-semibold">Sign Up Now</span></p>
//       </div>

//       {/* Navbar */}
//       <div className="bg-white border-b p-5">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//           {/* Logo */}
//           <div>
//             <Link href="/">
//               <h1 className="text-black font-bold text-[22px] leading-[22px]">
//                 SHOP.CO
//               </h1>
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden md:flex space-x-7">
//             <Link href="/products" className="text-gray-600 hover:text-blue-600 transition">Shop</Link>
//             <Link href="/products" className="text-gray-600 hover:text-blue-600 transition">On Sale</Link>
//             <Link href="/newarrival" className="text-gray-600 hover:text-blue-600 transition">New Arrivals</Link>
//             <Link href="/brands" className="text-gray-600 hover:text-blue-600 transition">Brands</Link>
//           </div>

//           {/* Search Bar */}
//           <div className="hidden md:flex items-center">
//             <input
//               type="text"
//               className="px-4 py-2 w-[577px] h-[48px] border rounded-full text-sm text-gray-600 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Search for products"
//             />
//           </div>

//           {/* User and Cart Icons */}
//           <div className="flex items-center space-x-6">
//             {/* Cart Icon */}
//             <Link href="/cart" className="text-gray-600 hover:text-blue-600 transition relative">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 3h2l.4 2m0 0h13.17l.58-2H5.4M5.4 5L7 14h10l1.6-9H5.4zM9 20a2 2 0 100-4 2 2 0 000 4zM15 20a2 2 0 100-4 2 2 0 000 4z"
//                 />
//               </svg>
//             </Link>
            
//             {/* User Icon */}
//             <Link href="/user" className="text-gray-600 hover:text-blue-600 transition">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M5.121 18.364a4.992 4.992 0 001.415-3.536V9a4 4 0 118 0v5.828a4.992 4.992 0 001.415 3.536M12 14a3 3 0 110-6 3 3 0 010 6z"
//                 />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client"; // Add this directive
// src/app/components/Navbar.tsx
import Link from "next/link";
import { useCart } from "../context/CartContext"; // Use the context

export default function Navbar() {
  const { cartCount } = useCart();  // Access the cart count from the context

  return (
    <nav>
      {/* Navbar content */}
      <div className="bg-white border-b p-5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href="/">
              <h1 className="text-black font-bold text-[22px] leading-[22px]">SHOP.CO</h1>
            </Link>
          </div>

          {/* Cart Icon with Cart Count */}
          <div className="flex items-center space-x-6">
            <Link href="/cart" className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2m0 0h13.17l.58-2H5.4M5.4 5L7 14h10l1.6-9H5.4zM9 20a2 2 0 100-4 2 2 0 000 4zM15 20a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-2 py-1">{cartCount}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
