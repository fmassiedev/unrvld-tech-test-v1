"use client";

import { useState } from "react";

export default function ProductAddToCart() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i") {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h4 className="font-medium">Quantity</h4>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-slate-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("d")}
              disabled={quantity <= 1}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
        </div>
        {/* TODO: CREATE ADD TO CART FUNCTIONALITY */}
        <button className="text-center mt-4 px-4 py-2 bg-slate-600 text-white font-medium rounded-full hover:bg-slate-700 transition">
          Add to Basket
        </button>
      </div>
    </div>
  );
}
