import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-5 px-4 lg:px-0 shadow-[0rem_0.3125rem_0.625rem_0rem_rgba(0,0,0,0.3)] fixed top-0 start-0 w-full z-50 bg-[#191e24] box-border">
      <div className="lg:w-6/12 w-full mx-auto">
        <ul className="list-none ps-0 mt-0 mb-0 flex items-center gap-x-6">
          <li>
            <Link
              className="text-base no-underline text-white hover:text-[#f25925] transition-all"
              to="/"
            >
              Namaste JavaScript
            </Link>
          </li>
          <li>
            <Link
              className="text-base no-underline text-white hover:text-[#f25925] transition-all"
              to="/react"
            >
              Namaste React
            </Link>
          </li>
          <li>
            <Link
              className="text-base no-underline text-white hover:text-[#f25925] transition-all"
              to="/interview"
            >
              Interview
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
