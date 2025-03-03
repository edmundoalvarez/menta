import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
    return !!localStorage.getItem("token"); // Lógica de autenticación
};

const PrivateRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
