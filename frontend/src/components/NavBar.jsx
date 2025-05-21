import { Link, Outlet } from "react-router";

const NavBar = () => {
  return (
    <>
      <nav className="bg-orange absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 font-nunito">
        {/* Left: Logo / Brand */}
        <div>
          <Link
            to="/"
            className="text-white font-bold text-2xl md:text-3xl drop-shadow-md"
          >
            SNAP
          </Link>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex gap-6">
          <Link
            to="/about"
            className="text-dark-green text-base md:text-lg font-light drop-shadow-sm"
          >
            About
          </Link>
          <Link
            to="/application"
            className="text-dark-green text-base md:text-lg font-light drop-shadow-sm"
          >
            Apply for SNAP
          </Link>
          <Link
            to="/stores"
            className="text-dark-green text-base md:text-lg font-light drop-shadow-sm"
          >
            Eligible Stores
          </Link>
          <Link
            to="/transportation"
            className="text-dark-green text-base md:text-lg font-light drop-shadow-sm"
          >
            Transportation Aid
          </Link>
        </div>
      </nav>

      {/* <div className="pt-24">
        <Outlet />
      </div> */}
      <div className="pb-2 bg-orange"></div>
    </>
  );
};

export default NavBar;
