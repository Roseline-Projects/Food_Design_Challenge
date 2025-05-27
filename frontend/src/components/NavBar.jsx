import { Link, Outlet } from "react-router";

const NavBar = () => {
  return (
    <>
      <nav className="bg-orange absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 font-nunito shadow-sm">
        {/* Left: Logo / Brand */}
        <div>
          <Link
            to="/"
            className="text-white font-bold text-2xl md:text-3xl relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            SNAP
          </Link>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex gap-6">
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
      </nav>

      <div className="pb-2 bg-teal-600"></div>
    </>
  );
};

export default NavBar;
