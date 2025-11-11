import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Heart, Star, ArrowRight } from "lucide-react";

function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* 🌟 Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Welcome to <span className="text-yellow-300">ShopMate</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover amazing products at unbeatable prices 🛒
          </p>
          <Link
            to="/products"
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition inline-flex items-center gap-2"
          >
            <ShoppingBag size={20} />
            Shop Now
          </Link>
        </div>
      </section>

      {/* 🛍️ Categories Section */}
      <section className="py-16 px-6 max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {[
            { name: "Electronics", img: "https://img.icons8.com/fluency/96/laptop.png" },
            { name: "Fashion", img: "https://img.icons8.com/color/96/t-shirt.png" },
            { name: "Home Decor", img: "https://img.icons8.com/fluency/96/sofa.png" },
            { name: "Sports", img: "https://img.icons8.com/color/96/football.png" },
          ].map((cat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="mx-auto mb-4 h-20 w-20 object-contain"
              />
              <h3 className="text-lg font-semibold">{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 💎 Featured Products Preview */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Featured Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <img
                  src={`https://via.placeholder.com/250x180?text=Product+${num}`}
                  alt={`Product ${num}`}
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-semibold mb-2">Sample Product {num}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Awesome product description here.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold">₹{num * 999}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            View All Products <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 💬 About / Promo Section */}
      <section className="py-16 px-6 max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Why Shop With Us?</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          We offer a curated selection of high-quality products from trusted brands.
          Enjoy secure checkout, fast delivery, and 24/7 customer support — all in one place!
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow w-64">
            <Heart className="mx-auto text-pink-500 mb-3" size={30} />
            <h4 className="font-semibold mb-2">Loved by Thousands</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Our customers trust us for quality and satisfaction.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow w-64">
            <ShoppingBag className="mx-auto text-green-600 mb-3" size={30} />
            <h4 className="font-semibold mb-2">Exclusive Deals</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Get the best offers and discounts every week.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
