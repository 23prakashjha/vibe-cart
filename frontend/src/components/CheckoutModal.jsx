import React from "react";
import { useState } from "react";

export default function CheckoutModal({ onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, email);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-20">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-3 text-center">Checkout</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
