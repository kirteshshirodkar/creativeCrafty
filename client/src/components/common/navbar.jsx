import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [user, setUser] = useState(null);

  const defaultAvatar =
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      } else {
        setUser(null);
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setProfileOpen(false);
    navigate("/login");
  };

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="mt-4 h-16 flex items-center justify-between rounded-2xl bg-[#faf9f7]/85 backdrop-blur-md shadow-sm">

          {/* Logo */}
          <Link
            to="/"
            className="px-6 text-xl font-semibold tracking-wide text-[#2b2b2b]"
          >
            Creative<span className="opacity-60">Crafty</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-sm text-[#2b2b2b]/70">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="hover:text-[#2b2b2b] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-5 px-6">

            {/* Search */}
            <div className="relative group">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2b2b2b]/50"
              />
              <input
                type="text"
                placeholder="Search"
                className="w-32 group-hover:w-56 focus:w-56 transition-all duration-300
                           rounded-full border border-[#2b2b2b]/20 bg-transparent
                           pl-9 pr-4 py-2 text-sm text-[#2b2b2b]
                           placeholder:text-[#2b2b2b]/50
                           focus:outline-none"
              />
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative text-[#2b2b2b]">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-[#2b2b2b] text-[#faf9f7] text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-9 h-9 rounded-full overflow-hidden bg-[#2b2b2b] text-[#faf9f7] flex items-center justify-center"
              >
                {user ? (
                  <span className="font-semibold uppercase">
                    {(userData?.name ||
                      user?.displayName ||
                      user?.email)?.[0]}
                  </span>
                ) : (
                  <img
                    src={defaultAvatar}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                )}
              </button>

              {/* Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 mt-3 w-48 rounded-xl bg-[#faf9f7] shadow-xl border border-black/5 overflow-hidden">
                  {user && (
                    <div className="px-4 py-3 text-sm font-medium border-b border-black/5">
                      {userData?.name ||
                        user?.displayName ||
                        user?.email}
                    </div>
                  )}

                  {!user ? (
                    <Link
                      to="/login"
                      onClick={() => setProfileOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-black/5"
                    >
                      Login
                    </Link>
                  ) : (
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-black/5"
                    >
                      Logout
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden px-6 text-[#2b2b2b]"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 mx-6 rounded-xl bg-[#faf9f7] shadow-md">
          <ul className="flex flex-col gap-6 px-6 py-6 text-sm text-[#2b2b2b]">
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
