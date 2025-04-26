import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CookingPot, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const Header = ({ favCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-black text-white py-4 px-6 sm:px-8 flex justify-between items-center fixed top-0 w-full z-50 shadow-md h-[10%]">
      <div className="flex items-center gap-4 sm:gap-7">
        <CookingPot className="w-8 h-8 sm:w-10 sm:h-10" />
        <h1 className="font-bold text-xl sm:text-2xl">Recipe Finder</h1>
      </div>

      <div className="hidden md:flex gap-6 sm:gap-8">
        <Link
          to="/"
          className={`hover:underline font-bold text-lg trasition ${
            location.pathname === "/" ? "underline text-xl" : "hover:underline"
          }`}
        >
          Home
        </Link>
        <Link
          to="/search"
          className={`hover:underline font-bold text-lg trasiton ${
            location.pathname === "/search"
              ? "underline text-xl"
              : "hover:underline"
          }`}
        >
          Search
        </Link>
        <Link
          to="/favourites"
          className={`font-bold text-lg transition ${
            location.pathname === "/favourites"
              ? "underline text-xl"
              : "hover:underline"
          }`}
        >
          Favourites({favCount})
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-black flex flex-col items-center gap-6 py-6 md:hidden shadow-md z-40">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:underline font-bold text-lg"
          >
            Home
          </Link>
          <Link
            to="/search"
            onClick={() => setMenuOpen(false)}
            className="hover:underline font-bold text-lg"
          >
            Search
          </Link>
          <Link
            to="/favourites"
            onClick={() => setMenuOpen(false)}
            className="hover:underline font-bold text-lg"
          >
            Favourites({favCount})
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
