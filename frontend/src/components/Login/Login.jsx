

// updated login page

import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Eye, EyeOff } from "lucide-react";
import authService from "../Services/AuthService";
import { useNavigate } from "react-router-dom";
import { login } from "../Features/AuthSlice";
import { useDispatch } from "react-redux";

const AuthForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const data = await authService.loginWithEmail(email, password);
      setMessage(`Welcome ${data.user.name || "user"}!`);
      localStorage.setItem("token", data.token);
      dispatch(login(data.user));
      navigate("/");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
    setLoading(false);
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const data = await authService.loginWithGoogle(
        credentialResponse.credential
      );
      setMessage(`Welcome ${data.user.name || "user"}!`);
      dispatch(login(data.user));
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      setMessage(err.response?.data?.message || "Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fbfcfd] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 mt-8 mb-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="webinex-logo-dark.png" // Replace with your logo path
            alt="Webinex"
            className="h-10"
          />
        </div>
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-[#232946] text-center mb-2">Log in</h1>
        <p className="text-center text-gray-600 mb-6">
          Don't have an account?{" "}
          <a href="/signup" className="text-[#20817d] font-medium hover:underline">
            Sign up
          </a>
        </p>
        {/* Form */}
        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#20817d]"
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">
              Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 pr-10 focus:outline-none focus:ring-2 focus:ring-[#20817d]"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
            <button
              type="button"
              className="absolute right-3 top-8 text-gray-400 hover:text-[#20817d] focus:outline-none"
              onClick={() => setShowPass((v) => !v)}
              tabIndex={-1}
            >
              {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#20817d]" /> Remember me
            </label>
            <a
              href="/forgot-password"
              className="text-[#20817d] hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#20817d] text-white py-2 rounded-lg font-semibold hover:bg-[#1a645d] transition"
          >
            {loading ? "Signing in..." : "Log in"}
          </button>
        </form>
        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-200" />
          <span className="mx-2 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-200" />
        </div>
        {/* Google Login */}
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={() => setMessage("Google Login Failed")}
          theme="outline"
          text="signin_with"
          shape="pill"
          size="large"
          width="100%"
        />

        {message && (
          <p className="text-center text-sm text-red-600 mt-4">{message}</p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;