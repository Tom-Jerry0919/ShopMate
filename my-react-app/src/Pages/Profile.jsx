import React, { useEffect, useState } from "react";
import { User, Mail, CalendarDays, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Get user info from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // If not logged in, redirect to login page
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-10 w-full max-w-md text-center transition-all">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 p-4 rounded-full">
            <User size={50} className="text-white" />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">
          {user ? user.name : "Guest User"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          {user ? user.email : "No email available"}
        </p>

        <div className="border-t border-gray-300 dark:border-gray-700 pt-6 space-y-3">
          <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
            <Mail size={18} /> <span>{user?.email || "Not Available"}</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
            <CalendarDays size={18} /> <span>Joined Recently</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={() => navigate("/products")}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Continue Shopping
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition font-medium"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
