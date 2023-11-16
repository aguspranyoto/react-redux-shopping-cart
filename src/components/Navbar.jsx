import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartProducts = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  text-white">
        <Link to="/" className="text-xl font-medium">
          Redux Shopping Cart
        </Link>
        <svg
          onClick={() => setIsOpen(!isOpen)}
          className="w-5 h-5 block md:hidden"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
        <div
          className={
            isOpen
              ? "w-full md:flex md:items-center md:w-auto"
              : "hidden w-full md:flex md:items-center md:w-auto"
          }
        >
          <ul className="pt-4 md:flex md:justify-between md:pt-0 text-xl">
            <li className="mb-4 md:mb-0">
              <Link to="/" className=" md:p-4">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className=" md:p-4">
                Cart ({cartProducts.length})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
