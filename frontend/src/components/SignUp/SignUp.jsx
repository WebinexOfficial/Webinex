import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from "react-router-dom";
const SignupPage = () => {
    const navigate = useNavigate();
 
 const clientId = "219967036471-ba292n747v92ei2966jsvhr6t73t7i9b.apps.googleusercontent.com";  // Replace this

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
  console.log("Response:", res.status, data); // Add this line

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e8faf4] via-[#f6fffa] to-[#e8faf4] px-2">
      <div className="flex w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Left Panel */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-[#009e60] to-[#7AE2CF] w-1/2 p-10">
          <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Logo" className="h-12 mb-8" />
          <h2 className="text-3xl font-extrabold text-white mb-2 text-center">Welcome!</h2>
          <p className="text-lg text-white/90 text-center">Sign up to access your dashboard.</p>
          <img src="https://illustrations.popsy.co/gray/web-design.svg" alt="Signup Illustration" className="w-48 mt-8" />
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">Create an Account</h2>
          <p className="text-gray-500 text-center mb-6 text-sm">Join us and manage your projects</p>

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
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#009e60]"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#009e60]"
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
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 pr-10 focus:outline-none focus:ring-2 focus:ring-[#009e60]"
              />
              <button
                type="button"
                className="absolute right-3 top-8 text-gray-400 hover:text-[#009e60] focus:outline-none"
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
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 pr-10 focus:outline-none focus:ring-2 focus:ring-[#009e60]"
              />
              <button
                type="button"
                className="absolute right-3 top-8 text-gray-400 hover:text-[#009e60] focus:outline-none"
                onClick={() => setShowConfirmPassword((v) => !v)}
                tabIndex={-1}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-[#009e60] text-white py-2 rounded-lg font-semibold hover:bg-[#007a4d] transition"
            >
              Agree & Join
            </button>
          </form>

          <p className="text-center text-xs text-gray-500 mt-4">
            By joining, you agree to our <span className="text-[#009e60] font-medium cursor-pointer">Terms</span> and <span className="text-[#009e60] font-medium cursor-pointer">Privacy Policy</span>.
          </p>

          <hr className="my-6 border-t border-gray-200" />

          <p className="text-sm text-center text-gray-600">
            Already have an account? <a href="/login" className="text-[#009e60] font-medium hover:underline">Sign in</a>
          </p>

          <div className="my-6 flex items-center justify-center text-gray-400">
            <hr className="w-1/4 border-gray-200" />
            <span className="mx-2 text-sm">or</span>
            <hr className="w-1/4 border-gray-200" />
          </div>

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

export default SignupPage;
