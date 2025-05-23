// src/context/AuthContext.js
import React, { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('auth', 'true');
      return { ...state, isAuthenticated: true };
    case 'LOGOUT':
      localStorage.removeItem('auth');
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth') === 'true';
    if (storedAuth) {
      dispatch({ type: 'LOGIN' });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
