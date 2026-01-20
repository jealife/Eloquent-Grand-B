"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Contact from "../../components/Contact";

export default function AProposContent() {
    const audioRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = 0.2; // Set a subtle volume

        const attemptPlay = () => {
            audio.play()
                .then(() => {
                    setHasInteracted(true);
                })
                .catch((err) => {
                    console.log("Autoplay blocked, waiting for interaction", err);
                });
        };

        attemptPlay();

        const handleFirstInteraction = () => {
            if (!hasInteracted) {
                audio.play();
                setHasInteracted(true);
                window.removeEventListener("click", handleFirstInteraction);
                window.removeEventListener("touchstart", handleFirstInteraction);
            }
        };

        window.addEventListener("click", handleFirstInteraction);
        window.addEventListener("touchstart", handleFirstInteraction);

        return () => {
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("touchstart", handleFirstInteraction);
            audio.pause();
        };
    }, [hasInteracted]);

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
            setIsMuted(audioRef.current.muted);
        }
    };

    return (
        <main className="bg-surface-accent">
            {/* Background Audio */}
            <audio
                ref={audioRef}
                src="/music/New-Day.mp3"
                loop
                preload="auto"
            />

            {/* Mute Toggle Control */}
            <button
                onClick={toggleMute}
                className="fixed bottom-10 right-10 z-110 flex items-center gap-4 group"
            >
                <div className="h-12 w-12 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-accent transition-all duration-500">
                    {isMuted ? (
                        <i className="bx bx-volume-mute text-xl text-white group-hover:text-black"></i>
                    ) : (
                        <i className="bx bx-volume-full text-xl text-white group-hover:text-black"></i>
                    )}
                </div>
                {!hasInteracted && !isMuted && (
                    <span className="text-[8px] uppercase tracking-[0.3em] text-white/40 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5 animate-pulse">
                        Cliquez pour le son
                    </span>
                )}
            </button>

            {/* Editorial Hero */}
            <section className="relative h-[90dvh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Images/Eloquent-Grand-B_2.jpg"
                        alt="A Propos Hero"
                        fill
                        className="object-cover opacity-30 scale-105"
                        sizes="100vw"
                        priority
                    />
                    {/* Artistic Gradients */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#020202] via-transparent to-transparent opacity-80"></div>
                    <div className="absolute inset-0 bg-linear-to-t from-accent/20 via-transparent to-transparent mix-blend-overlay"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" data-aos="zoom-in">
                        <span className="text-[15vw] font-serif text-outline opacity-10 italic">L’Artiste</span>
                    </div>
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8">
                        <div className="h-20 w-px bg-linear-to-b from-accent to-transparent"></div>
                    </div>
                    <h1
                        data-aos="reveal-text"
                        className="text-white font-serif lg:text-[12vw] text-7xl leading-none tracking-tighter"
                    >
                        L'<span className="text-accent italic font-light">Odyssée</span>
                    </h1>
                    <p className="text-text-muted text-lg font-light tracking-widest uppercase max-w-sm mx-auto" data-aos="fade-up" data-aos-delay="500">
                        Eloquent Grand B — L'Âme du Gabon
                    </p>
                </div>

                {/* Side Text Decoration */}
                <div className="absolute left-10 bottom-20 hidden lg:block" data-aos="fade-right">
                    <span className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold vertical-text">EXCELLENCE</span>
                </div>
            </section>

            {/* Narrative Section */}
            <section className="py-40 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[30vw] font-serif text-outline opacity-[0.02] pointer-events-none select-none -translate-y-1/2 translate-x-1/4 italic">
                    ART
                </div>

                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-12 gap-24 items-start">

                        {/* Sticky Sidebar Info */}
                        <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit space-y-16">
                            <div className="space-y-6" data-aos="fade-right">
                                <span className="text-accent text-xs uppercase tracking-[0.5em] font-bold">L'Artiste</span>
                                <h3 className="text-white text-3xl font-serif leading-tight">Domy Eloquent <br />BILIMBE B&apos;IBOUANGH</h3>
                                <div className="h-px w-20 bg-accent/30"></div>
                            </div>

                            <div className="space-y-8 pt-12 border-t border-white/5" data-aos="fade-right" data-aos-delay="200">
                                <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold">Disciplines Clés</h4>
                                <ul className="space-y-6">
                                    {[
                                        { l: "Poésie & Slam", d: "La force du verbe gabonais" },
                                        { l: "Musique & Chant", d: "Mélodies d'éveil culturel" },
                                        { l: "Modèle & Mode", d: "L'élégance gabonaise incarnée" },
                                        { l: "Scénographie", d: "Concepteur de spectacles" }
                                    ].map((item, i) => (
                                        <li key={i} className="group cursor-default">
                                            <p className="text-white font-serif text-xl group-hover:text-accent transition-colors">{item.l}</p>
                                            <p className="text-white/30 text-xs uppercase tracking-widest mt-1">{item.d}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Main Text Content */}
                        <div className="lg:col-span-8 space-y-32">
                            <div className="prose prose-invert max-w-none space-y-12 text-xl font-light leading-relaxed text-text-muted">
                                <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-accent first-letter:mr-4 first-letter:float-left" data-aos="fade-up">
                                    L'aventure commence en <span className="text-white font-medium">2018</span> au sein du label <span className="text-accent italic">Marvely’s Art</span>. Ce qui n&apos;était qu&apos;un simple voyage artistique s&apos;est rapidement transformé en une véritable mission de vie. Eloquent Grand B n&apos;est pas seulement un interprète, c&apos;est un sculpteur de mots, un artisan de l&apos;émotion brute.
                                </p>

                                <div className="grid md:grid-cols-2 gap-12 py-12">
                                    <div className="relative aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl" data-aos="reveal-img">
                                        <Image
                                            src="/Images/Eloquent-Grand-B_3.jpg"
                                            alt="Scène Performance"
                                            fill
                                            className="object-cover transition-transform duration-1000 hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, 400px"
                                        />
                                    </div>
                                    <div className="relative aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl md:mt-24" data-aos="reveal-img" data-aos-delay="200">
                                        <Image
                                            src="/Images/Eloquent-Grand-B_4.jpg"
                                            alt="Studio Session"
                                            fill
                                            className="object-cover transition-transform duration-1000 hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, 400px"
                                        />
                                    </div>
                                </div>

                                <p data-aos="fade-up">
                                    En 2019, la finale du <span className="text-white">Tremplin Jeunes Talents Musicaux</span> marque une accélération fulgurante. Les scènes s&apos;enchaînent, d&apos;Abidjan à Lomé, forgeant une identité sonore et visuelle unique qui puise dans les profondeurs de l&apos;Afrique tout en embrassant la modernité.
                                </p>

                                <div className="py-20 flex flex-col items-center gap-12 border-y border-white/5" data-aos="zoom-in">
                                    <h4 className="text-accent text-[10px] uppercase tracking-[0.8em] font-bold">LA CITATION</h4>
                                    <blockquote className="text-center max-w-2xl mx-auto">
                                        <p className="text-3xl lg:text-5xl font-serif italic text-white leading-tight">
                                            &quot;L&apos;art est le seul langage capable de réveiller les ancêtres en nous pour éclairer le futur.&quot;
                                        </p>
                                    </blockquote>
                                    <div className="h-px w-12 bg-accent/40"></div>
                                </div>

                                <p data-aos="fade-up">
                                    Aujourd&apos;hui, à la tête du groupe <span className="text-accent font-medium">Pindi</span>, Eloquent Grand B parcourt les capitales africaines. Sa vision transcende la simple performance : il s&apos;agit d&apos;éveiller, de nourrir et de porter haut l&apos;excellence culturelle gabonaise.
                                </p>
                            </div>

                            {/* Additional Showcase Grid */}
                            <div className="grid grid-cols-2 gap-8 pt-12" data-aos="fade-up">
                                <div className="relative aspect-3/4 rounded-[2.5rem] overflow-hidden border border-white/5 group">
                                    <Image src="/Images/Eloquent-Grand-B_2.jpg" alt="Bio Shot 1" fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" sizes="(max-width: 768px) 50vw, 300px" />
                                    <div className="absolute inset-x-0 bottom-0 p-8 glass opacity-0 group-hover:opacity-100 transition-opacity">
                                        <p className="text-white text-sm font-serif italic">Portrait d'Âme</p>
                                    </div>
                                </div>
                                <div className="relative aspect-3/4 rounded-[2.5rem] overflow-hidden border border-white/5 group translate-y-12">
                                    <Image src="/Images/Eloquent-Grand-B_12.jpg" alt="Bio Shot 2" fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" sizes="(max-width: 768px) 50vw, 300px" />
                                    <div className="absolute inset-x-0 bottom-0 p-8 glass opacity-0 group-hover:opacity-100 transition-opacity">
                                        <p className="text-white text-sm font-serif italic">Héritage Culturel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ending Narrative */}
            <section className="py-40 bg-surface/30">
                <div className="container mx-auto px-6 max-w-4xl text-center space-y-12" data-aos="fade-up">
                    <span className="text-accent text-[10px] uppercase tracking-[0.5em] font-bold">Le Voyage Continue</span>
                    <p className="text-text-muted text-xl font-light leading-relaxed italic">
                        De l&apos;éducation populaire en Côte d&apos;Ivoire aux prestigieux Jeux de la Francophonie à Kinshasa, Eloquent Grand B continue de tisser son lien indéfectible entre l&apos;Art et l&apos;engagement social.
                    </p>
                    <div className="pt-12">
                        <Link href="/histoire" className="inline-flex items-center gap-6 group">
                            <span className="h-14 w-14 rounded-full border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                                <i className="bx bx-play text-2xl text-accent group-hover:text-black transition-colors"></i>
                            </span>
                            <span className="text-white uppercase tracking-[0.4em] text-xs font-bold group-hover:text-accent transition-colors">Découvrir son Histoire en vidéo</span>
                        </Link>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
