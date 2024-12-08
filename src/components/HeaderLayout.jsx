import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
  {/* Title in the Center */}
  <h1 className="text-2xl font-bold mx-auto">Employee Management</h1>

  {/* Home Button on the Right */}
  <Link to="/">
    <button className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
      Home
    </button>
  </Link>
</header>


      
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
