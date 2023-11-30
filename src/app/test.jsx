import React from "react";

const Navbar = () => {
  return (
    <div
      className="shadow-md bg-base-100 rounded-md w-full"
      // style={{ border: "", height: "80px" }}
    >
      <div className="navbar bg-gray-100 w-[100%]">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">United Healthcare</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <div
                tabindex="0"
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
            </li>
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
      </div>
    </div>
  );
};

export default Navbar;


