import React, { useState } from 'react';

function Cart({ cart, remove, setcart }) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => quantity > 1 && setQuantity((prev) => prev - 1);

  return (
    <div className="space-y-6 mt-24 px-4">
      {cart.length ? (
        cart.map((item, index) => (
          <div
            key={index}
            className="p-4 sm:p-5 bg-white rounded-xl shadow-lg hover:shadow-gray-300 hover:scale-[1.01] transition flex flex-col sm:flex-row sm:items-center sm:gap-x-5 gap-y-4"
          >
            <img
              className="w-full sm:w-32 h-48 sm:h-40 object-cover rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:scale-105 transition"
              src={item.image}
              alt={item.title}
            />

            <div className="flex flex-col justify-between flex-1 space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 capitalize">{item.title}</h2>
              <p className="text-gray-700 font-semibold">${item.price}</p>

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={decrement}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center"
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-lg font-medium text-gray-800">{quantity}</span>
                  <button
                    onClick={increment}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => remove(index)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition active:scale-95"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center h-96 text-gray-500 space-y-4">
          <h1 className="text-xl font-semibold text-center">Your cart is empty</h1>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition active:scale-95"
            onClick={() => (window.location.href = '/')}
          >
            Home
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
