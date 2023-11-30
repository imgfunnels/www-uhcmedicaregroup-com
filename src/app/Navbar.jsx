import React from "react";

const Navbar = () => {
  return (
    <div
      className="shadow-md bg-base-100 rounded-md w-full sm:[w-100%]"
      // style={{ border: "", height: "80px" }}
    >
      <div className="navbar bg-gray-100 w-[100%]">
        <div className="flex-1 hidden md:block">
          <div  className="w-[18%] md:ml-7">
            <img width="100%" src={"/logo.png"} alt="" srcset="" />
          </div>
          <a className="btn btn-ghost text-xl">United Healthcare</a>
        </div>

        <div className="flex-none ">
          <ul className="menu menu-horizontal px-1 ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle md:hidden "
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
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>

              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-gray-100">
                <li>
                  <a>Basics</a>
                </li>
                <li>
                  <a>Health & Drug Plans</a>
                </li>
                <li>
                  <a>Providers & Services</a>
                </li>
                <li>
                  <a>Chats</a>
                </li>
                <li>
                  <a>Loign</a>
                </li>
              </ul>
            </div>
            <li className="hidden lg:block">
              {" "}
              <details>
                <summary>Basics</summary>
                <ul className="p-2 bg-base-100 rounded-t-none"></ul>
              </details>
            </li>
            <li className="hidden lg:block">
              {" "}
              <details>
                <summary>Health & Drug Plans</summary>
                <ul className="p-2 bg-base-100 rounded-t-none"></ul>
              </details>
            </li>
            <li className="hidden lg:block">
              {" "}
              <details>
                <summary>Providers & Services</summary>
                <ul className="p-2 bg-base-100 rounded-t-none"></ul>
              </details>
            </li>

            <div className="hidden lg:block h-auto mx-4 bg-gray-900 w-px"></div>

            <li className="hidden lg:block">
              <a>Chats</a>
            </li>
            <li className="hidden lg:block">
              <a>Login</a>
            </li>
          </ul>
        </div>
        <div className="flex-1   md:hidden">
        <div  className="w-[28%] md:ml-7">
            <img width="100%" src={"/logo.png"} alt="" srcset="" />
          </div>
          <a className="btn btn-ghost text-xl">United Healthcare</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
