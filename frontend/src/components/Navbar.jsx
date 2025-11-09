import React from "react";
export default function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-10">
      <h1 className="text-2xl font-bold text-blue-600">🛍️ Vibe Commerce</h1>
      <button
        onClick={onCartClick}
        className="relative bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Cart
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </button>
    </nav>
  );
}
