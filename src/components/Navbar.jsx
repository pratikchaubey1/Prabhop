import React from 'react';
import { FaOpencart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

function Navbar({ search, setsearch ,cart}) {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted:", search);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
     
        <ul className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
          {[
            { to: '/', label: 'Home' },
            { to: '/About', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `font-bold text-[18px] transition-transform hover:scale-110 ${
                    isActive ? 'text-amber-200' : 'text-gray-400'
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
          className="w-full md:w-auto flex flex-1 items-center max-w-xl"
        >
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            className="flex-1 px-4 py-2 border-l-2 border-t-2 border-b-2 border-gray-300 outline-none rounded-l-full transition"
          />
          <button
            type="submit"
            className="px-4 py-3 border-r-2 border-t-2 border-b-2 rounded-r-full border-gray-300 transition"
          >
            <IoSearchOutline />
          </button>
        </form>


        <div className="text-2xl text-gray-700 hover:text-indigo-500 cursor-pointer" >
         <NavLink to="/Cart" className={({isActive})=>`${isActive?"text-amber-200":"text-gray-400"}`}>
          <FaOpencart  />
         </NavLink>
        </div>

        
        <ul className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
          {[
            
            { to: '/login', label: 'Login' },
            { to: '/signup', label: 'Signup' },  
          ].map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `font-bold text-[18px] transition-transform hover:scale-110 ${
                    isActive ? 'text-amber-200' : 'text-gray-400'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
