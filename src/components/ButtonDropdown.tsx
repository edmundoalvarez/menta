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
    const [isOpen, setOpen] = useState(false);

    return (
        <DropdownMenu onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild className=" hover:bg-transparent">
                <Button
                    size="icon"
                    aria-label="Open account menu"
                    className="w-10 h-10 flex items-center justify-center p-0 bg-transparent"
                >
                    <Hamburger toggled={isOpen} toggle={setOpen} size={26} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-1 border-darkBackground w-[200px] mt-6 mr-[5vw] z-50 relative p-2 shadow-lg bg-darkGray/90 backdrop-blur-xs animate-[var(--animate-fade-in)] rounded-xl">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <a className="text-md" href="/">
                            Inicio
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a className="text-md" href="/nuestros-servicios">
                            Nuestros servicios
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a className="text-md" href="/sobre-nosotros">
                            Sobre nosotros
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a className="text-md" href="/contacto">
                            Contacto
                        </a>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
