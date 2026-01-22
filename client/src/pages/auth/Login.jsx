import { useState } from "react";
import AuthLayout from "../../components/auth/AuthLayout";
import Navbar from "../../components/common/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // Firebase login logic here
  };

  return (
    <div>
      <Navbar />

      <AuthLayout title="Login to Your Account">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-[#8b5e3c] text-white py-2 rounded-lg hover:bg-[#734c32] transition"
          >
            Login
          </button>

          <p className="text-center text-sm">
            Don’t have an account?{" "}
            <a href="/register" className="text-[#8b5e3c] font-medium">
              Register
            </a>
          </p>
        </form>
      </AuthLayout>
    </div>
  );
};

export default Login;
