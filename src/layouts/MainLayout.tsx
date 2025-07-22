import { Outlet, NavLink } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop"; // asegurate del path

// import styles from "./MainLayout.module.css";
import ButtonDropdown from "./../components/ButtonDropdown";
// import { DropdownMenu } from "@radix-ui/react-dropdown-menu";

const MainLayout = () => {
    return (
        <div>
            {/* 🏠 Navbar */}
            <header className="bg-darkGray/90 backdrop-blur-xs border border-darkGray text-white py-4 px-6 fixed inset-x-0 w-[90%] mx-auto top-4 z-50 shadow-md rounded-xl">
                <div className="container mx-auto flex flex-row items-center justify-between md:max-w-full">
                    {/* Logo */}
                    <h1 className="sr-only">MyApp</h1>
                    <img
                        // src="/bisonte-logo-completo.svg"
                        src="/menta-02-04.svg"
                        alt="Logo de Menta"
                        className="h-10"
                    />

                    {/* Botón Hamburguesa */}
                    <div className="lg:hidden">
                        {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
                        <ButtonDropdown />
                    </div>

                    {/* Menú Desktop */}
                    <nav className="hidden lg:flex space-x-8">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `hover:text-primary transition text-sm ${
                                    isActive ? "text-primary-b" : ""
                                }`
                            }
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            to="/nuestros-servicios"
                            className={({ isActive }) =>
                                `hover:text-primary transition text-sm ${
                                    isActive ? "text-primary-b" : ""
                                }`
                            }
                        >
                            Nuestros servicios
                        </NavLink>
                        <NavLink
                            to="/sobre-nosotros"
                            className={({ isActive }) =>
                                `hover:text-primary transition text-sm ${
                                    isActive ? "text-primary-b" : ""
                                }`
                            }
                        >
                            Sobre Nosotros
                        </NavLink>
                        <NavLink
                            to="/contacto"
                            className={({ isActive }) =>
                                `hover:text-primary transition text-sm ${
                                    isActive ? "text-primary-b" : ""
                                }`
                            }
                        >
                            Contacto
                        </NavLink>
                    </nav>
                </div>
            </header>

            <ScrollToTop />
            {/* 📌 Contenido dinámico */}
            <main className="flex-grow w-full mx-auto">
                <Outlet />
            </main>

            {/* 📌 Footer */}
            <footer className="bg-primary text-darkGray px-4 md:px-10 lg:px-20 pt-10 pb-6 lg:pt-20 text-center lg:flex lg:flex-wrap lg:flex-row lg:justify-between lg:items-start">
                <div className="lg:w-[30%]">
                    <img
                        src="/menta-02-06.svg"
                        alt="Logo de Menta"
                        className="h-16"
                    />
                </div>
                <div className="flex flex-col justify-start text-left my-10 lg:my-0 lg:w-[30%]">
                    <ul>
                        <li>
                            <a href="#">Inicio</a>
                        </li>
                        <li>
                            <a href="/nuestros-servicios">Nuestros servicios</a>
                        </li>
                        <li>
                            <a href="/sobre-nosotros">Sobre nosotros</a>
                        </li>
                        <li>
                            <a href="/contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-start text-left mt-10 lg:mt-0 lg:mb-20">
                    <a
                        href="https://www.instagram.com/estudiomenta"
                        className="flex flex-row gap-1 justify-start align-middle"
                    >
                        <img
                            src="/instagram.svg"
                            alt="Logo de de Instagram"
                            className="w-5"
                        />
                        <strong className=" text-secondary">
                            @mentha.labs
                        </strong>
                    </a>
                </div>
                <div className="flex-grow border-t border-secondary mt-10 lg:w-full"></div>
                <div className="text-sm mt-6 lg:w-full lg:text-right">
                    All rights reserved © {new Date().getFullYear()} Mentha Labs
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
