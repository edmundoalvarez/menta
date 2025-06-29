import { MarqueeDemo } from "@/components/MarqueeDemo";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion, easeOut } from "framer-motion";
import { BannerMarquee } from "@/components/BannerMarquee";
import { useState } from "react";

const Home = () => {
    const navigate = useNavigate();

    const [modalOpen, setModalOpen] = useState(false);
    const [servicioActivo, setServicioActivo] = useState<
        null | (typeof servicios)[0]
    >(null);

    const servicios = [
        {
            titulo: "Páginas web",
            fondo: "bg-primary-b",
            descripcion:
                "*Diseñamos y desarrollamos sitios web modernos, optimizados para performance y experiencia de usuario.",
        },
        {
            titulo: "Sistemas",
            fondo: "bg-darkBackground",
            descripcion:
                "*Automatizá la gestión de tu negocio con nuestros sistemas personalizados o soluciones enlatadas.",
        },
        {
            titulo: "Landing Pages",
            fondo: "bg-primary-b",
            descripcion:
                "*Convierte visitantes en clientes con páginas optimizadas para campañas y marketing digital.",
        },
        {
            titulo: "Branding",
            fondo: "bg-darkBackground",
            descripcion:
                "*Creamos identidades visuales impactantes para potenciar la imagen y presencia de tu marca.",
        },
    ];

    const listVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.4,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: easeOut },
        },
    };

    return (
        <div className="">
            <div
                id="homeSeccion1"
                className="h-[110vh] lg:h-[100vh] bg-cover bg-center bg-no-repeat relative "
                style={{ backgroundImage: "url('/imgs/pc-home-mobile.png')" }}
            >
                {/* Filtro oscuro con opacidad del 60% */}
                <div className="absolute inset-0 gradient-overlay"></div>

                {/* Contenido de la sección */}
                <div className="relative z-10 flex flex-col items-start justify-end h-full text-white text-left w-[90%] lg:max-w-[1200px] mx-auto ">
                    <h2 className="font-black font-acumin-black uppercase text-[70pt] md:text-[90pt] lg:text-[100pt] leading-[4.4rem] md:leading-[5.8rem] lg:leading-[6.2rem] max-w-[350px] md:max-w-[600px]">
                        Somos la{" "}
                        <span className="text-primary">solución digital</span>{" "}
                        que necesitás
                    </h2>
                    <button
                        className="mt-8 mb-20 px-6 py-2 border-2 border-primary text-white rounded-r-full shadow-lg"
                        onClick={() => navigate("/formulario-contacto")}
                    >
                        Contactanos
                    </button>
                </div>
            </div>

            {/* <section className="curved"></section> */}

            <div className="bg-lightGray -mt-1 pb-4">
                <section className="triangle-inverted"></section>
            </div>

            {/* Sección 2 con curva */}
            <div className="relative z-20 bg-lightGray pt-10 lg:pt-30 pb-0 lg:pb-10 text-left -mt-2.5">
                <div className="bg-lightGray  pb-10">
                    <h2 className="hidden text-xl text-darkGray w-[90%] m-auto mb-10 uppercase">
                        Nuestros <strong>servicios</strong>
                    </h2>
                    {/* <div className="flex items-center w-[90%] mx-auto mb-20">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <h2 className=" text-darkGray px-4 text-center">
                            Qué hacemos
                        </h2>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div> */}

                    <div className="w-[90%] max-w-[1200px] m-auto lg:flex lg:flex-row lg:justify-between">
                        <motion.ul
                            className="flex flex-col justify-center items-center lg:items-start gap-3 mt-0"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={listVariants}
                        >
                            {servicios.map((servicio, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.015,
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                        },
                                    }}
                                >
                                    <h3
                                        className={`
                                            cursor-pointer
                                            uppercase text-lightGray py-2 px-4 
                                            ${servicio.fondo} w-fit text-6xl md:text-[70pt] font-black font-acumin-black 
                                            transition-all duration-300
                                            hover:bg-darkGray hover:text-primary hover:border-1 hover:border-2-primary
                                            rounded-xs
                                        `}
                                        onClick={() => {
                                            setServicioActivo(servicio);
                                            setModalOpen(true);
                                        }}
                                    >
                                        {servicio.titulo}
                                    </h3>
                                </motion.li>
                            ))}
                        </motion.ul>
                        <div className="hidden lg:flex w-fit">
                            <img
                                src="/imgs/ilustracion-pc.svg"
                                alt="Descripción"
                                className="w-[380px] h-auto object-contain "
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-20 bg-lightGray flex flex-col justify-center items-center overflow-hidden lg:hidden">
                <BannerMarquee />
            </div>

            {/* Sección 3 con curva */}
            <div className="relative z-20 bg-lightGray pt-10 lg:pt-30 pb-20 lg:pb-40 text-left gradient-overlay-block-2 w-full">
                {/* <h2 className="text-xl text-darkGray w-[90%] m-auto mb-10 uppercase">
                    Nuestros <strong>Trabajos</strong>
                </h2> */}
                {/* <div className="flex items-center w-[90%] mx-auto mb-10">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <h2 className=" text-darkGray px-4 text-center">
                        Nuestros trabajos
                    </h2>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div> */}
                <div className="w-[90%] lg:max-w-[1200px] m-auto uppercase mt-0">
                    <ul className="flex flex-col justify-center items-center gap-4 lg:gap-12 md:flex-row md:flex-wrap md:gap-4">
                        <li className="w-full md:w-[48%] lg:w-[30%] aspect-square bg-background/95 text-white uppercase rounded-xs backdrop-blur-xs">
                            Trabajo
                        </li>
                        <li className="w-full md:w-[48%] lg:w-[30%] aspect-square bg-background/95 text-white uppercase rounded-xs backdrop-blur-xs">
                            Trabajo
                        </li>
                        <li className="w-full md:w-[48%] lg:w-[30%] aspect-square bg-background/95 text-white uppercase rounded-xs backdrop-blur-xs">
                            Trabajo
                        </li>
                        <li className="w-full md:w-[48%] lg:w-[30%] aspect-square bg-background/95 text-white uppercase rounded-xs backdrop-blur-xs">
                            Trabajo
                        </li>
                        <li className="w-full md:w-[48%] lg:w-[30%] aspect-square bg-background/95 text-white uppercase rounded-xs backdrop-blur-xs">
                            Trabajo
                        </li>
                        <li className="w-full md:w-[48%] lg:w-[30%] aspect-square bg-background/95 text-white uppercase rounded-xs backdrop-blur-xs">
                            Trabajo
                        </li>
                    </ul>
                </div>
                {/* <div className="relative z-10 flex flex-col items-start justify-end h-full text-darkGray text-left w-[90%] mx-auto ">
                    <button
                        className="mt-10 mb-20  px-6 py-2 border-2 border-primary text-white rounded-r-full shadow-lg"
                        onClick={() => navigate("/formulario-contacto")}
                    >
                        Ver todos
                    </button>
                </div> */}
            </div>
            {/* Sección 4 con curva */}
            <div className="relative z-20 bg-darkGray pt-10 pb-30 lg:pb-50 text-left w-full">
                <div className="flex items-center w-[90%] lg:max-w-[1200px] mx-auto mb-10">
                    <div className="flex-grow border-t border-gray-500"></div>
                    <h2 className=" text-lightGray px-4 text-center">
                        Nuestros <strong>clientes</strong>
                    </h2>
                    <div className="flex-grow border-t border-gray-500"></div>
                </div>
                <MarqueeDemo />
            </div>
            {/* Sección 5 con curva */}
            <div
                className="bg-cover bg-center bg-no-repeat relative py-10 lg:py-40"
                style={{
                    backgroundImage: "url('/imgs/pc-home-info-mobile.png')",
                }}
            >
                {/* Filtro oscuro con opacidad del 60% */}
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative flex justify-center">
                    {/* Contenido del div */}
                    <div
                        id="moreInfo"
                        className="relative z-10 p-8 bg-darkGray/60 backdrop-blur-md text-white text-center w-[90%] md:max-w-[500px] rounded-xs"
                    >
                        <div className="text-xl font-bold mb-4 flex flex-row justify-center items-center">
                            <motion.span
                                className="text-2xl mb-1 mr-1 w-5 h-5 flex items-center justify-center"
                                style={{ transformOrigin: "center center" }}
                                animate={{
                                    rotate: [0, 10, -10, 10, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                    duration: 1.5,
                                    ease: "easeInOut",
                                    times: [0, 0.1, 0.2, 0.3, 1],
                                }}
                            >
                                +
                            </motion.span>{" "}
                            <h2 className="lg:text-[20pt]">INFORMACIÓN</h2>
                        </div>
                        <p>
                            Para cualquier desarrollo contamos con 2
                            alternativas diferentes. Por un lado, el uso de
                            plantillas, que tendrá el beneficio de tiempo de
                            desarrollo, y por otro lado la realización de un
                            proyecto totalmente personalizado para tu empresa.
                        </p>

                        <div className="mt-10">
                            <label htmlFor="email" className="text-primary">
                                Dejanos tu E-mail y te contactaremos
                            </label>
                            <Input id="email" className="mt-2 rounded-xs" />
                        </div>
                    </div>
                </div>
            </div>

            {modalOpen && servicioActivo && (
                <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="bg-darkGray text-white max-w-lg w-full p-8 rounded-xl shadow-lg relative"
                    >
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-4 right-4 text-primary text-xl font-bold"
                        >
                            ×
                        </button>
                        <h2 className="text-3xl font-black font-acumin-black mb-4 uppercase">
                            {servicioActivo.titulo}
                        </h2>
                        <p className="text-sm text-white/80">
                            {servicioActivo.descripcion}
                        </p>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Home;
