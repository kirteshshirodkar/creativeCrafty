


import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

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
                <Link
                  to={item.path}
                  className="hover:text-[#6D4C41] transition"
                >
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
            <div className="relative">
              {/* Profile Icon */}
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-9 h-9 rounded-full overflow-hidden bg-[#6D4C41] text-white flex items-center justify-center"
              >
                {user ? (
                  <span className="font-semibold uppercase">
                    {(userData?.name || user?.displayName || user?.email)?.[0]}



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
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-xl border overflow-hidden">
                  {user && (
                    <div className="px-4 py-3 text-sm font-semibold border-b">
                     {userData?.name || user?.displayName || user?.email}


                    </div>
                  )}

                  {!user ? (
                    <Link
                      to="/login"
                      onClick={() => setProfileOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-gray-50"
                    >
                      Login
                    </Link>
                  ) : (
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                    >
                      Logout
                    </button>
                  )}
                </div>
              )}
            </div>
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
