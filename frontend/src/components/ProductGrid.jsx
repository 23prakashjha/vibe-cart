import React from "react";
export default function ProductGrid({ products, onAdd }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
      {products.map((p) => (
        <div
          key={p.id}
          className="border rounded-lg bg-white p-4 shadow hover:shadow-md transition"
        >
          <h2 className="font-bold text-lg">{p.name}</h2>
          <p className="text-gray-600 mb-2">${p.price}</p>
          <button
            onClick={() => onAdd(p.id)}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

