import Image from "next/image";
import Contact from "../../components/Contact";

export const metadata = {
    title: "Expertise Scénique & Artistique",
    description: "Découvrez les prestations d'Eloquent Grand B : Concerts live, café-concerts intimistes, animations d'événements prestigieux et ateliers de slam au Gabon.",
};

export default function Prestations() {
    const services = [
        {
            title: "Café Concert",
            subtitle: "Performance Intime",
            price: "500.000 FCFA",
            duration: "60 min",
            description: "Une atmosphère feutrée et élégante, idéale pour les établissements de prestige et les réceptions privées.",
            linkSuffix: "*Café Concert*\n\nBonjour je souhaiterai vous solliciter pour un café concert."
        },
        {
            title: "Performance Live",
            subtitle: "Grand Spectacle",
            price: "1.500.000 FCFA",
            duration: "90 min",
            description: "Immersion totale dans l'univers Pindi. Une fusion puissante de poésie, chant et mise en scène artistique.",
            linkSuffix: "*Concert*\n\nBonjour je souhaiterai vous solliciter pour un concert."
        },
        {
            title: "Événement de Prestige",
            subtitle: "Mariage & Gala",
            price: "Sur Devis",
            duration: "Tailored",
            description: "Création d'une narration artistique sur mesure pour célébrer vos moments les plus précieux.",
            linkSuffix: "*Mariage*\n\nBonjour j'aimerais solliciter vos services pour l'animation d'un mariage."
        }
    ];

    const animations = [
        {
            title: "Maître de Cérémonie",
            price: "100.000 FCFA",
            description: "Une animation de haut vol avec une touche artistique unique pour vos célébrations.",
            linkSuffix: "*Anniversaire*\n\nBonjour j'aimerais vous solliciter pour un anniversaire."
        },
        {
            title: "Ateliers d'Éveil",
            price: "30.000 FCFA",
            description: "Transmettre la passion de l'art aux nouvelles générations à travers l'initiation pratique.",
            linkSuffix: "*Atelier Éveil*\n\nBonjour je souhaiterai vous solliciter pour un atelier d'éveil."
        },
        {
            title: "Masterclass Écriture",
            price: "Sur Devis",
            description: "Accompagnement professionnel dans la structuration du texte et l'éloquence orale.",
            linkSuffix: "*Atelier Écriture*\n\nBonjour je souhaiterai vous solliciter pour un atelier d'écriture."
        }
    ];

    return (
        <main className="bg-background">
            {/* Expertise Hero */}
            <section className="relative h-[80dvh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/Images/Eloquent-Grand-B_2.jpg" alt="Prestations Background" fill className="object-cover opacity-20 grayscale" sizes="100vw" />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-black/40 to-background"></div>
                    <div className="absolute inset-0 bg-linear-to-t from-accent/5 via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 text-center space-y-8" data-aos="fade-up">
                    <div className="flex flex-col items-center gap-4 mb-4" data-aos="fade-down">
                        <span className="text-accent text-[10px] uppercase tracking-[0.8em] font-bold">L'Expertise Scénique</span>
                        <div className="h-20 w-px bg-linear-to-b from-accent to-transparent"></div>
                    </div>
                    <h1
                        data-aos="reveal-text"
                        className="text-white font-serif lg:text-[12vw] text-7xl leading-none tracking-tighter"
                    >
                        Maîtrise de la <span className="text-accent italic font-light">Scène.</span>
                    </h1>
                    <p className="text-text-muted text-lg font-light tracking-widest uppercase max-w-sm mx-auto" data-aos="fade-up" data-aos-delay="500">
                        L'Émotion au Coeur de la Scène
                    </p>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-40 px-6 relative">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center mb-32 space-y-6">
                        <span className="text-accent text-xs uppercase tracking-[0.5em] font-bold" data-aos="fade-up">Performances d'Élite</span>
                        <h3 className="text-4xl lg:text-5xl font-serif text-white max-w-2xl leading-tight" data-aos="fade-up" data-aos-delay="100">
                            Des Prestations Sculptées pour <span className="text-accent italic font-light">L'Inoubliable</span>
                        </h3>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className="group relative glass p-12 lg:p-16 rounded-[3.5rem] border border-white/5 hover:border-accent/30 transition-all duration-700 flex flex-col h-full"
                                data-aos="fade-up"
                                data-aos-delay={i * 200}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-colors"></div>

                                <div className="space-y-8 relative z-10">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-2">
                                            <span className="text-accent text-[10px] uppercase tracking-widest font-bold">{service.subtitle}</span>
                                            <h4 className="text-3xl font-serif text-white group-hover:text-accent transition-colors duration-500">{service.title}</h4>
                                        </div>
                                        <span className="text-white/20 text-[10px] uppercase tracking-widest font-bold border border-white/10 px-3 py-1 rounded-full">{service.duration}</span>
                                    </div>

                                    <p className="text-text-muted text-sm font-light leading-relaxed min-h-20">
                                        {service.description}
                                    </p>

                                    <div className="pt-8 border-t border-white/5 mt-auto">
                                        <div className="space-y-4">
                                            <h3 className="text-white text-3xl font-serif">{service.title}</h3>
                                            <p className="text-text-muted font-light leading-relaxed min-h-20">{service.description}</p>
                                        </div>

                                        <a
                                            href={`https://wa.me/24107961937?text=${encodeURIComponent(`Bonjour, j'aimerais en savoir plus sur la prestation : ${service.linkSuffix}`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-5 glass text-accent text-[10px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-accent hover:text-black transition-all duration-500 flex items-center justify-center gap-3"
                                        >
                                            Demander <i className="bx bx-right-arrow-alt text-lg"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workshops & Animation */}
            <section className="py-40 px-6 bg-surface/30 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 text-[20vw] font-serif text-outline opacity-[0.02] pointer-events-none select-none translate-y-[-50%] italic">
                    IMPACT
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="max-w-xl mb-24 space-y-6">
                        <span className="text-accent text-xs uppercase tracking-[0.5em] font-bold" data-aos="fade-right">Ateliers & Événements</span>
                        <h3 className="text-4xl lg:text-6xl font-serif text-white leading-tight" data-aos="fade-right" data-aos-delay="100">
                            Transmission <br />
                            <span className="text-accent italic font-light">& Partage Attrayant.</span>
                        </h3>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {animations.map((item, i) => (
                            <div
                                key={i}
                                className="bg-background/40 p-12 rounded-[2.5rem] border border-white/5 hover:border-accent/20 transition-all duration-500 group"
                                data-aos="fade-up"
                                data-aos-delay={i * 150}
                            >
                                <div className="h-12 w-12 glass rounded-full flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
                                    <i className="bx bx-star text-xl"></i>
                                </div>
                                <h5 className="text-2xl font-serif text-white mb-4 group-hover:text-accent transition-colors">{item.title}</h5>
                                <p className="text-text-muted text-sm font-light leading-relaxed mb-10">{item.description}</p>

                                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                    <span className="text-white font-serif text-xl">{item.price}</span>
                                    <a
                                        href={`https://wa.me/24107961937?text=${encodeURIComponent(`Bonjour, j'aimerais réserver : ${item.linkSuffix}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-12 w-12 rounded-full glass flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-all duration-500"
                                    >
                                        <i className="bx bx-plus text-xl"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
