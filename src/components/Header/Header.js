import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-5 shadow-[0rem_0.3125rem_0.625rem_0rem_rgba(0,0,0,0.27)] fixed top-0 start-0 w-full z-50 bg-white box-border">
      <div className="2xl:w-[90rem] w-[73.125rem] mx-auto">
        <ul className="list-none ps-0 mt-0 mb-0 flex items-center gap-5">
          <li>
            <Link
              className="text-base no-underline text-black hover:text-[#f25925] transition-all"
              to="/"
            >
              Namaste JavaScript
            </Link>
          </li>
          <li>
            <Link
              className="text-base no-underline text-black hover:text-[#f25925] transition-all"
              to="/react"
            >
              Namaste React
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
