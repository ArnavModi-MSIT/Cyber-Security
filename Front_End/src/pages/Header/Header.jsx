import React, { useState } from "react";
import { Link, NavLink} from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bgColor, setBgColor] = useState('#222121');

  const changeHeaderBackground = (color) => {
    setBgColor(color)
  }

  return (

    <header style={{backgroundColor: bgColor}}>
      <nav>
        <div className="w-full justify-between items-center flex mr-4 p-2 md:p-5 text-[1vh] md:text-[2vh] ">
          <div className=" md:mr-3">
            <Link to="/"><img src="/logo.png" alt="" className="h-10"/></Link>
          </div>
          <div className="hidden w-full md:flex md:justify-between">
            <div>
              <ul className="flex">
                <li className="list text-white">
                  <NavLink to="/" onClick={() => changeHeaderBackground('#286FB4')}>Home</NavLink>
                </li>
                <li className="list text-white">
                  <NavLink to="/tutorial" onClick={() => changeHeaderBackground('#CAF4FF')}>Tutorial</NavLink>
                </li>
                <li className="list text-white">
                  <NavLink to="/about" onClick={() => changeHeaderBackground('#A67C5B')}>About</NavLink>
                </li>
                <li className="list text-white">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="list text-white">
                  <NavLink to="/url">Url</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <Link to="/login" className="ml-4 mr-5 text-white">
                Login
              </Link>
              <Link to="/signup" className="ml-4 mr-4 text-white">
                Signup
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden">
            <ul className="space-y-2 bg-slate-300 text-center">
              <li className="list hover:underline hover:bg-slate-500">
                <NavLink to="/" className="text-black block">Home</NavLink>
              </li>
              <li className="list hover:underline hover:bg-slate-500">
                <NavLink to="/tutorial" className="text-black block">Tutorial</NavLink>
              </li>
              <li className="list hover:underline hover:bg-slate-500">
                <NavLink to="/about" className="text-black block">About</NavLink>
              </li>
              <li className="list hover:underline hover:bg-slate-500">
                <NavLink to="/contact" className="text-black block">Contact</NavLink>
              </li>
              <li className="list hover:underline hover:bg-slate-500">
                <Link to="/login" className="text-black block">Login</Link>
              </li>
              <li className="list hover:underline hover:bg-slate-500">
                <Link to="/signup" className="text-black block">Signup</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
