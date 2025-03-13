import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes"; // Importamos el enrutador
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <div className="border border-blue-500 w-screen">
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    </div>
);
