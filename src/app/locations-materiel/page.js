import Image from "next/image";
import Contact from "../../components/Contact";

export const metadata = {
    title: "Location de Matériel Sonore Professionnel",
    description: "Location de sonorisation complète, backline et instruments à Libreville. Profitez d'un matériel de haute qualité pour vos concerts et événements.",
};

export default function LocationsMateriel() {
    const equipment = [
        {
            title: "Système de Sonorisation",
            subtitle: "Baffe amplifiée + Retour",
            price: "60.000 FCFA",
            unit: "/jour",
            image: "https://fr.yamaha.com/fr/files/sm12v_a01e74f78be417d00470da7bf536f770.jpg?impolicy=resize&imwid=1000&imhei=780",
            description: "Technologie Yamaha haute fidélité pour une diffusion sonore cristalline et puissante.",
            linkSuffix: "*Baffe amplifié + Retour (60.000 fcfa)*\nBonjour j'aimerai louer cet article."
        },
        {
            title: "Clavier de Scène",
            subtitle: "Piano Professionnel",
            price: "25.000 FCFA",
            unit: "/jour",
            image: "https://images.unsplash.com/photo-1642801454269-4d4e772622d6?q=80&w=1548&auto=format&fit=crop",
            description: "Instrument de précision pour les performances live exigeantes et les sessions studio.",
            linkSuffix: "*Piano (25.000 fcfa)*\nBonjour j'aimerai louer cet article."
        },
        {
            title: "Capture Vocale",
            subtitle: "Microphone HF / Fil",
            price: "5.000 FCFA",
            unit: "/jour",
            image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1470&auto=format&fit=crop",
            description: "Micros professionnels garantissant une clarté absolue pour orateurs et vocalistes.",
            linkSuffix: "*Micro (5.000 fcfa)*\nBonjour j'aimerai louer cet article."
        }
    ];

    return (
        <main className="bg-surface-accent">
            {/* Minimalist Hero */}
            <section className="relative h-[80dvh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/Images/instrument-de-musique.jpg" alt="Locations Materiel Background" fill className="object-cover opacity-20 grayscale" sizes="100vw" />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-black/40 to-background"></div>
                    <div className="absolute inset-0 bg-linear-to-t from-accent/5 via-transparent to-transparent"></div>
                </div>

                <div className="relative z-10 text-center space-y-8" data-aos="fade-up">
                    <div className="flex flex-col items-center gap-4 mb-4" data-aos="fade-down">
                        <span className="text-accent text-[10px] uppercase tracking-[0.8em] font-bold">L'Arsenal Technique</span>
                        <div className="h-20 w-px bg-linear-to-b from-accent to-transparent"></div>
                    </div>
                    <h1
                        data-aos="reveal-text"
                        className="text-white font-serif lg:text-[12vw] text-7xl leading-none tracking-tighter"
                    >
                        Maîtrise du <span className="text-accent italic font-light">Son.</span>
                    </h1>
                    <p className="text-text-muted text-lg font-light tracking-widest uppercase max-w-sm mx-auto" data-aos="fade-up" data-aos-delay="500">
                        Technologie au service de l'Art
                    </p>
                </div>
            </section>

            {/* Showcase Grid */}
            <section className="py-40 px-6 relative">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center mb-32 space-y-6">
                        <span className="text-accent text-xs uppercase tracking-[0.5em] font-bold" data-aos="fade-up">Matériel Professionnel</span>
                        <h3 className="text-4xl lg:text-5xl font-serif text-white max-w-2xl leading-tight" data-aos="fade-up" data-aos-delay="100">
                            Louez l'Excellence pour <span className="text-accent italic font-light">Vos Événements</span>
                        </h3>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-16">
                        {equipment.map((item, i) => (
                            <div
                                key={i}
                                className="group relative flex flex-col"
                                data-aos="fade-up"
                                data-aos-delay={i * 200}
                            >
                                <div className="relative aspect-3/4 rounded-[2.5rem] overflow-hidden border border-white/5 bg-surface mb-8">
                                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 300px" />
                                    <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60"></div>
                                    <div className="absolute top-8 right-8">
                                        <div className="glass h-12 w-12 rounded-full flex items-center justify-center text-accent">
                                            <i className="bx bx-check-shield text-xl"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="h-px w-8 bg-accent/40"></span>
                                            <span className="text-accent text-[10px] uppercase tracking-widest font-bold">{item.subtitle}</span>
                                        </div>
                                        <h4 className="text-3xl font-serif text-white group-hover:text-accent transition-colors duration-500">
                                            {item.title}
                                        </h4>
                                    </div>

                                    <p className="text-text-muted text-sm font-light leading-relaxed">
                                        {item.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-8 border-t border-white/5">
                                        <div className="flex flex-col">
                                            <span className="text-white text-2xl font-serif leading-none">{item.price}</span>
                                            <span className="text-white/30 text-[10px] uppercase tracking-widest mt-1">{item.unit}</span>
                                        </div>
                                        <a
                                            href={`https://wa.me/24107961937?text=${encodeURIComponent(item.linkSuffix)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="h-14 px-10 glass text-accent text-[10px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-accent hover:text-black transition-all duration-500 flex items-center justify-center"
                                        >
                                            Demander
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Statement */}
            <section className="py-40 bg-surface/30">
                <div className="container mx-auto px-6 max-w-5xl text-center space-y-12" data-aos="fade-up">
                    <span className="text-accent text-[10px] uppercase tracking-[0.5em] font-bold">Standard de Qualité</span>
                    <h3 className="text-white font-serif text-4xl lg:text-6xl leading-tight">
                        Chaque pièce est méticuleusement <br />
                        <span className="text-accent italic font-light">Entretenue & Testée.</span>
                    </h3>
                    <p className="text-text-muted text-lg font-light max-w-2xl mx-auto italic">
                        "La qualité du son ne doit jamais être un compromis. Nous fournissons uniquement des équipements de haute performance pour garantir le succès de vos projets artistiques."
                    </p>
                </div>
            </section>

            <Contact />
        </main>
    );
}
