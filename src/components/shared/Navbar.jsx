import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false); // Close dropdown if the menu is toggled
  };

  return (
    <div className="">
      <div className="bg-white rounded shadow-lg py-3 px-5">
        <nav className="2xl:container 2xl:mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="EduBridge Logo" className="w-12" />
            <h2 className="font-normal text-2xl leading-6 text-gray-800">
              <span className="font-extrabold text-primary">Edu</span>Bridge
            </h2>
          </div>
          
          {/* Desktop Menu Items */}
          <ul className="hidden md:flex flex-auto justify-center space-x-5">
            {[
              { title: 'Home', path: '/' },
              { title: 'About', path: '/about' },
              { title: 'Contact', path: '/contact' },
              { title: 'Results', path: '/results' },
              { title: 'Admission Info', path: '/admission-info' },
            ].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 font-medium ${
                      isActive ? 'text-[#CB152E]' : 'text-black'
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Buttons and Profile Dropdown for Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="px-4 py-2 bg-[#CB152E] text-white rounded hover:bg-red-700">
              Student Login
            </button>
            <button className="px-4 py-2 bg-[#CB152E] text-white rounded hover:bg-red-700">
              Teacher Login
            </button>
            <div className="relative">
              <FaUserCircle
                size={24}
                className="text-black cursor-pointer"
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md"
                >
                  <ul>
                    <li>
                      <button className="w-full px-4 py-2 text-left text-black hover:bg-gray-100">
                        Logout
                      </button>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleMenu}
              className="text-[#CB152E] focus:outline-none"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Sidebar Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg z-50"
          >
            <div className="p-6">
              <ul className="space-y-4">
                {[
                  { title: 'Home', path: '/' },
                  { title: 'About', path: '/about' },
                  { title: 'Contact', path: '/contact' },
                  { title: 'Results', path: '/results' },
                  { title: 'Admission Info', path: '/admission-info' },
                ].map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-lg ${
                          isActive ? 'text-[#CB152E]' : 'text-black'
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Profile Dropdown in Sidebar Bottom */}
              <div className="absolute bottom-6 left-6 w-full">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 px-4 py-2 text-lg"
                >
                  <FaUserCircle size={20} className="text-black" />
                  <span>Profile</span>
                </button>
                {dropdownOpen && (
                  <ul className="mt-2 space-y-1 bg-white border rounded shadow-md">
                    <li>
                      <button className="block w-full px-4 py-2 text-left text-black hover:bg-gray-100">
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
