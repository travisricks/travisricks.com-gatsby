import React from "react";
import { Link } from "gatsby";

const Header = () => (
  //   <header className="text-purple-700">
  //     <Link to="/">Travis Ricks</Link>
  //     <nav>
  //       <Link to="/" activeClassName="text-red-700">
  //         Home
  //       </Link>
  //       <Link to="/about" activeClassName="text-red-700">
  //         About
  //       </Link>
  //     </nav>
  //   </header>
  <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <Link to="/" className="font-semibold text-xl tracking-tight">
        Travis Ricks
      </Link>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow text-teal-200">
        <Link
          to="/posts"
          className="block mt-4 
          lg:inline-block lg:mt-0 hover:text-white mr-4"
          activeClassName="text-red-700"
        >
          Blog
        </Link>
        <Link
          to="/about"
          activeClassName="text-red-900"
          className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
        >
          About
        </Link>
      </div>
    </div>
  </nav>
);

export default Header;
