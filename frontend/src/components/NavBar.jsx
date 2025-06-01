import { Link, Outlet } from "react-router";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-orange absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 font-nunito shadow-sm">
        {/* Left: Logo / Brand */}
        <div>
          <Link
            to="/"
            className="text-white font-bold text-2xl md:text-3xl relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            SNAPWAY
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6">
          <Link
            to="/"
            className="text-white text-base md:text-lg font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="/application"
            className="text-white text-base md:text-lg font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Apply
          </Link>
          <Link
            to="/stores"
            className="text-white text-base md:text-lg font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Eligible Stores
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-orange z-40 shadow-md">
          <div className="flex flex-col px-6 py-4">
            <Link
              to="/"
              className="text-white text-lg font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/application"
              className="text-white text-lg font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply
            </Link>
            <Link
              to="/stores"
              className="text-white text-lg font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Eligible Stores
            </Link>
          </div>
        </div>
      )}

      <div className="pb-2 bg-teal-600"></div>
    </>
  );
};

export default NavBar;