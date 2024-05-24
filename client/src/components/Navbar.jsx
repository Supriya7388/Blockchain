import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo-color.png";

const NavBarItem = ({ title, classprops, to }) => (
  <li className={`navlink mx-2 cursor-pointer ${classprops}`}>
    <Link to={to}>{title}</Link>
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const location = useLocation();

  // Define the paths where the Navbar should not be shown
  const excludedPaths = ["/login", "/register", "/another-path"]; // Add any paths where you don't want to show the Navbar

  // Check if the current path is in the excludedPaths array
  const isExcludedPath = excludedPaths.includes(location.pathname);

  if (isExcludedPath) {
    return null; // Don't render the Navbar on excluded paths
  }

  return (
    <nav className="w-full flex justify-between items-center p-4 bg-gray-800">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-45 h-6 cursor-pointer mr-4 ml-2" />
      </div>
      <ul className="text-white hidden md:flex list-none flex-row justify-between items-center">
        <NavBarItem title="Home" to="/" />
        <NavBarItem title="Market" to="/market" />
        {/* <NavBarItem title="Trade" to="/trade" /> */}
        <NavBarItem title="Tutorials" to="/tutorials" />
        <NavBarItem title="Wallets" to="/wallets" />
        <li className="bg-blue-500 py-2 px-7 mx-2 rounded-full cursor-pointer hover:bg-[#2546bd]">
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <div className="flex md:hidden">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-2xl list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Trade", "Tutorials", "Wallets"].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classprops="my-2 text-lg"
                  to={`/${item.toLowerCase()}`}
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
