import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // mock auth (replace later)
  const isLoggedIn = true;
  const userName = "Pratiksha";

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-semibold tracking-wide"
          >
            creative<span className="text-[#8b5e3c]">Crafty</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Products", path: "/products" },
              { name: "Blogs", path: "/blogs" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li
                key={item.name}
                className="relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#8b5e3c] after:transition-all hover:after:w-full"
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-5">

            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-[#8b5e3c] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Account */}
            {!isLoggedIn ? (
              <Link
                to="/login"
                className="px-5 py-2 text-sm rounded-full bg-[#8b5e3c] text-white hover:opacity-90 transition"
              >
                Get Started
              </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="w-9 h-9 rounded-full bg-[#8b5e3c] text-white flex items-center justify-center font-medium"
                >
                  {userName[0]}
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-lg border overflow-hidden">
                    <div className="px-4 py-3 text-sm font-semibold">
                      {userName}
                    </div>
                    <div className="border-t" />
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2"
                      onClick={() => setProfileOpen(false)}
                    >
                      <User size={16} /> Profile
                    </Link>
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-6 px-6 py-6 text-sm font-medium text-gray-700">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

            <div className="flex items-center gap-4 pt-4">
              <Link to="/cart">
                <ShoppingCart size={20} />
              </Link>
              {!isLoggedIn ? (
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-full bg-[#8b5e3c] text-white"
                >
                  Get Started
                </Link>
              ) : (
                <Link to="/profile" className="flex items-center gap-2">
                  <User size={18} /> Profile
                </Link>
              )}
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
