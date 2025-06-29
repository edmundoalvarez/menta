import { useNavigate } from "react-router-dom";
import styles from "./services.module.css";

const Services = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className={`bg-darkGray text-white ${styles.gradient}`}>
                <div
                    id="homeSeccion1"
                    className="h-[70vh] bg-cover bg-center bg-no-repeat relative"
                    style={{
                        backgroundImage: "url('/imgs/pc-about-mobile.jpg')",
                    }}
                >
                    {/* Filtro oscuro con opacidad del 60% */}
                    <div className="absolute inset-0 gradient-overlay"></div>

                    {/* Contenido de la sección */}
                    <div className="relative z-10 flex flex-col items-start justify-end h-full text-white text-left w-[90%] lg:max-w-[1200px] mx-auto pb-10">
                        <h2 className="font-black font-acumin-black uppercase text-[70pt] md:text-[90pt] leading-[4.4rem] md:leading-[5.8rem] max-w-[350px]">
                            Nuestros{" "}
                            <span className="text-primary">servicios</span>{" "}
                        </h2>
                    </div>
                </div>

                <section className="py-0 pb-0 w-[95%] lg:max-w-[1200px] mx-auto my-10 grid gap-6 lg:gap-10 md:grid-cols-2">
                    <div className="bg-darkBackground overflow-hidden rounded-sm">
                        <div className="w-full h-[240px] overflow-hidden">
                            <img
                                src="/imgs/web-services_web.jpg"
                                alt="Páginas Web"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div className="p-6 ">
                            <h3 className="uppercase text-primary py-2 w-fit text-4xl font-black font-acumin-black ">
                                Páginas Web
                            </h3>
                            <p>
                                Sitios modernos, responsivos y optimizados para
                                buscadores. Diseñados desde cero o utilizando
                                plantillas según tu necesidad y presupuesto.
                            </p>
                        </div>
                    </div>

                    <div className="bg-darkBackground overflow-hidden rounded-sm">
                        <div className="w-full h-[240px] overflow-hidden">
                            <img
                                src="/imgs/web-services_sistemas.jpg"
                                alt="Páginas Web"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>{" "}
                        <div className="p-6">
                            <h3 className="uppercase text-primary py-2 w-fit text-4xl leading-7 font-black font-acumin-black ">
                                Sistemas de Gestión
                            </h3>
                            <p>
                                Desarrollo de sistemas a medida o soluciones
                                enlatadas para la gestión interna de tu empresa:
                                stock, ventas, clientes, turnos, etc.
                            </p>
                        </div>
                    </div>

                    <div className="bg-darkBackground overflow-hidden rounded-sm">
                        <div className="w-full h-[240px] overflow-hidden">
                            <img
                                src="/imgs/web-services_landing.jpg"
                                alt="Páginas Web"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>{" "}
                        <div className="p-6">
                            <h3 className="uppercase text-primary py-2 w-fit text-4xl font-black font-acumin-black ">
                                Landing Pages
                            </h3>
                            <p>
                                Pensadas para convertir: ideales para campañas,
                                lanzamientos o promociones. Rápida
                                implementación y diseño atractivo.
                            </p>
                        </div>
                    </div>

                    <div className="bg-darkBackground overflow-hidden rounded-sm">
                        <div className="w-full h-[240px] overflow-hidden">
                            <img
                                src="/imgs/web-services_branding.jpg"
                                alt="Páginas Web"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>{" "}
                        <div className="p-6">
                            <h3 className="uppercase text-primary py-2 w-fit text-4xl font-black font-acumin-black ">
                                Branding
                            </h3>
                            <p>
                                Naming, logos, colores y todo lo necesario para
                                construir una marca sólida y coherente desde lo
                                visual.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA final */}
                <section className="bg-darkGray text-darkBackground pt-14 lg:pt-40 pb-30 lg:pb-50 text-center">
                    <div className="border-b-2 md:border-b-4 border-b-primary w-fit m-auto mb-6">
                        <h3 className="uppercase text-lightGray text-center m-auto py-2 w-fit text-6xl md:text-[70pt] leading-12 md:leading-20 font-black font-acumin-black ">
                            Contanos tu idea
                        </h3>
                    </div>
                    <div className="max-w-[320px] md:max-w-[400px] m-auto">
                        <p className="mb-6 text-terciary">
                            Completá el formulario y nos pondremos en contacto
                            con vos lo mas rapido posible.
                        </p>
                    </div>
                    <button
                        onClick={() => navigate("/contacto")}
                        className="mt-4 mb-0 text-primary font-semibold uppercase text-lg"
                    >
                        Ir al formulario
                    </button>
                </section>
            </div>
        </div>
    );
};

export default Services;
