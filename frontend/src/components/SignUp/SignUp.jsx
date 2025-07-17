

// updated signup page

import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const clientId = "219967036471-ba292n747v92ei2966jsvhr6t73t7i9b.apps.googleusercontent.com";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const res = await fetch("https://webcraftbackend.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          username: formData.username,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc] px-4">
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
        <h1 className="text-3xl font-extrabold text-[#232946] text-center mb-2">Sign Up</h1>
        <p className="text-center text-gray-600 mb-6">
          Already have an account?{' '}
          <a href="/login" className="text-[#20817d] font-medium hover:underline">
            Log in
          </a>
        </p>
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Username</label>
            <input
              type="text"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
              placeholder="johndoe123"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#20817d]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#20817d]"
            />
          </div>
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 pr-10 focus:outline-none focus:ring-2 focus:ring-[#20817d]"
            />
            <button
              type="button"
              className="absolute right-3 top-8 text-gray-400 hover:text-[#20817d] focus:outline-none"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 pr-10 focus:outline-none focus:ring-2 focus:ring-[#20817d]"
            />
            <button
              type="button"
              className="absolute right-3 top-8 text-gray-400 hover:text-[#20817d] focus:outline-none"
              onClick={() => setShowConfirmPassword((v) => !v)}
              tabIndex={-1}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-[#20817d] text-white py-2 rounded-lg font-semibold hover:bg-[#1a645d] transition"
          >
            Sign Up
          </button>
        </form>
        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-200" />
          <span className="mx-2 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-200" />
        </div>
        {/* Google Signup */}
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={(res) => {
              console.log("Google login success", res);
              // Optionally send res.credential to backend
            }}
            onError={() => {
              alert("Google signup failed");
            }}
            width="100%"
            theme="outline"
            text="signup_with"
            shape="pill"
            size="large"
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default SignupPage;