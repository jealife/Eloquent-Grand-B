"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function EvenementsContent() {
    const events = [
        {
            id: 1,
            title: "Apéro Live Music : Je t'invoque",
            date: "18 Décembre 2025",
            location: "Institut Français du Gabon",
            image: "https://institutfrancais-gabon.com/wp-content/uploads/2025/11/EVENT-CONCERT-ELOQUENT-DEC-2025-o.png",
            category: "Performance Live",
            description: "Une création poétique et musicale immersive où l'artiste mêle poésie, chant et instruments pour explorer la quête de sens et les racines spirituelles.",
            isFinished: true,
            sourceUrl: "https://institutfrancais-gabon.com/evenements/musique-je-tinvoque-eloquent-grand-b/"
        },
        {
            id: 2,
            title: "Grand Slam National 2025",
            date: "05 Juillet 2025",
            location: "Libreville, Gabon",
            image: "https://mbolwe.com/wp-content/uploads/2025/06/FB_IMG_1750444530001-780x470.jpg",
            category: "Compétition",
            description: "Une compétition majeure organisée par la Fédération gabonaise de poésie urbaine (FEGAPUR), déterminante pour la représentation du Gabon à l'international.",
            isFinished: true,
            sourceUrl: "https://mbolwe.com"
        },
        {
            id: 3,
            title: "Festival Grand Show Calebasse",
            date: "Novembre 2023",
            location: "Lomé, Togo",
            image: "/slam-action.jpg",
            category: "International",
            description: "Participation à la 10ème édition du Challenge International de Slam à Lomé, portant haut les couleurs du Gabon.",
            isFinished: true,
            sourceUrl: "https://www.institutfrancais-togo.com"
        },
        {
            id: 4,
            title: "Slam Standing Ovation (11e éd.)",
            date: "Mai 2024",
            location: "Libreville, Gabon",
            image: "https://www.unesco.org/sites/default/files/styles/paragraph_medium_desktop/article/2024-08/image%201_0.png.webp?itok=C5X9Q7QU",
            category: "Festival",
            description: "Participation active à l'un des plus grands festivals de slam du continent, mêlant compétitions et partages artistiques.",
            isFinished: true,
            sourceUrl: "https://afroslam.org/eloquent-grand-b/"
        }
    ];

    return (
        <main className="bg-background min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Images/Eloquent-Grand-B_6.jpg"
                        alt="Background Evenements"
                        fill
                        className="object-cover opacity-30 grayscale"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent"></div>
                </div>

                <div className="relative z-10 text-center space-y-8 px-6">
                    <div className="flex flex-col items-center gap-4 mb-4" data-aos="fade-down">
                        <span className="text-accent text-[10px] uppercase tracking-[0.8em] font-bold">L'Agenda</span>
                        <div className="h-10 w-px bg-accent/40"></div>
                    </div>
                    <h1
                        data-aos="reveal-text"
                        className="text-white font-serif lg:text-[10vw] text-7xl leading-none tracking-tighter"
                    >
                        Événements <br />
                        <span className="text-accent italic font-light">& Rencontres.</span>
                    </h1>
                    <p className="text-text-muted text-lg font-light tracking-widest uppercase max-w-sm mx-auto" data-aos="fade-up" data-aos-delay="500">
                        Vivez l'Art au Présent
                    </p>
                </div>
            </section>

            {/* Events Grid Section */}
            <section className="py-40 px-3 relative bg-surface-accent">
                <div className="container mx-auto ">
                    <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12" data-aos="fade-up">
                        <div className="space-y-8 px-3">
                            <span className="text-accent text-[10px] uppercase tracking-[1em] font-bold">Prochainement</span>
                            <h2 className="text-white font-serif text-6xl lg:text-7xl leading-tight tracking-tighter">
                                Rendez-vous <br />
                                <span className="text-accent italic font-light">Culturels.</span>
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {events.map((event, idx) => (
                            <div
                                key={event.id}
                                className="group relative flex flex-col glass rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl transition-all duration-700 hover:border-accent/20"
                                data-aos="fade-up"
                                data-aos-delay={idx * 150}
                            >
                                <div className="h-[200px] md:h-[400px] relative overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s]"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                                    <div className="absolute top-6 right-6 md:top-10 md:right-10 flex flex-col items-end gap-2">
                                        <span className="px-4 py-1.5 md:px-6 md:py-2 glass-dark rounded-full text-white text-[7px] md:text-[8px] uppercase tracking-widest font-bold border border-white/10">
                                            {event.category}
                                        </span>
                                        {event.isFinished && (
                                            <span className="px-4 py-1.5 md:px-6 md:py-2 bg-white/10 backdrop-blur-md rounded-full text-accent text-[7px] md:text-[8px] uppercase tracking-widest font-bold border border-accent/20">
                                                Terminé
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="p-8 md:p-12 lg:p-16 space-y-6 md:space-y-8 grow flex flex-col">
                                    <div className="space-y-3 md:space-y-4">
                                        <div className="flex items-center gap-3 md:gap-4 text-accent">
                                            <i className="bx bx-calendar text-lg md:text-xl"></i>
                                            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold">{event.date}</span>
                                        </div>
                                        <h3 className="text-white text-2xl md:text-3xl font-serif leading-tight">
                                            {event.title}
                                        </h3>
                                        <div className="flex items-center gap-3 md:gap-4 text-white/40 italic">
                                            <i className="bx bx-map-pin text-base md:text-lg"></i>
                                            <p className="text-base md:text-lg font-light">{event.location}</p>
                                        </div>
                                    </div>

                                    <div className="h-px w-full bg-white/5"></div>

                                    <p className="text-text-muted text-base md:text-lg font-light leading-relaxed">
                                        {event.description}
                                    </p>

                                    <div className="pt-2 md:pt-4 mt-auto flex items-center">
                                        <a
                                            href={event.isFinished ? event.sourceUrl : "/#contact"}
                                            target={event.isFinished ? "_blank" : "_self"}
                                            rel={event.isFinished ? "noopener noreferrer" : ""}
                                            className={`h-12 md:h-14 px-8 md:px-10 glass text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold rounded-full transition-all duration-500 flex items-center justify-center gap-3 w-full md:w-auto
                                                ${event.isFinished
                                                    ? "text-white/40 hover:bg-white/5 hover:text-white border-white/10"
                                                    : "text-accent hover:bg-accent hover:text-black border-accent/20"}`}
                                        >
                                            {event.isFinished ? "Source de l'évènement" : "Réserver"} <i className={`bx ${event.isFinished ? 'bx-link-external' : 'bx-right-arrow-alt'} text-lg`}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="py-60 bg-background relative overflow-hidden">
                <div className="absolute top-1/2 right-[-10%] text-[25vw] font-serif text-outline opacity-[0.02] pointer-events-none select-none -rotate-12 italic">
                    HISTORY
                </div>

                <div className="container mx-auto px-6 text-center space-y-16" data-aos="fade-up">
                    <span className="text-accent text-[10px] uppercase tracking-[0.5em] font-bold">Transmission & Mémoire</span>
                    <h3 className="text-white font-serif text-5xl lg:text-7xl leading-tight max-w-4xl mx-auto">
                        Inspirer Aujourd'hui <br />
                        <span className="text-accent italic font-light">Pour Demain.</span>
                    </h3>
                    <p className="text-text-muted text-xl font-light leading-relaxed italic max-w-2xl mx-auto">
                        Chaque scène est un héritage, chaque voix est un pont entre les générations. Suivez nos actualités en temps réel sur nos réseaux sociaux.
                    </p>
                    <div className="flex justify-center gap-12 pt-8">
                        <a href="#" className="w-16 h-16 rounded-full glass flex items-center justify-center text-white hover:bg-accent hover:text-black transition-all duration-500 text-2xl">
                            <i className="bx bxl-instagram"></i>
                        </a>
                        <a href="#" className="w-16 h-16 rounded-full glass flex items-center justify-center text-white hover:bg-accent hover:text-black transition-all duration-500 text-2xl">
                            <i className="bx bxl-facebook"></i>
                        </a>
                        <a href="#" className="w-16 h-16 rounded-full glass flex items-center justify-center text-white hover:bg-accent hover:text-black transition-all duration-500 text-2xl">
                            <i className="bx bxl-youtube"></i>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
