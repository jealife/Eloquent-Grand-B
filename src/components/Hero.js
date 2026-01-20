import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
            {/* Background Narrative */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Images/Eloquent-Grand-B_1.jpg"
                    alt="Eloquent Grand B - L'Âme du Gabon et Maître des Mélodies"
                    fill
                    className="object-cover opacity-40 grayscale scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-[#050505]/40"></div>
                <div className="absolute inset-0 bg-linear-to-r from-[#050505] via-transparent to-[#050505]/20"></div>
            </div>

            {/* Cinematic Overlay Decoration */}
            <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden lg:flex flex-col gap-20 items-center opacity-20 pointer-events-none">
                <span className="vertical-text text-[10px] uppercase tracking-[1em] font-bold text-white">EST. 2018</span>
                <div className="h-40 w-px bg-white"></div>
            </div>

            {/* Main Content Area */}
            <div className="container relative z-10 px-8 lg:px-20 mt-20">
                <div className="flex flex-col items-center justify-center text-center max-w-[2000px] mx-auto">

                    <div className="mb-12 overflow-hidden" data-aos="fade-down">
                        <span className="inline-block text-accent text-[10px] sm:text-xs tracking-[0.8em] uppercase font-bold reveal-text">
                            Le Prince des Mélodies
                        </span>
                    </div>

                    <div className="relative group cursor-default">
                        <h1
                            className="text-white font-serif text-[18vw] lg:text-[14vw] leading-[0.75] tracking-tighter"
                            data-aos="zoom-out"
                            data-aos-duration="2000"
                        >
                            Eloquent<br />
                            <span className="text-accent italic font-light ml-[10vw] lg:ml-[15vw]">Grand B</span>
                        </h1>

                        {/* Floating Decorative Text */}
                        <div
                            className="absolute -top-[5%] -right-[5%] text-[12vw] font-serif text-outline opacity-[0.05] pointer-events-none select-none z-[-1] italic"
                            data-aos="fade-left"
                            data-aos-delay="800"
                        >
                            GABON
                        </div>
                    </div>

                    <div className="mt-20 max-w-2xl mx-auto space-y-12" data-aos="fade-up" data-aos-delay="1000">
                        <p className="text-text-muted text-lg sm:text-xl font-light leading-relaxed tracking-wide italic px-4">
                            "Une fusion symbiotique entre l'héritage ancestral et l'audace contemporaine."
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-8">
                            <a
                                href="#projets"
                                className="group relative px-14 py-6 overflow-hidden rounded-full border border-white/10 transition-all duration-700 hover:border-accent"
                            >
                                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]"></div>
                                <span className="relative z-10 text-white group-hover:text-black uppercase tracking-[0.4em] text-[10px] font-bold transition-colors">
                                    Explorer l'Archive
                                </span>
                            </a>

                            <div className="h-px w-12 bg-white/10 hidden sm:block"></div>

                            <a
                                href="#contact"
                                className="text-white/40 hover:text-accent uppercase tracking-[0.4em] text-[10px] font-bold transition-all flex items-center gap-4 group"
                            >
                                Contact / Réservation
                                <span className="h-10 w-10 flex items-center justify-center rounded-full border border-white/5 group-hover:border-accent transition-all">
                                    <i className="bx bx-right-arrow-alt text-xl"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress / Year Indicator */}
            <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end gap-2 opacity-20 select-none pointer-events-none">
                <span className="text-[10px] uppercase tracking-[0.5em] text-white">L'Œuvre</span>
                <span className="text-4xl font-serif text-white italic">2024</span>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-30">
                <div className="h-16 w-px bg-linear-to-b from-white to-transparent"></div>
            </div>
        </section>
    );
}
