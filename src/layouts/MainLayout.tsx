import { Outlet, Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

const MainLayout = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            {/* 🏠 Navbar */}
            <header className="bg-red-800 text-white p-4">
                <h1 className="text-xl font-bold">MyApp</h1>
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <nav className="container mx-auto flex justify-between">
                    <div>
                        <Link to="/" className="mx-2">
                            Home
                        </Link>
                        <Link to="/about" className="mx-2">
                            Abouts
                        </Link>
                    </div>
                </nav>
            </header>

            {/* 📌 Contenido dinámico */}
            <main className="flex-grow container mx-auto p-4">
                <Outlet />
            </main>

            {/* 📌 Footer */}
            <footer className="bg-gray-800 text-white p-4 text-center">
                © {new Date().getFullYear()} MyApp - Todos los derechos
                reservados
            </footer>
        </div>
    );
};

export default MainLayout;
