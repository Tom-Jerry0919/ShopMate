import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { Heart } from "lucide-react"; // ✅ lightweight icon

function Product() {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]); // ❤️ local wishlist state
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Fetch all products on load
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setMessage("⚠ Please login to continue");
        navigate("/login");
        return;
      }

      const res = await axios.get("http://localhost:3000/product", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts(res.data);
      console.log("Products fetched:", res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setMessage("⚠ Failed to load products. Please log in again.");
    }
  };

  // ✅ Toggle wishlist state
  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800 tracking-tight">
        🛒 Explore Our Products
      </h1>

      {message && (
        <p className="text-center text-red-600 mb-4 font-medium">{message}</p>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No products available yet 😕
          </p>
        ) : (
          products.map((product) => {
            const isWishlisted = wishlist.includes(product._id);
            return (
              <div
                key={product._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden relative"
              >
                {/* ❤️ Wishlist Button - top-right corner */}
                <button
                  onClick={() => toggleWishlist(product._id)}
                  className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:scale-110 transition"
                  title={
                    isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"
                  }
                >
                  <Heart
                    size={20}
                    className={`${
                      isWishlisted ? "text-red-500 fill-red-500" : "text-gray-500"
                    }`}
                  />
                </button>

                <div className="relative">
                  <img
                    src={
                      product.image ||
                      "https://via.placeholder.com/300x200?text=No+Image"
                    }
                    alt={product.name}
                    className="h-56 w-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full shadow">
                    {product.category}
                  </span>
                </div>

                <div className="p-5">
                  <h2 className="text-lg font-bold text-gray-800 mb-1">
                    {product.name}
                  </h2>

                  <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xl font-semibold text-green-700">
                      ₹{product.price}
                    </p>
                    <span
                      className={`text-sm font-medium px-2 py-1 rounded ${
                        product.isAvailable
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {product.isAvailable ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>

                  <button
                    onClick={() => dispatch(addToCart(product))}
                    disabled={!product.isAvailable}
                    className={`w-full py-2 rounded-lg font-semibold text-white transition ${
                      product.isAvailable
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {product.isAvailable ? "Add to Cart" : "Unavailable"}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* View Cart Link */}
      <div className="text-center mt-10">
        <Link
          to={"/cart"}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          🛍 View Cart
        </Link>
      </div>
    </div>
  );
}

export default Product;
