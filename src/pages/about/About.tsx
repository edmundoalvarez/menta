import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div
                id="homeSeccion1"
                className="h-[90vh] lg:h-[80vh] bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: "url('/imgs/pc-about-2-mobile.jpg')",
                }}
            >
                {/* Filtro oscuro con opacidad del 60% */}
                <div className="absolute inset-0 gradient-overlay"></div>

                {/* Contenido de la sección */}
                <div className="relative z-10 flex flex-col items-start lg:items-center justify-end h-full text-white text-left w-[90%] lg:max-w-[1200px] mx-auto pb-10">
                    <h2 className="font-black font-acumin-black uppercase text-[70pt] md:text-[90pt] leading-[4.4rem] md:leading-[5.8rem] max-w-[350px] lg:max-w-[800px]">
                        Sobre <span className="text-primary">nosotros</span>{" "}
                    </h2>
                </div>
            </div>

            {/* Sección 2 con curva */}
            <div className="relative z-20 bg-darkGray p-0 text-left lg:text-center -mt-2.5 ">
                <div className="bg-darkGray  pb-20 text-darkGray lg:max-w-[1200px] lg:mx-auto">
                    <h2 className="hidden text-xl text-white w-[90%] m-auto mb-4 uppercase">
                        <strong>Quiénes somos</strong>
                    </h2>
                    <p className="w-[90%] lg:max-w-[800px] m-auto lg:m-auto mb-4 text-white">
                        En Menta creemos en la potencia de las ideas bien
                        ejecutadas. Somos un equipo apasionado por la
                        tecnología, el diseño y la innovación, enfocados en
                        crear soluciones digitales que marquen la diferencia.
                    </p>
                    <p className="w-[90%] lg:max-w-[800px] m-auto lg:m-auto lg:mt-4 mb-4 text-white">
                        Trabajamos con una mentalidad de crecimiento constante,
                        siempre mirando hacia adelante, sin miedo a los desafíos
                        y con la determinación de ofrecer resultados que
                        realmente sumen valor. Desde Argentina, colaboramos con
                        clientes de todo el mundo, ayudándolos a construir su
                        presencia digital con identidad, eficiencia y alto
                        impacto.
                    </p>
                    <p className="w-[90%] lg:max-w-[800px] m-auto lg:m-auto lg:mt-4 mb-4 text-white">
                        <strong className="text-primary">
                            Diseñamos, desarrollamos y potenciamos negocios en
                            el mundo digital.
                        </strong>
                    </p>
                </div>
                <div className="border-t border-t-primary w-[200px] md:w-[400px] ml-5 md:ml-[60px] lg:mx-auto"></div>
                <div className="bg-darkBackground text-background py-20">
                    <h2 className="font-black font-acumin-black uppercase text-6xl md:text-[55pt] leading-[3.75rem] md:leading-[5rem] w-[90%] md:w-[65%] lg:w-[90%] lg:max-w-[1200px] m-auto lg:text-center">
                        <strong>Filosofía</strong>
                    </h2>
                    {/* <h2 className="text-xl w-[90%] m-auto mb-4 uppercase">
                        <strong>Filosofía</strong>
                    </h2> */}
                    <p className="w-[90%] md:w-[65%] lg:w-[90%] lg:max-w-[600px] m-auto mb-4 lg:text-center mt-6">
                        Creemos que la tecnología debe ser un aliado para
                        escalar negocios y optimizar procesos. Por eso,{" "}
                        <span className="text-primary">
                            cada solución que diseñamos se adapta a las
                            necesidades reales de nuestros clientes
                        </span>
                        , asegurando eficiencia, funcionalidad y una experiencia
                        de usuario superior.
                    </p>
                </div>
                <div className="border-t border-t-primary w-[200px] md:w-[400px] ml-5 md:ml-[60px] lg:mx-auto"></div>
                <div className="bg-darkGray text-white  py-20">
                    <h2 className="font-black font-acumin-black uppercase text-6xl md:text-[55pt] leading-[3rem] md:leading-[5rem] w-[90%] md:w-[65%] lg:w-[90%] lg:max-w-[1200px] m-auto lg:text-center">
                        <strong>Métodos de Trabajo</strong>
                    </h2>
                    {/* <h2 className="text-xl w-[90%] m-auto mb-4 uppercase">
                        <strong>Filosofía</strong>
                    </h2> */}
                    <p className="w-[90%] md:w-[65%] lg:w-[90%] lg:max-w-[1200px] m-auto mb-4 flex flex-col lg:text-center mt-6">
                        <strong className="text-primary">
                            Análisis y estrategia{" "}
                        </strong>
                        <span>
                            Entendemos tu necesidad y definimos un roadmap
                            claro.
                        </span>
                    </p>
                    <p className="w-[90%] md:w-[65%] lg:w-[90%] lg:max-w-[1200px] m-auto mb-4 flex flex-col lg:text-center g:mt-2">
                        <strong className="text-primary">
                            Diseño y desarrollo{" "}
                        </strong>
                        <span>
                            Creamos soluciones modernas con tecnología de
                            vanguardia.
                        </span>
                    </p>
                    <p className="w-[90%] md:w-[65%] m-auto lg:w-[90%] lg:max-w-[1200px] mb-4 flex flex-col lg:text-center g:mt-2">
                        <strong className="text-primary">
                            Optimización y pruebas{" "}
                        </strong>
                        <span>
                            Nos aseguramos de que todo funcione a la perfección.
                        </span>
                    </p>
                    <p className="w-[90%] md:w-[65%] lg:w-[90%] lg:max-w-[1200px] m-auto mb-4 flex flex-col lg:text-center lg:mt-2">
                        <strong className="text-primary">
                            Lanzamiento y soporte{" "}
                        </strong>
                        <span>
                            Te acompañamos en el proceso de implementación.
                        </span>
                    </p>
                    <div className="bg-darkGray m-4 md:max-w-[600px] md:mx-auto p-6 border border-primary mt-20 lg:mt-40 lg:mb-30 rounded-sm">
                        <h2 className="font-black font-acumin-black uppercase text-6xl leading-[3.75rem] w-[100%] m-auto ">
                            <strong>Estamos listos</strong>
                        </h2>
                        <p className="m-auto mb-4">
                            Si buscas un equipo profesional, con visión global y
                            que realmente se involucre en tu proyecto,{" "}
                            <span className="text-primary">
                                en Menta estamos listos para ayudarte.
                            </span>
                        </p>
                        <div className="m-auto">
                            <button
                                className="mt-4 mb-0 text-primary font-semibold uppercase text-xl"
                                onClick={() => navigate("/contacto")}
                            >
                                Contactanos
                            </button>
                            {/* <button
                                className="mt-4 mb-0 px-6 py-2  border-2 border-primary text-background rounded-r-full shadow-lg"
                                onClick={() => navigate("/formulario-contacto")}
                            >
                                Contactanos
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
