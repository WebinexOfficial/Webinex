 


import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { Eye, EyeOff } from 'lucide-react';

const GoogleAuth = () => {
  const clientId = "YOUR_GOOGLE_CLIENT_ID"; // Replace with your actual client ID

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement authentication logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e8faf4] via-[#f6fffa] to-[#e8faf4] px-2">
      <div className="flex w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Panel */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-[#009e60] to-[#7AE2CF] w-1/2 p-10">
          <img
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Company Logo"
            className="h-12 mb-8"
          />
          <h2 className="text-3xl font-extrabold text-white mb-2 text-center">Welcome Back!</h2>
          <p className="text-lg text-white/90 text-center">
            Sign in to access your dashboard and manage your projects.
          </p>
          <img
            src="https://illustrations.popsy.co/gray/web-design.svg"
            alt="Login Illustration"
            className="w-48 mt-8"
            loading="lazy"
          />
        </div>

        {/* Right Panel - Login Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">Sign in to Your Account</h2>
          <p className="text-gray-500 text-center mb-6 text-sm">
            New here? <a href="/signup" className="text-[#009e60] hover:underline font-medium">Create an account</a>
          </p>
          {/* Email/Password Form */}
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#009e60] bg-gray-50"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
            <div className="relative">
              <label className="block text-sm text-gray-600 mb-1">Password</label>
              <input
                type={showPass ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#009e60] bg-gray-50 pr-10"
                placeholder="••••••••"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="absolute right-3 top-8 text-gray-400 hover:text-[#009e60] focus:outline-none"
                onClick={() => setShowPass((v) => !v)}
                tabIndex={-1}
                aria-label={showPass ? "Hide password" : "Show password"}
              >
                {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#009e60]" />
                Remember me
              </label>
              <a href="/forgot-password" className="text-[#009e60] hover:underline">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#009e60] text-white py-2 rounded-lg font-semibold hover:bg-[#007a4d] transition"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center justify-center text-gray-400">
            <hr className="w-1/4 border-gray-200" />
            <span className="mx-2 text-sm">or</span>
            <hr className="w-1/4 border-gray-200" />
          </div>

          {/* Google Login */}
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                // Handle Google login success
              }}
              onError={() => {
                // Handle Google login error
              }}
              width="100%"
              theme="filled_blue"
              text="continue_with"
              shape="pill"
              size="large"
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
};

export default GoogleAuth;
 
 

