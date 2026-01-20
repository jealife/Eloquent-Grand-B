import Image from "next/image";
import Contact from "../../components/Contact";

export const metadata = {
    title: "Espace de Répétition & Création",
    description: "Location d'espaces artistiques équipés pour vos répétitions, workshops et événements créatifs à Libreville. Un cadre inspirant pour l'excellence.",
};

export default function LocationEspace() {
    const locations = [
        {
            title: "Performance Extérieure",
            price: "15.000 FCFA",
            unit: "/jour",
            description: "Mobilisation de notre expertise technique et de nos équipements pour vos événements hors-site.",
            linkSuffix: "*Prestation externe* - Bonjour j'aimerai louer votre espace"
        },
        {
            title: "Studio de Création",
            price: "7.500 FCFA",
            unit: "/jour",
            description: "Accès privilégié à notre résidence de création équipée d'une infrastructure sonore professionnelle.",
            linkSuffix: "*Prestation sur le lieu de répétition* - Bonjour j'aimerai louer votre espace"
        }
    ];

    return (
        <main className="bg-background">
            {/* Artistic Venue Hero */}
            <section className="relative h-[80dvh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Images/location_d_espace.jpg"
                        alt="Location d'Espace Hero"
                        fill
                        className="object-cover opacity-20 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-black/40 to-background"></div>
                </div>

                <div className="relative z-10 text-center space-y-8 px-6">
                    <div className="flex flex-col items-center gap-4 mb-4" data-aos="fade-down">
                        <span className="text-accent text-[10px] uppercase tracking-[0.8em] font-bold">Le Lieu</span>
                        <div className="h-10 w-px bg-accent/40"></div>
                    </div>
                    <h1
                        data-aos="reveal-text"
                        className="text-white font-serif lg:text-[12vw] text-7xl leading-none tracking-tighter"
                    >
                        Sanctuaire <span className="text-accent italic font-light">Créatif.</span>
                    </h1>
                    <p className="text-text-muted text-lg font-light tracking-widest uppercase max-w-sm mx-auto" data-aos="fade-up" data-aos-delay="500">
                        Où les idées prennent vie
                    </p>
                </div>
            </section>

            {/* Content & Options */}
            <section className="py-40 px-6 relative overflow-hidden">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-start">

                        <div className="space-y-12">
                            <div className="space-y-6">
                                <span className="text-accent text-xs uppercase tracking-[0.5em] font-bold" data-aos="fade-right">Infrastructure Artistique</span>
                                <h3 className="text-4xl lg:text-7xl font-serif text-white leading-[1.1]" data-aos="fade-right" data-aos-delay="100">
                                    Une Résidence <br />
                                    <span className="text-accent italic font-light">Pour l'Excellence.</span>
                                </h3>
                            </div>

                            <p className="text-text-muted text-xl font-light leading-relaxed max-w-xl" data-aos="fade-right" data-aos-delay="200">
                                Un environnement conçu pour les artistes exigeants. Que ce soit pour des répétitions intensives ou des captations live, notre espace s'adapte à votre vision créative.
                            </p>

                            <div className="grid grid-cols-2 gap-y-6 gap-x-12 pt-12 border-t border-white/5" data-aos="fade-up">
                                {[
                                    "Acoustique Traitée", "Sonorisation Yamaha", "Parc Micro Pro",
                                    "Backline Complet", "Monitoring Retour", "Espace Lounge"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-white/50 text-xs uppercase tracking-widest font-bold">
                                        <span className="h-1 w-1 bg-accent rounded-full"></span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-12" data-aos="fade-left">
                            <div className="flex flex-col items-center gap-10">
                                {locations.map((item, i) => (
                                    <div
                                        key={i}
                                        className="w-full glass p-12 lg:p-16 rounded-[3rem] border border-white/5 hover:border-accent/30 transition-all duration-700 group relative overflow-hidden"
                                    >
                                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors"></div>

                                        <div className="flex flex-col gap-6 relative z-10">
                                            <div className="space-y-2">
                                                <h5 className="text-3xl font-serif text-white group-hover:text-accent transition-colors duration-500">{item.title}</h5>
                                                <div className="h-px w-12 bg-accent/40"></div>
                                            </div>

                                            <p className="text-text-muted text-sm font-light leading-relaxed group-hover:text-white/60 transition-colors max-w-sm">{item.description}</p>

                                            <div className="flex items-end justify-between pt-8 border-t border-white/5 mt-4">
                                                <div className="flex flex-col">
                                                    <span className="text-white text-3xl font-serif leading-none">{item.price}</span>
                                                    <span className="text-white/30 text-[10px] uppercase tracking-widest mt-1">{item.unit}</span>
                                                </div>
                                                <a
                                                    href={`https://wa.me/24107961937?text=${encodeURIComponent(item.linkSuffix)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="h-14 px-10 glass text-accent text-[10px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-accent hover:text-black transition-all duration-500 flex items-center justify-center"
                                                >
                                                    Réserver
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
