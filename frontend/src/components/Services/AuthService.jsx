// src/services/authService.js
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api',
});

const loginWithEmail = async (email, password) => {
  const res = await API.post('/auth/login', { email, password });
  return res.data;
};

const loginWithGoogle = async (credential) => {
  const res = await API.post('/auth/google', { credential });
  return res.data;
};

/**const register = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
  return response.data;
};**/

const authService = {
  loginWithEmail,
  loginWithGoogle,
  //register,
};

export default authService;
