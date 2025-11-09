import React from "react";

export default function Cart({ cart, total, onRemove, onCheckout }) {
  if (!cart || cart.length === 0) {
    return (
      <div className="mt-6 text-center text-gray-600">
        Your cart is empty.
      </div>
    );
  }

  // ✅ Safely compute overall total in case backend sends wrong total
  const safeTotal = cart.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    const qty = parseInt(item.qty) || 0;
    return acc + price * qty;
  }, 0);

  const displayTotal = Number(total || safeTotal || 0).toFixed(2);

  return (
    <div className="mt-6 bg-white border rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-3">Your Cart</h2>

      {cart.map((item) => {
        // ✅ Safely parse numbers
        const price = parseFloat(item.price) || 0;
        const qty = parseInt(item.qty) || 0;
        const subtotal = (price * qty).toFixed(2);

        return (
          <div
            key={item.id || item.productId}
            className="flex justify-between items-center border-b py-2"
          >
            <span>
              {item.name || `Product #${item.productId}`} × {qty}
            </span>
            <div className="flex gap-3 items-center">
              <span>${subtotal}</span>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => onRemove(item.id || item.productId)}
              >
                ✕
              </button>
            </div>
          </div>
        );
      })}

      <div className="flex justify-between mt-4 font-bold">
        <span>Total:</span>
        <span>${displayTotal}</span>
      </div>

      <button
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        onClick={onCheckout}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
