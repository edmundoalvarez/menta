const Contact = () => {
    return (
        <div>
            <div className="bg-darkBackground pt-30 pb-20">
                {/* Contenido de la sección */}
                <div className=" z-10 flex flex-col items-start justify-start h-full text-white text-left w-[90%] lg:max-w-[1200px] mx-auto">
                    <h2 className="font-black font-acumin-black uppercase text-[70pt] md:text-[90pt] leading-[4.4rem] md:leading-[5.8rem] max-w-[350px] lg:max-w-[550px] lg:text-center lg:m-auto lg:my-20">
                        Empecemos con los datos{" "}
                        <span className="text-primary">necesarios</span>{" "}
                    </h2>
                </div>
                <div className="mb-20">
                    <form className="w-[90%] lg:max-w-[800px] mx-auto mt-10 grid md:grid-cols-2 gap-6 text-white">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                id="nombre"
                                type="text"
                                className="px-6 py-4 bg-medGray text-white rounded-r-full shadow-lg border-l-2 border-primary"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="apellido">Apellido</label>
                            <input
                                id="apellido"
                                type="text"
                                className="px-6 py-4 bg-medGray text-white rounded-r-full shadow-lg border-l-2 border-primary"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="empresa">Empresa / proyecto</label>
                            <input
                                id="empresa"
                                type="text"
                                className="px-6 py-4 bg-medGray text-white rounded-r-full shadow-lg border-l-2 border-primary"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="px-6 py-4 bg-medGray text-white rounded-r-full shadow-lg border-l-2 border-primary"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="telefono">Celular / Whatsapp</label>
                            <input
                                id="telefono"
                                type="tel"
                                className="px-6 py-4 bg-medGray text-white rounded-r-full shadow-lg border-l-2 border-primary"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="pagina">
                                Página web actual (si tiene)
                            </label>
                            <input
                                id="pagina"
                                type="url"
                                className="px-6 py-4 bg-medGray text-white rounded-r-full shadow-lg border-l-2 border-primary"
                            />
                        </div>

                        <div className="flex flex-col md:col-span-2 gap-2">
                            <label htmlFor="descripcion">
                                ¿De qué trata tu empresa, proyecto,
                                emprendimiento?
                            </label>
                            <textarea
                                id="descripcion"
                                rows={4}
                                className="px-6 py-4 bg-medGray text-white resize-none shadow-lg border-l-2 border-primary"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="ubicacion">¿De dónde son?</label>
                            <input
                                id="ubicacion"
                                type="text"
                                className="px-6 py-4 bg-medGray text-white rounded-r-full shadow-lg border-l-2 border-primary"
                            />
                        </div>

                        <div className="flex flex-col md:col-span-2 gap-2">
                            <p>Servicios que te interesan</p>
                            <div className="border-l-2 border-primary pl-3">
                                {[
                                    "Página web",
                                    "Sistema administrativo",
                                    "Landing page",
                                    "Branding",
                                ].map((servicio, idx) => (
                                    <label
                                        key={idx}
                                        className={`flex items-center gap-2 ${
                                            idx === 0 ? "mt-0" : "mt-2"
                                        }`}
                                    >
                                        <input
                                            type="checkbox"
                                            value={servicio}
                                        />
                                        <span>{servicio}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col md:col-span-2 gap-2">
                            <label htmlFor="motivo">
                                ¿Qué esperás lograr con nuestra ayuda?
                            </label>
                            <textarea
                                id="motivo"
                                rows={4}
                                className="px-6 py-4 bg-medGray text-white resize-none shadow-lg border-l-2 border-primary"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-fit mt-8 px-6 py-2 border-2 border-primary text-white rounded-r-full shadow-lg"
                        >
                            Enviar formulario
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
