import { Outlet, Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

const MainLayout = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <Hamburger toggled={isOpen} toggle={setOpen} />

            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
