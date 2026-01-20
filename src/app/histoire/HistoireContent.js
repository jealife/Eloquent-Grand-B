"use client";
import React from "react";
import Image from "next/image";
import Contact from "../../components/Contact";

export default function HistoireContent() {
    return (
        <main className="bg-background">
            {/* Cinematic Section */}
            <section className="pt-40 pb-20 px-6 min-h-[90dvh] flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-1/2 left-[-10%] text-[25vw] font-serif text-outline opacity-[0.02] pointer-events-none select-none -rotate-90 italic">
                    VISION
                </div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col items-center text-center mb-24 space-y-8">
                        <div className="flex flex-col items-center gap-4 mb-4" data-aos="fade-down">
                            <span className="text-accent text-[10px] uppercase tracking-[0.8em] font-bold">Documentary</span>
                            <div className="h-10 w-px bg-accent/40"></div>
                        </div>
                        <h1 className="text-6xl lg:text-[10vw] font-serif text-white leading-none tracking-tighter" data-aos="reveal-text">
                            Cinematic <span className="text-accent italic font-light">Soul.</span>
                        </h1>
                    </div>

                    <div className="relative group rounded-[3rem] overflow-hidden border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.8)]" data-aos="zoom-in">
                        <div className="absolute inset-0 z-10 bg-linear-to-t from-black/60 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        <video
                            className="w-full h-auto aspect-video object-cover scale-[1.01]"
                            controls
                            autoPlay
                            muted
                            loop
                        >
                            <source src="/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Play Control Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none z-20">
                            <div className="h-24 w-24 rounded-full glass border border-white/20 flex items-center justify-center">
                                <i className="bx bx-play text-4xl text-accent translate-x-1"></i>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 text-center" data-aos="fade-up">
                        <p className="text-text-muted font-light text-xl max-w-3xl mx-auto leading-relaxed italic border-t border-white/5 pt-16">
                            "Chaque seconde de ce film raconte un sacrifice, chaque image capture une émotion que les mots seuls ne sauraient traduire. C'est mon voyage, brut et sans filtre."
                        </p>
                        <div className="mt-12 flex justify-center gap-12">
                            <span className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold">Libreville</span>
                            <span className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold">2024</span>
                            <span className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold">Gabon</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Immersive Break */}
            <section className="relative h-[60dvh] w-full flex items-center justify-center overflow-hidden border-y border-white/5">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Images/Eloquent-Grand-B_6.jpg"
                        alt="Histoire Background"
                        fill
                        className="object-cover opacity-20 grayscale"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-black/40 to-background"></div>
                </div>
                <div className="relative z-10 text-center px-6" data-aos="zoom-out">
                    <h2 className="text-white font-serif lg:text-[15vw] text-6xl tracking-tighter opacity-10 italic uppercase select-none">
                        Legacy
                    </h2>
                </div>
            </section>

            <Contact />
        </main>
    );
}
