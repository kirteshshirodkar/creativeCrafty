import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const isLoggedIn = true;
  const userName = "Pratiksha";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/40">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-xl font-semibold tracking-wide">
            Creative<span className="text-[#C7A17A]">Crafty</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
            {navLinks.map((item) => (
              <li key={item.name} className="relative group">
                <Link to={item.path} className="hover:text-[#6D4C41] transition">
                  {item.name}
                </Link>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#C7A17A] transition-all group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="hidden md:flex items-center gap-5">
            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-[#6D4C41] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Profile */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="w-9 h-9 rounded-full bg-[#6D4C41] text-white flex items-center justify-center"
                >
                  {userName[0]}
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-44 bg-white rounded-2xl shadow-xl border overflow-hidden">
                    <div className="px-4 py-3 text-sm font-semibold">
                      {userName}
                    </div>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm hover:bg-gray-50"
                      onClick={() => setProfileOpen(false)}
                    >
                      Profile
                    </Link>
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="px-5 py-2 text-sm rounded-full bg-[#6D4C41] text-white"
              >
                Get Started
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-6 px-6 py-6 text-sm">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
