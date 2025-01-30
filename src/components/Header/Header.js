import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-2 shadow-[0rem_0.3125rem_0.625rem_0rem_rgba(0,0,0,0.3)] fixed top-0 start-0 w-full z-50 bg-[#191e24] box-border">
      <div className="lg:w-6/12 w-full mx-auto">
        <div className="navbar p-0 justify-between">
          <div className="navbar-start w-auto">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link
                    className="text-base no-underline text-white transition-all"
                    to="/"
                  >
                    Namaste JavaScript
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base no-underline text-white transition-all"
                    to="/react"
                  >
                    Namaste React
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base no-underline text-white transition-all"
                    to="/interview"
                  >
                    Interview
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link
                  className="text-base no-underline text-white transition-all"
                  to="/"
                >
                  Namaste JavaScript
                </Link>
              </li>
              <li>
                <Link
                  className="text-base no-underline text-white transition-all"
                  to="/react"
                >
                  Namaste React
                </Link>
              </li>
              <li>
                <Link
                  className="text-base no-underline text-white transition-all"
                  to="/interview"
                >
                  Interview
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
