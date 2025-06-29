import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";

const reviews = [
    { id: 1, name: "Tekun", img: "/imgs/logos-web_tekun.svg" },
    { id: 2, name: "Malevo", img: "/imgs/logos-web_malevo.svg" },
    {
        id: 3,
        name: "Psicólogos Forenses",
        img: "/imgs/logos-web_psicologos.svg",
    },
    { id: 4, name: "Naistat", img: "/imgs/logos-web_naistat.svg" },
    {
        id: 5,
        name: "Corte Argentino",
        img: "/imgs/logos-web_corte-argentino.svg",
    },
    { id: 6, name: "Construcserv", img: "/imgs/logos-web_construcserv.svg" },
    { id: 7, name: "Parrillas Pigüé", img: "/imgs/logos-web_pigue.svg" },
    { id: 8, name: "Logistran", img: "/imgs/logos-web_logistran.svg" },
    { id: 9, name: "Del Litoral", img: "/imgs/logos-web_del-litoral.svg" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ name, img }: { name: string; img: string }) => {
    return (
        <figure
            className={cn(
                "relative w-[100px] md:w-[150px] lg:max-h-[70px] mx-10 cursor-pointer overflow-hidden p-0 shadow-md flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105"
            )}
        >
            <img
                src={img}
                alt={name}
                className="object-contain max-h-full max-w-full"
                loading="lazy"
            />
        </figure>
    );
};

export function MarqueeDemo() {
    const [duration, setDuration] = useState("20s");

    useEffect(() => {
        const handleResize = () => {
            const isLg = window.innerWidth >= 1024;
            setDuration(isLg ? "60s" : "20s");
        };

        handleResize(); // set on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="marquee-demo relative flex w-full flex-col items-center justify-center overflow-hidden gap-10">
            <Marquee pauseOnHover className={`[--duration:${duration}]`}>
                {firstRow.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </Marquee>

            <Marquee
                reverse
                pauseOnHover
                className={`[--duration:${duration}]`}
            >
                {secondRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
        </div>
    );
}
