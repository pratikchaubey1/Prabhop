import React from 'react';
import { FaOpencart } from "react-icons/fa";

function Navbar({ search, setSearch }) {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted:", search);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
       
        <div className="flex gap-6 text-base font-medium">
          <a href="/" className="hover:underline">Home</a>
          <a href="/" className="hover:underline">About Us</a>
          <a href="/" className="hover:underline">Contact</a>
        </div>

        
        <form
          onSubmit={handleSearchSubmit}
          className="w-full md:w-auto flex flex-1 items-center gap-2 max-w-xl"
        >
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          />
         
        </form>

        
        <div className="text-2xl text-gray-700 hover:text-indigo-500 cursor-pointer">
          <FaOpencart />
        </div>

        
        <div className="flex gap-6 text-base font-medium">
          <a href="/" className="hover:underline">Login</a>
          <a href="/" className="hover:underline">Sign Up</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
