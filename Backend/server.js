const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

// ✅ Generate 100+ Mock Products
const products = [
  { id: 1, name: "Wireless Headphones", price: 99.99 },
  { id: 2, name: "Bluetooth Speaker", price: 49.99 },
  { id: 3, name: "Smart Watch", price: 199.99 },
  { id: 4, name: "Laptop Stand", price: 29.99 },
  { id: 5, name: "USB-C Hub", price: 39.99 },
  { id: 6, name: "Gaming Mouse", price: 59.99 },
  { id: 7, name: "Mechanical Keyboard", price: 89.99 },
  { id: 8, name: "Portable SSD 1TB", price: 129.99 },
  { id: 9, name: "HD Webcam", price: 79.99 },
  { id: 10, name: "Ergonomic Chair", price: 249.99 },
  { id: 11, name: "4K Monitor", price: 399.99 },
  { id: 12, name: "Smartphone Tripod", price: 24.99 },
  { id: 13, name: "Desk Lamp", price: 34.99 },
  { id: 14, name: "Wireless Charger", price: 19.99 },
  { id: 15, name: "Power Bank 20000mAh", price: 45.99 },
  { id: 16, name: "Noise Cancelling Earbuds", price: 149.99 },
  { id: 17, name: "Smart Home Hub", price: 89.99 },
  { id: 18, name: "Action Camera", price: 179.99 },
  { id: 19, name: "Fitness Tracker", price: 59.99 },
  { id: 20, name: "VR Headset", price: 299.99 },
  { id: 21, name: "LED Light Strip", price: 15.99 },
  { id: 22, name: "Wireless Router", price: 99.99 },
  { id: 23, name: "Smart Doorbell", price: 129.99 },
  { id: 24, name: "Robot Vacuum", price: 299.99 },
  { id: 25, name: "Coffee Grinder", price: 49.99 },
  { id: 26, name: "Air Fryer", price: 89.99 },
  { id: 27, name: "Electric Kettle", price: 29.99 },
  { id: 28, name: "Toaster 4-Slice", price: 39.99 },
  { id: 29, name: "Blender", price: 59.99 },
  { id: 30, name: "Microwave Oven", price: 129.99 },
  { id: 31, name: "Mini Projector", price: 149.99 },
  { id: 32, name: "Smart TV 50\"", price: 499.99 },
  { id: 33, name: "Air Purifier", price: 119.99 },
  { id: 34, name: "Electric Toothbrush", price: 59.99 },
  { id: 35, name: "Hair Dryer", price: 39.99 },
  { id: 36, name: "Massage Gun", price: 99.99 },
  { id: 37, name: "Yoga Mat", price: 24.99 },
  { id: 38, name: "Dumbbell Set", price: 79.99 },
  { id: 39, name: "Water Bottle", price: 14.99 },
  { id: 40, name: "Running Shoes", price: 89.99 },
  { id: 41, name: "Backpack", price: 59.99 },
  { id: 42, name: "Sunglasses", price: 29.99 },
  { id: 43, name: "Wallet", price: 34.99 },
  { id: 44, name: "Leather Belt", price: 24.99 },
  { id: 45, name: "Smart Glasses", price: 199.99 },
  { id: 46, name: "Tablet 10-inch", price: 299.99 },
  { id: 47, name: "E-reader", price: 139.99 },
  { id: 48, name: "Bluetooth Car Adapter", price: 19.99 },
  { id: 49, name: "Car Phone Mount", price: 14.99 },
  { id: 50, name: "Dash Camera", price: 99.99 },
  { id: 51, name: "Desk Organizer", price: 19.99 },
  { id: 52, name: "Whiteboard", price: 29.99 },
  { id: 53, name: "Planner Notebook", price: 9.99 },
  { id: 54, name: "Wireless Presenter", price: 34.99 },
  { id: 55, name: "Noise Machine", price: 49.99 },
  { id: 56, name: "Bedside Lamp", price: 39.99 },
  { id: 57, name: "Electric Blanket", price: 59.99 },
  { id: 58, name: "Smart Thermostat", price: 129.99 },
  { id: 59, name: "Portable Fan", price: 19.99 },
  { id: 60, name: "Camera Tripod", price: 49.99 },
  { id: 61, name: "External Hard Drive 2TB", price: 89.99 },
  { id: 62, name: "Drone with Camera", price: 499.99 },
  { id: 63, name: "Gaming Chair", price: 229.99 },
  { id: 64, name: "Mechanical Pencil", price: 5.99 },
  { id: 65, name: "Art Paint Set", price: 29.99 },
  { id: 66, name: "Drawing Tablet", price: 249.99 },
  { id: 67, name: "Sewing Machine", price: 149.99 },
  { id: 68, name: "Electric Guitar", price: 299.99 },
  { id: 69, name: "Ukulele", price: 49.99 },
  { id: 70, name: "Studio Microphone", price: 89.99 },
  { id: 71, name: "Pop Filter", price: 14.99 },
  { id: 72, name: "Audio Mixer", price: 159.99 },
  { id: 73, name: "Portable Projector Screen", price: 79.99 },
  { id: 74, name: "Tripod Ring Light", price: 44.99 },
  { id: 75, name: "Streaming Webcam", price: 69.99 },
  { id: 76, name: "Smart Plug", price: 24.99 },
  { id: 77, name: "Smart LED Bulb", price: 19.99 },
  { id: 78, name: "Wi-Fi Range Extender", price: 39.99 },
  { id: 79, name: "Portable Monitor", price: 189.99 },
  { id: 80, name: "Mini Fridge", price: 129.99 },
  { id: 81, name: "Wireless Mouse", price: 29.99 },
  { id: 82, name: "Standing Desk", price: 299.99 },
  { id: 83, name: "Laptop Cooling Pad", price: 34.99 },
  { id: 84, name: "Keyboard Wrist Rest", price: 12.99 },
  { id: 85, name: "Cable Organizer", price: 9.99 },
  { id: 86, name: "Headphone Stand", price: 19.99 },
  { id: 87, name: "Desk Pad", price: 14.99 },
  { id: 88, name: "Monitor Arm", price: 59.99 },
  { id: 89, name: "Laptop Sleeve", price: 24.99 },
  { id: 90, name: "Phone Case", price: 19.99 },
  { id: 91, name: "Wireless Earbuds", price: 89.99 },
  { id: 92, name: "Smart Scale", price: 49.99 },
  { id: 93, name: "Sleep Tracker", price: 69.99 },
  { id: 94, name: "Pet Camera", price: 99.99 },
  { id: 95, name: "Portable Grill", price: 149.99 },
  { id: 96, name: "Camping Tent", price: 199.99 },
  { id: 97, name: "Sleeping Bag", price: 89.99 },
  { id: 98, name: "Hiking Backpack", price: 129.99 },
  { id: 99, name: "Solar Charger", price: 59.99 },
  { id: 100, name: "LED Flashlight", price: 24.99 },
  { id: 101, name: "First Aid Kit", price: 29.99 },
  { id: 102, name: "Tool Set", price: 79.99 },
  { id: 103, name: "Smart Lock", price: 159.99 },
  { id: 104, name: "Robot Mop", price: 249.99 },
  { id: 105, name: "Home Security Camera", price: 119.99 },
];

// ✅ Mock Cart
let cart = [];

// GET /api/products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// GET /api/cart
app.get("/api/cart", (req, res) => {
  const detailedCart = cart.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return {
      ...item,
      name: product?.name || "Unknown Product",
      price: product?.price || 0,
      subtotal: (product?.price || 0) * (item.qty || 0),
    };
  });

  const total = detailedCart.reduce((sum, item) => sum + item.subtotal, 0);
  res.json({ cart: detailedCart, total });
});

// POST /api/cart
app.post("/api/cart", (req, res) => {
  const { productId, qty } = req.body;
  const quantity = parseInt(qty) || 1;

  const existing = cart.find((item) => item.productId === productId);
  if (existing) existing.qty += quantity;
  else cart.push({ id: Date.now(), productId, qty: quantity });

  res.json(cart);
});

// DELETE /api/cart/:id
app.delete("/api/cart/:id", (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter((item) => item.id !== id);
  res.json(cart);
});

// POST /api/checkout
app.post("/api/checkout", (req, res) => {
  const { cartItems, name, email } = req.body;
  const total = cartItems.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    const price = product?.price || 0;
    const qty = item.qty || 0;
    return sum + price * qty;
  }, 0);

  const receipt = {
    customer: { name, email },
    total: total.toFixed(2),
    timestamp: new Date().toISOString(),
  };

  cart = []; // clear cart
  res.json(receipt);
});

app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
