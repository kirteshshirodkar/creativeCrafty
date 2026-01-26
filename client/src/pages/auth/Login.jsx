import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import AuthLayout from "../../components/auth/AuthLayout";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login successful!");
    navigate("/");   // Home page
  } catch (error) {
    toast.error(error.message);
  }
};


 const handleGoogleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    toast.success("Google Login successful!");
    navigate("/");
  } catch (error) {
    toast.error(error.message);
  }
};

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-[#738994] to-[#f4e1c1] flex flex-col">
      

      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30">
          <h2 className="text-3xl font-semibold text-[#3b2f2f] text-center mb-6 tracking-wide">
            Welcome Back
          </h2>

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 py-2 mb-6 rounded-lg bg-white hover:bg-gray-100 transition shadow-md"
          >
            <FcGoogle size={24} />
            <span className="text-[#3b2f2f] font-medium">Login with Google</span>
          </button>

          <div className="relative flex items-center mb-6">
            <hr className="flex-grow border-[#a98c5b]" />
            <span className="px-3 text-[#a98c5b] text-sm">OR</span>
            <hr className="flex-grow border-[#a98c5b]" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-3 rounded-xl bg-white/30 placeholder-[#8c6d4b] text-[#3b2f2f] focus:outline-none focus:ring-2 focus:ring-[#bfa24d] backdrop-blur-sm border border-white/30 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-5 py-3 rounded-xl bg-white/30 placeholder-[#8c6d4b] text-[#3b2f2f] focus:outline-none focus:ring-2 focus:ring-[#bfa24d] backdrop-blur-sm border border-white/30 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#bfa24d] hover:bg-[#a88f3b] text-[#3b2f2f] font-semibold shadow-lg transition transform hover:scale-105"
            >
              Login
            </button>
          </form>

          <p className="text-center text-[#3b2f2f] mt-5 text-sm">
            Don’t have an account?{" "}
            <a href="/register" className="text-[#bfa24d] font-medium hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
    
  );
};

export default Login;
