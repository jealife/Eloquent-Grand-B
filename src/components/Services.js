import Link from "next/link";
import Image from "next/image";

export default function Services() {
    const services = [
        {
            title: "Performance Scénique",
            description: "Une présence magnétique qui transforme chaque scène en un moment d'exception. Concerts, festivals et événements privés.",
            image: "/Images/pindi-concert-min.jpg",
            tag: "Concerts",
            href: "/prestations"
        },
        {
            title: "Location de Matériel",
            description: "Un arsenal technique professionnel : sonorisation complète, backline et instruments pour une clarté sonore absolue.",
            image: "/Images/instrument-de-musique.jpg",
            tag: "Technique",
            href: "/locations-materiel"
        },
        {
            title: "Espace Créatif",
            description: "Un studio de répétition et un espace de création inspirant, équipé pour les artistes en quête d'excellence sonore.",
            image: "/Images/location_d_espace.jpg",
            tag: "Studio",
            href: "/location-d-espace"
        }
    ];

    return (
        <section id="services" className="py-60 bg-[#020202] relative overflow-hidden">
            <div className="container mx-auto px-8 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12" data-aos="fade-up">
                    <div className="space-y-8">
                        <span className="text-accent text-[10px] uppercase tracking-[1em] font-bold">Expertise</span>
                        <h2 className="text-white font-serif text-7xl lg:text-8xl leading-[0.85] tracking-tighter">
                            Au Service de <br />
                            <span className="text-accent italic font-light">l'Excellence.</span>
                        </h2>
                    </div>
                    <p className="text-text-muted text-xl font-light leading-relaxed max-w-sm italic lg:mb-4">
                        "Des solutions sur-mesure pour donner vie à vos projets les plus audacieux."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {services.map((service, i) => (
                        <Link
                            key={i}
                            href={service.href}
                            className="group flex flex-col gap-10"
                            data-aos="fade-up"
                            data-aos-delay={i * 200}
                        >
                            <div className="relative aspect-3/4 w-full overflow-hidden rounded-[4rem] bg-surface-secondary border border-white/5 shadow-2xl">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[#020202]/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>

                                <div className="absolute top-10 left-10">
                                    <span className="px-6 py-2 glass rounded-full text-[9px] text-white uppercase tracking-[0.4em] font-bold">
                                        {service.tag}
                                    </span>
                                </div>

                                <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                                    <span className="text-white text-[10px] uppercase tracking-widest font-bold">En Savoir Plus</span>
                                    <div className="h-px grow mx-6 bg-white/20"></div>
                                    <i className="bx bx-right-arrow-alt text-2xl text-accent"></i>
                                </div>
                            </div>

                            <div className="space-y-6 px-4">
                                <h3 className="text-white text-3xl md:text-4xl font-serif group-hover:text-accent transition-colors duration-500">
                                    {service.title}
                                </h3>
                                <p className="text-text-muted font-light leading-relaxed text-lg">
                                    {service.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Background Accent */}
            <div className="absolute bottom-[-10%] left-[-5%] h-[600px] w-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none"></div>
        </section>
    );
}
