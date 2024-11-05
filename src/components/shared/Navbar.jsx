import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="w-full">
      <div className="container mx-auto px-6 flex items-center justify-between py-3 md:py-0">
        <div className="flex items-center" aria-label="Home" role="img">
          <img className="cursor-pointer w-10" src="logo.png" alt="logo" />
          <Link to="/" className="ml-2 text-base lg:text-2xl font-bold text-gray-800">Edu<span className="text-primary">Bridge</span></Link>
        </div>
        <div>
          <button onClick={() => setShow(!show)} className="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
            <img className="h-8 w-8" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg4.svg" alt="show" />
          </button>
          <div id="menu" className={`md:block lg:block ${show ? '' : 'hidden'}`}>
            <button onClick={() => setShow(!show)} className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white md:bg-transparent z-30 top-0 mt-3">
              <img className="h-8 w-8" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg5.svg" alt="hide" />
            </button>
            <ul className="flex text-3xl md:text-base items-center py-4 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent  z-20">
              {links}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
const links = <>
  <li className="md:ml-10 pt-10 md:pt-0">
    <NavLink
      to="/"
      className={({ isActive }) =>
        `text-lg cursor-pointer ${isActive ? 'text-primary' : 'text-gray-600'} hover:text-[#01204E]`
      }
    >
      Home
    </NavLink>
  </li>
  <li className="md:ml-10 pt-10 md:pt-0">
    <NavLink
      to="/results"
      className={({ isActive }) =>
        `text-lg cursor-pointer ${isActive ? 'text-primary' : 'text-gray-600'} hover:text-[#01204E]`
      }
    >
      Results
    </NavLink>
  </li>
  <li className="md:ml-10 pt-10 md:pt-0">
    <NavLink
      to="/admission"
      className={({ isActive }) =>
        `text-lg cursor-pointer ${isActive ? 'text-primary' : 'text-gray-600'} hover:text-[#01204E]`
      }
    >
      Admission
    </NavLink>
  </li>
  <li className="md:ml-10 pt-10 md:pt-0">
    <NavLink
      to="/about"
      className={({ isActive }) =>
        `text-lg cursor-pointer ${isActive ? 'text-primary' : 'text-gray-600'} hover:text-[#01204E]`
      }
    >
      About
    </NavLink>
  </li>
  <li className="md:ml-10 pt-10 md:pt-0">
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `text-lg cursor-pointer ${isActive ? 'text-primary' : 'text-gray-600'} hover:text-[#01204E]`
      }
    >
      Contact Us
    </NavLink>
  </li>
  <li className="md:ml-10 pt-10 md:pt-0">

    <Link to="/login" className="group relative inline-flex items-center justify-center overflow-hidden rounded-md p-0.5 md:font-bold text-sm md:text-base">
      <span className="absolute h-full w-full bg-gradient-to-br from-[#CB152E] via-[#FF5478] to-[#FF00C6] group-hover:from-[#FF00C6] group-hover:via-[#FF5478] group-hover:to-[#CB152E]"></span>
      <span className="duration-400 relative rounded-md bg-white px-6 py-2 transition-all ease-out group-hover:bg-opacity-0">
        <span className="relative bg-gradient-to-br from-[#CB152E] via-[#FF5478] to-[#FF00C6] bg-clip-text text-transparent group-hover:text-white">
          Login
        </span>
      </span>
    </Link>

  </li>

</>


export default Navbar;
