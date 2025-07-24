
// import axios from 'axios';

// const API = axios.create({
//   baseURL: import.meta.env.VITE_BACKEND_URL || 'https://webcraftbackend.onrender.com/api',
// });

// const loginWithEmail = async (email, password) => {
//   const res = await API.post('/auth/login', { email, password });
//   return res.data;
// };

// const loginWithGoogle = async (credential) => {
//   const res = await API.post('/auth/google', { credential });
//   return res.data;
// };

// const register = async (userData) => {
//   const response = await API.post('/auth/register', {userData});
//   return response.data;
// };

// const authService = {
//   loginWithEmail,
//   loginWithGoogle,
//   register,
// };

// export default authService;


// src/services/authService.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://webcraftbackend.onrender.com/api' || 'http://localhost:5000/api',
});

const loginWithEmail = async (email, password) => {
  const res = await API.post('/auth/login', { email, password });
  return res.data;
};

const loginWithGoogle = async (credential) => {
  const res = await API.post('/auth/google', { credential });
  return res.data;
};

const register = async (userData) => {
  const response = await API.post('/auth/register', {userData});
  return response.data;
};

const authService = {
  loginWithEmail,
  loginWithGoogle,
  register,
};

export default authService;