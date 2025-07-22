import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Squash as Hamburger } from "hamburger-react";

export default function ButtonDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const handleOpenChange = (open: boolean) => {
        // Solo actualiza si es distinto para evitar rebotes rápidos
        if (isOpen !== open) setIsOpen(open);
    };

    return (
        <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
            <DropdownMenuTrigger asChild>
                <Button
                    size="icon"
                    aria-label="Open account menu"
                    className="w-10 h-10 flex items-center justify-center p-0 bg-transparent hover:bg-transparent"
                    onClick={handleToggle}
                >
                    <Hamburger
                        toggled={isOpen}
                        toggle={handleToggle}
                        size={26}
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-1 border-darkBackground w-[240px] mt-6 mr-[5vw] z-50 relative p-3 shadow-lg bg-darkGray/90 backdrop-blur-xs animate-[var(--animate-fade-in)] rounded-xl">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <a className="text-lg" href="/">
                            Inicio
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a className="text-lg" href="/nuestros-servicios">
                            Nuestros servicios
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a className="text-lg" href="/sobre-nosotros">
                            Sobre nosotros
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a className="text-lg" href="/contacto">
                            Contacto
                        </a>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
