import Image from "next/image";

export default function Projects() {
    const releases = [
        {
            title: "Drunk in Love",
            artist: "Eloquent Grand B",
            cover: "/Images/Eloquent-Grand-B-Drunk-In-Love-Cover.jpeg",
            type: "New Single",
            link: "https://gstoremusic.com/albums/eloquent-grand-b/869-drunk-in-love",
            year: "2023",
            description: "Une exploration charnelle et spirituelle de l'attachement."
        },
        {
            title: "New Day",
            artist: "Eloquent Grand B",
            cover: "/Images/New-Day-Cover.jpeg",
            type: "Single",
            link: "https://gstoremusic.com/artistes/269-eloquent-grand-b",
            year: "2023",
            description: "Le souffle d'une renaissance artistique gabonaise."
        }
    ];

    return (
        <section id="projets" className="py-60 bg-surface-accent relative overflow-hidden">
            {/* Background Narrative */}
            <div className="absolute top-0 right-0 w-full h-full premium-gradient opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-8 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12" data-aos="fade-up">
                    <div className="space-y-8">
                        <span className="text-accent text-[10px] uppercase tracking-[1em] font-bold">Discographie</span>
                        <h2 className="text-white font-serif text-6xl lg:text-8xl leading-[0.85] tracking-tighter">
                            L'Héritage <br />
                            <span className="text-accent italic font-light">Sonore.</span>
                        </h2>
                    </div>
                    <p className="text-text-muted text-xl font-light leading-relaxed max-w-sm italic lg:mb-4">
                        "Chaque œuvre est un voyage au cœur des racines gabonaises."
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">
                    {/* Main Featured Display */}
                    <div className="lg:col-span-12" data-aos="fade-up">
                        <div className="relative aspect-3/4 md:aspect-21/9 w-full overflow-hidden rounded-[4rem] group bg-surface-secondary border border-white/5 shadow-2xl" data-aos="zoom-out">
                            <Image
                                src="/Images/Eloquent-Grand-B_6.jpg"
                                alt="Featured Release Performance"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                sizes="100vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-90"></div>

                            <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-20 w-full flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
                                <div className="space-y-4 md:space-y-6">
                                    <span className="text-accent text-[10px] uppercase tracking-[0.5em] font-bold">Performance en Vedette</span>
                                    <h3 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif max-w-3xl leading-tight">
                                        L'art au service de la culture à Mouila
                                    </h3>
                                </div>
                                <a
                                    href="#gallery"
                                    className="h-20 w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-700 group shrink-0"
                                >
                                    <i className="bx bx-play text-3xl md:text-4xl text-white group-hover:text-black transition-colors translate-x-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Singles Grid */}
                    <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-24 mt-12">
                        {releases.map((release, i) => (
                            <div
                                key={i}
                                className="group flex flex-col gap-10"
                                data-aos="fade-up"
                                data-aos-delay={i * 200}
                            >
                                <div className="relative aspect-square w-full overflow-hidden rounded-[3rem] shadow-2xl border border-white/5">
                                    <Image
                                        src={release.cover}
                                        alt={release.title}
                                        fill
                                        className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center p-12">
                                        <div className="text-center space-y-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                                            <p className="text-white text-lg font-light italic leading-relaxed">"{release.description}"</p>
                                            <div className="h-px w-12 bg-accent mx-auto"></div>
                                        </div>
                                    </div>

                                    {/* Year Tag */}
                                    <div className="absolute top-10 right-10 glass px-6 py-2 rounded-full">
                                        <span className="text-white text-[10px] font-mono tracking-widest">{release.year}</span>
                                    </div>
                                </div>

                                <div className="space-y-6 px-4">
                                    <div className="flex items-center justify-between">
                                        <div className="h-px grow bg-white/5 mx-6"></div>
                                        <span className="text-white/20 text-[9px] uppercase tracking-widest font-medium">Archive #00{release.id}</span>
                                    </div>
                                    <h4 className="text-4xl lg:text-[2.75rem] font-serif text-white group-hover:text-accent transition-colors duration-500">
                                        {release.title}
                                    </h4>

                                    <div className="pt-6 border-t border-white/5">
                                        <a
                                            href={release.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-6 group/btn"
                                        >
                                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/50 group-hover:text-white transition-colors">Écouter l'Œuvre</span>
                                            <div className="h-px w-full bg-white/5 group-hover:w-24 group-hover:bg-accent transition-all duration-700"></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
