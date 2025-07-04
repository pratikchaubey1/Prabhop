import React, { useState } from 'react';
import { FaOpencart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from 'react-router-dom';

function Navbar({ search, setsearch, cart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted:", search);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        
        <NavLink to="/" className="text-2xl font-bold text-gray-800 tracking-wide hover:scale-105 transition duration-200">
          <span className="text-indigo-600">Prab/</span>
          <span className="text-gray-500 font-light">Shop</span>
        </NavLink>

        
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        
        <div className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent px-4 md:px-0 py-4 md:py-0 shadow-md md:shadow-none transition-all duration-300 ease-in-out
          ${menuOpen ? 'block' : 'hidden md:flex'}`}>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            
            
            <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              {[
                { to: '/About', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-medium text-[17px] transition hover:text-indigo-600 ${
                        isActive ? 'text-indigo-500 font-bold' : 'text-gray-600'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            
            <form
              onSubmit={handleSearchSubmit}
              className="flex w-full md:w-auto border border-gray-300 rounded-full overflow-hidden"
            >
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setsearch(e.target.value)}
                className="px-4 py-2 w-full md:w-56 outline-none"
              />
              <button
                type="submit"
                className="px-4 text-gray-500 hover:text-indigo-600 transition"
              >
                <IoSearchOutline className="text-xl" />
              </button>
            </form>

            
            <NavLink
              to="/Cart"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-2xl transition hover:text-indigo-600 ${
                  isActive ? 'text-indigo-500' : 'text-gray-600'
                }`
              }
            >
              <FaOpencart />
            </NavLink>

            
            <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              {[
                { to: '/login', label: 'Login' },
                { to: '/signup', label: 'Signup' },
              ].map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-medium text-[17px] transition hover:text-indigo-600 ${
                        isActive ? 'text-indigo-500 font-bold' : 'text-gray-600'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
