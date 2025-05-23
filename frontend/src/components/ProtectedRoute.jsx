import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const auth = localStorage.getItem("auth");  // Adjust this to your authentication logic

  if (!auth) {
    return <Navigate to="/login" />;  // Redirect to login if no token
  }

  return children;  // Render children (i.e., the protected component)
};

export default ProtectedRoute;