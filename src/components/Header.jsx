import { Link } from "react-router-dom";
import Logo from "../assets/header/logo.png";

const Header = () => {
  return (
    <header className="lg:py-3 px-2 lg:px-0 shadow-[0rem_0.3125rem_0.625rem_0rem_rgba(0,0,0,0.3)] fixed top-0 start-0 w-full z-50 bg-[#191e24] box-border h-20 lg:h-auto">
      <div className="lg:w-7/12 w-full mx-auto flex items-center h-full">
        <div className="w-12 lg:w-16 flex items-center justify-center absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-0">
          <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
        </div>
        <div className="navbar p-0 justify-between h-full">
          <div className="navbar-start w-auto">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
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
                className="menu menu-sm dropdown-content bg-base-100 text-9xl rounded-box z-[1] mt-3 w-[350px] p-3 shadow"
              >
                <li>
                  <details>
                    <summary className="text-base py-4 text-white transition-all">
                      Interview
                    </summary>
                    <ul>
                      <li>
                        <Link
                          className="text-base py-4 no-underline text-white transition-all"
                          to="/interview/react"
                        >
                          React
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-base py-4 no-underline text-white transition-all"
                          to="/interview/javascript"
                        >
                          JavaScript
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-base py-4 no-underline text-white transition-all"
                          to="/interview/html"
                        >
                          Html
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link
                    className="text-base py-4 no-underline text-white transition-all"
                    to="/"
                  >
                    Namaste JavaScript
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base py-4 no-underline text-white transition-all"
                    to="/namaste-react"
                  >
                    Namaste React
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <details>
                  <summary className="text-base text-white transition-all">
                    Interview
                  </summary>
                  <ul>
                    <li>
                      <Link
                        className="text-base no-underline text-white transition-all"
                        to="/interview/react"
                      >
                        React
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-base no-underline text-white transition-all"
                        to="/interview/javascript"
                      >
                        JavaScript
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-base no-underline text-white transition-all"
                        to="/interview/html"
                      >
                        Html
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
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
                  to="/namaste-react"
                >
                  Namaste React
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
