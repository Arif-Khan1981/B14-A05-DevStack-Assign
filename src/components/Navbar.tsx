// import React from "react";
import logo from "/assets/logo-text.png";
import cross from "/ui/cross.png";
import open from "/ui/hamburger.png";
import React, {useState} from "react";


const Navbar: React.FC = () => {
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
    setIsMenuOpen(false);
  };

    return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto h-14 px-6 flex items-center justify-between">

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 text-2xl"
          aria-label="Open menu"
        >
          {isMenuOpen ? (<img src={cross} alt="Close menu" className="h-5 w-5" />
          ) : (
          <img src={open} alt="Open menu" className="h-5 w-5" />
          )}
        </button>

        <img src={logo} alt="logo-text"/>

        {/* Navigation Links */}
        <div  className="hidden md:flex items-center gap-8 text-[15px]">
          <a
            href="#"
            className="text-pink-600 font-medium"
          >
            Home
          </a>

          <a
            href="#" 
            className="text-gray-600 hover:text-pink-600 transition"
          >
            Technologies
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-pink-600 transition"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-pink-600 transition"
          >
            About
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-pink-600 transition"
          >
            Contact
          </a>
        </div>

        
        {/* Right side */}
        <div className="flex items-center gap-5">
          <button className=" sm:block text-gray-700 text-[15px] hover:text-pink-600">
            Sign In
          </button>

          <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full text-[14px] font-medium transition">
            Sign Up
          </button>
        </div>


          {isMenuOpen && (
            <div className="absolute top-12 left-8 w-40
            bg-linear-to-r from-orang-600 to-violet-300 bg-orange-100 shadow-xl flex flex-col py-4 px-6 gap-5 z-50"
    >
          <div className="flex flex-col gap-5">

            <a
              href="#home"
              onClick={closeMenu}
              className="text-gray-700 hover:text-pink-600"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={closeMenu}
              className="text-gray-700 hover:text-pink-600"
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-gray-700 hover:text-pink-600"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="text-gray-700 hover:text-pink-600"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-gray-700 hover:text-pink-600"
            >
              Contact
            </a>

          </div>
        </div>
          )
        }
        </div>
    </nav>
  );
};

export default Navbar;