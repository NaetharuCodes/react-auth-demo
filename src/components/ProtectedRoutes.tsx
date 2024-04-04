import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    console.log("redirecting home");
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
