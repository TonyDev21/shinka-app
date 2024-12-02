import { Outlet, Navigate }  from "react-router-dom"
import { useAuth } from "../../context/AuthProvider";

const ProtectedRouter = () => {
  const auth = useAuth();
  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRouter;