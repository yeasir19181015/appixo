import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-6 py-4 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Appixo" className="w-8 h-8" />
          <span className="text-lg font-bold text-gray-900">HERO.IO</span>
        </Link>

        {/* Hamburger - mobile only */}
        <button
          className="md:hidden text-gray-700 text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-purple-600 font-semibold underline" : "text-gray-600 hover:text-gray-900"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive ? "text-purple-600 font-semibold underline" : "text-gray-600 hover:text-gray-900"
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive ? "text-purple-600 font-semibold underline" : "text-gray-600 hover:text-gray-900"
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>

          {/* Contribute Button */}
          <a
            href="https://github.com/yeasir19181015"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold"
            style={{ background: "linear-gradient(135deg, #7C3AED, #4F46E5)" }}
          >
            <FontAwesomeIcon icon={faCodeBranch} />
            Contribute
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-3 text-sm font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/apps", label: "Apps" },
            { to: "/installation", label: "Installation" },
          ].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 font-semibold block py-1 border-b border-gray-100"
                    : "text-gray-600 hover:text-gray-900 block py-1 border-b border-gray-100"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        
        <a
          href="https://github.com/yeasir19181015"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full mt-3 px-4 py-2 rounded-lg text-white text-sm font-semibold"
          style={{ background: "linear-gradient(135deg, #7C3AED, #4F46E5)" }}
        >
          <FontAwesomeIcon icon={faCodeBranch} />
          Contribute
        </a>
      </div>
    </nav>
  );
}