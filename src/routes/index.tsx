import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/not-found/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/nuestros-servicios", element: <Services /> },
            { path: "/sobre-nosotros", element: <About /> },
            { path: "/contacto", element: <Contact /> },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

/* 
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <PrivateRoute />,
    children: [
      { path: "", element: <Dashboard /> },
    ],
  },
]);

 */
