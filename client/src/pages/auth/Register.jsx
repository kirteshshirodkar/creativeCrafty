import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const userCredential =
      await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "users", userCredential.user.uid), {
      name: name,
      email: email,
      createdAt: new Date()
    });

    toast.success("Account created successfully!");
    navigate("/");
  } catch (error) {
    toast.error(error.message);
  }
};



  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#738994] to-[#f4e1c1] flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30">
          <h2 className="text-3xl font-semibold text-[#3b2f2f] text-center mb-6 tracking-wide">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-3 rounded-xl bg-white/30 placeholder-[#8c6d4b] text-[#3b2f2f]
            focus:outline-none focus:ring-2 focus:ring-[#bfa24d]
            border border-white/30 backdrop-blur-sm transition"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-3 rounded-xl bg-white/30 placeholder-[#8c6d4b] text-[#3b2f2f]
            focus:outline-none focus:ring-2 focus:ring-[#bfa24d]
            border border-white/30 backdrop-blur-sm transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-5 py-3 rounded-xl bg-white/30 placeholder-[#8c6d4b] text-[#3b2f2f]
            focus:outline-none focus:ring-2 focus:ring-[#bfa24d]
            border border-white/30 backdrop-blur-sm transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#bfa24d] hover:bg-[#a88f3b]
            text-[#3b2f2f] font-semibold shadow-lg transition transform hover:scale-[1.03]"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-[#3b2f2f] mt-5">
            Already have an account?{" "}
            <Link to="/" className="text-[#bfa24d] font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Register;
