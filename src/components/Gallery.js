import Image from "next/image";

export default function Gallery() {
    const images = [
        { src: "/Images/Eloquent-Grand-B_2.jpg", alt: "Eloquent Portait", size: "tall" },
        { src: "/Images/Eloquent-Grand-B_3.jpg", alt: "Performance Live", size: "wide" },
        { src: "/Images/Eloquent-Grand-B_4.jpg", alt: "Studio Session", size: "square" },
        { src: "/Images/Eloquent-Grand-B_6.jpg", alt: "Stage Moment", size: "tall" },
        { src: "/Images/Eloquent-Grand-B_8.jpg", alt: "Artistic Shot", size: "square" },
        { src: "/Images/Eloquent-Grand-B_12.jpg", alt: "Culture & Tradition", size: "wide" },
    ];

    return (
        <section id="gallery" className="py-60 bg-[#050505] relative overflow-hidden">
            {/* Cinematic Background Decoration */}
            <div className="absolute top-1/2 left-[-10%] text-[25vw] font-serif text-outline opacity-[0.03] pointer-events-none select-none -rotate-90 italic">
                ARCHIVE
            </div>

            <div className="container mx-auto px-8 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-end gap-12 mb-32" data-aos="fade-up">
                    <div className="space-y-6">
                        <div className="flex items-center gap-6">
                            <span className="text-accent text-[10px] uppercase tracking-[0.8em] font-bold">Galerie Visuelle</span>
                            <div className="h-px w-20 bg-accent/30"></div>
                        </div>
                        <h2 className="text-white font-serif text-7xl lg:text-9xl tracking-tighter leading-[0.85]">
                            Eclats de <br />
                            <span className="text-accent italic font-light">Lumière.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 auto-rows-[300px] md:auto-rows-[450px]">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className={`group relative overflow-hidden rounded-[4rem] bg-surface-secondary border border-white/5 shadow-2xl
                                ${img.size === 'tall' ? 'row-span-2' : ''}
                                ${img.size === 'wide' ? 'col-span-2' : ''}
                            `}
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <div className="relative aspect-[3/4] w-full h-full">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-110"
                                />
                                {/* Premium Artistic Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-[#020202]/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-end p-12">
                                <div className="space-y-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                                    <span className="text-accent text-[10px] uppercase tracking-[0.5em] font-bold">L'Œuvre / Archives</span>
                                    <p className="text-white text-3xl font-serif italic pb-4 border-b border-white/10">
                                        {img.alt}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-40 flex flex-col items-center gap-20" data-aos="fade-up">
                    <div className="max-w-2xl text-center space-y-12">
                        <p className="text-text-muted font-light text-2xl leading-relaxed italic">
                            "Chaque image est un vers silencieux, capturant l'essence d'une performance et la profondeur d'un regard."
                        </p>
                        <div className="h-px w-24 bg-accent/40 mx-auto"></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-16 lg:gap-32">
                        {[
                            { name: 'Instagram', link: 'https://instagram.com/eloquentgrandb' },
                            { name: 'Facebook', link: 'https://facebook.com/DomyEloquentEloquent' },
                            { name: 'YouTube', link: '#' }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 text-white/30 hover:text-white transition-all duration-700"
                            >
                                <span className="text-[10px] uppercase tracking-[0.6em] font-bold group-hover:tracking-[0.8em] transition-all">
                                    {social.name}
                                </span>
                                <div className="h-8 w-8 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-700">
                                    <i className="bx bx-right-top-arrow-circle text-lg text-white group-hover:text-black transition-colors"></i>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
