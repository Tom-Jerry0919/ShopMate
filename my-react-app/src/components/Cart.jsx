import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../features/cartSlice'; // Import the removeItem action

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  console.log(cart);

  const getTotal = () =>
    cart.reduce((sum, item) => sum + (item.price || 0), 0);

  const handleRemove = (itemId) => {
    dispatch(removeItem({ id: itemId })); // Use the removeItem action
  };

  return (
    <div className="p-4 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center mt-4">Your cart is empty</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {cart.map((item, idx) => (
              <div
                key={item.id || idx}
                className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between"
              >
                <h2 className="text-lg font-bold mb-2 capitalize">
                  {item.name}
                </h2>
                <p className="text-gray-500 mb-1">
                  Category: {item.category || 'General'}
                </p>
                <p className="text-gray-700 font-semibold mb-4">
                  Price: ₹{item.price.toLocaleString()}
                </p>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                >
                  Remove from Cart
                </button>
              </div>
            ))}
          </div>

          <div className="text-right mt-6 mr-4 text-xl font-bold">
            Total: ₹{getTotal().toLocaleString()}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;