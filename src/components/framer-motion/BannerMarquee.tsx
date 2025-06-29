import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export const BannerMarquee = () => {
    const navigate = useNavigate();
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".marquee-inner", {
                xPercent: -50,
                repeat: -1,
                duration: 10,
                ease: "linear",
            });
        }, marqueeRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={marqueeRef}
            className="relative bg-lightGray border-y-4 border-y-darkGray my-1 py-4 flex flex-col justify-center items-center cursor-pointer group"
            style={{
                transform: "rotate(-3deg)",
            }}
            onClick={() => navigate("/contacto")}
        >
            <div
                className="marquee-inner absolute whitespace-nowrap text-terciary border-y-2 border-y-terciary h-fit py-0 font-black font-acumin-black uppercase text-3xl transition-colors duration-300
                darkGray group-hover:text-darkGray group-hover:border-y-primary"
            >
                {Array(2)
                    .fill(Array(4).fill("CONTACTANOS").join(" - "))
                    .join(" - ")}
            </div>
        </div>
    );
};
