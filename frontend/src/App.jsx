import React, { useEffect, useState } from "react";
import {
  getProducts,
  getCart,
  addToCart,
  removeFromCart,
  checkout,
} from "./api";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import CheckoutModal from "./components/CheckoutModal";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [receipt, setReceipt] = useState(null);

  // ✅ Load cart safely
  const loadCart = async () => {
    try {
      const { data } = await getCart();
      setCart(data?.cart || []);
      setTotal(data?.total || 0);
    } catch (err) {
      console.error("Failed to load cart:", err);
      setCart([]);
      setTotal(0);
    }
  };

  // ✅ Load products and cart on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProducts();
        setProducts(res?.data || []);
      } catch (err) {
        console.error("Failed to load products:", err);
        setProducts([]);
      }
      await loadCart();
    };

    fetchData();
  }, []);

  // ✅ Add to cart handler
  const handleAdd = async (id) => {
    try {
      await addToCart(id, 1);
      await loadCart();
    } catch (err) {
      console.error("Add to cart failed:", err);
    }
  };

  // ✅ Remove from cart handler
  const handleRemove = async (id) => {
    try {
      await removeFromCart(id);
      await loadCart();
    } catch (err) {
      console.error("Remove from cart failed:", err);
    }
  };

  // ✅ Checkout handler
  const handleCheckout = async (name, email) => {
    try {
      const { data } = await checkout(cart, name, email);
      setReceipt(data);
      setShowCheckout(false);
      await loadCart();
    } catch (err) {
      console.error("Checkout failed:", err);
    }
  };

  // ✅ Reset after viewing receipt
  const handleResetReceipt = () => {
    setReceipt(null);
    setShowCart(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar
        cartCount={cart.length}
        onCartClick={() => setShowCart(!showCart)}
      />

      {/* Main Section */}
      <main className="flex-1 p-4 max-w-6xl mx-auto">
        <ProductGrid products={products} onAdd={handleAdd} />

        {showCart && (
          <Cart
            cart={cart}
            total={total}
            onRemove={handleRemove}
            onCheckout={() => setShowCheckout(true)}
          />
        )}

        {showCheckout && (
          <CheckoutModal
            onClose={() => setShowCheckout(false)}
            onSubmit={handleCheckout}
          />
        )}

        {receipt && (
          <div className="mt-6 p-6 bg-green-100 border rounded-lg text-center shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-green-700">
              🎉 Thank You!
            </h2>
            <p className="mb-2 text-gray-700">
              Your order has been successfully placed.
            </p>
            <p className="text-lg font-medium">
              <strong>Total:</strong> ${Number(receipt.total || 0).toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">
              {new Date(receipt.timestamp).toLocaleString()}
            </p>
            <button
              onClick={handleResetReceipt}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

