import { useNavigate } from "react-router-dom";
import { Marquee } from "./magicui/marquee";

export const BannerMarquee = () => {
    const navigate = useNavigate();

    const content = Array(40).fill("// CONTACTANOS").join(" ");

    return (
        <div
            className="relative bg-lightGray border-y-4 border-y-darkGray my-1 py-4 flex flex-col justify-center items-center cursor-pointer group"
            onClick={() => navigate("/contacto")}
            style={{
                transform: "rotate(-3deg)",
            }}
        >
            <Marquee
                className="tracking-wider absolute whitespace-nowrap text-terciary border-y-2 border-y-terciary h-fit py-0 font-black font-acumin-black uppercase text-3xl transition-colors [--duration:120s] darkGray group-hover:text-secondary group-hover:border-y-primary"
                pauseOnHover={false}
            >
                <span className="whitespace-nowrap">{content}</span>
            </Marquee>
        </div>
    );
};
