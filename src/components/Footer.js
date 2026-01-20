import Link from "next/link";

export default function Footer() {
    const socialLinks = [
        { name: "Tiktok", href: "https://www.tiktok.com/@princedesmelodies?_t=8qCmT48RtBp&_r=1" },
        { name: "Instagram", href: "https://www.instagram.com/eloquent.officiel/profilecard/?igsh=bmxnaTF1cGVoY3Bn" },
        { name: "Facebook", href: "https://www.facebook.com/share/Y2pFxPLeDDni9sxF/?mibextid=qi2Omg" },
        { name: "Youtube", href: "https://www.youtube.com/feed/library" },
        { name: "WhatsApp", href: "https://wa.me/24107961937" }
    ];

    return (
        <footer className="bg-[#020202] pt-60 pb-20 overflow-hidden relative border-t border-white/5">
            <div className="container mx-auto px-8 lg:px-20 relative z-10">

                {/* Massive Artistic Brand Text */}
                <div className="mb-40 overflow-hidden" data-aos="fade-up">
                    <div className="text-white font-serif text-[18vw] leading-[0.75] tracking-[calc(-0.05em)] opacity-[0.03] select-none italic whitespace-nowrap pointer-events-none">
                        Eloquent <span className="text-accent">Grand B</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-24 lg:gap-32">
                    <div className="lg:col-span-5 space-y-12" data-aos="fade-up">
                        <div className="flex flex-col">
                            <span className="text-white font-serif text-4xl lg:text-5xl">Eloquent Grand B</span>
                            <span className="text-accent text-[10px] uppercase tracking-[0.8em] font-bold mt-4">L'Âme du Gabon</span>
                        </div>
                        <p className="text-text-muted text-xl font-light leading-relaxed max-w-md">
                            Une fusion visionnaire entre l'héritage ancestral gabonais et les murmures de la modernité.
                        </p>
                    </div>

                    <div className="lg:col-span-2 space-y-10" data-aos="fade-up" data-aos-delay="100">
                        <h4 className="text-white text-[10px] uppercase tracking-[0.5em] font-bold">L'Univers</h4>
                        <ul className="space-y-6">
                            {[
                                { name: 'À Propos', href: '/a-propos' },
                                { name: 'Événements', href: '/evenements' },
                                { name: 'Œuvres', href: '/#projets' },
                                { name: 'Services', href: '/#services' },
                                { name: 'Galerie', href: '/#gallery' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-text-muted hover:text-accent transition-all text-sm font-light tracking-widest uppercase">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2 space-y-10" data-aos="fade-up" data-aos-delay="200">
                        <h4 className="text-white text-[10px] uppercase tracking-[0.5em] font-bold">Expertise</h4>
                        <ul className="space-y-6">
                            {[
                                { name: 'Performance', href: '/prestations' },
                                { name: 'Matériel', href: '/locations-materiel' },
                                { name: 'Studio', href: '/location-d-espace' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-text-muted hover:text-accent transition-all text-sm font-light tracking-widest uppercase">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3 space-y-10" data-aos="fade-up" data-aos-delay="300">
                        <h4 className="text-white text-[10px] uppercase tracking-[0.5em] font-bold">Réseaux</h4>
                        <div className="flex flex-col gap-6">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-muted hover:text-accent transition-all text-sm font-light tracking-widest uppercase flex items-center gap-4 group"
                                >
                                    <span className="h-px w-4 bg-white/10 group-hover:w-8 group-hover:bg-accent transition-all"></span>
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-60 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12" data-aos="fade-up">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <p className="text-white/20 text-[9px] uppercase tracking-[0.6em] font-medium">
                            © {new Date().getFullYear()} — Eloquent Grand B.
                        </p>
                        <p className="text-white/10 text-[7px] uppercase tracking-[0.4em]">Propulsé par l'Excellence Culturelle</p>
                    </div>

                    <div className="h-px w-20 bg-white/5 hidden md:block"></div>

                    <p className="text-white/20 text-[9px] uppercase tracking-[0.6em] font-medium flex items-center gap-4">
                        Conçu par <span className="text-accent italic">JEaLiFe Agency</span>
                    </p>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 h-[800px] w-[800px] bg-accent/5 blur-[200px] rounded-full pointer-events-none translate-x-1/2"></div>
        </footer>
    );
}
