"use client";
import React, { useEffect } from "react";
import Script from "next/script";

export default function Contact() {
    useEffect(() => {
        window.onSubmit = (token) => {
            const form = document.getElementById("contact-form");
            if (form) form.submit();
        };
    }, []);

    return (
        <section id="contact" className="py-60 bg-[#020202] relative overflow-hidden">
            <Script
                src="https://www.google.com/recaptcha/enterprise.js?render=6Ldtk7UqAAAAACTRY3FfqZQqnBoQZNSN-fKNAgBZ"
                strategy="lazyOnload"
            />

            <div className="container mx-auto px-8 lg:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-32">

                    {/* Perspective Side */}
                    <div className="space-y-16" data-aos="fade-right">
                        <div className="space-y-8">
                            <span className="text-accent text-[10px] uppercase tracking-[1em] font-bold">Entrer en Scène</span>
                            <h2 className="text-white font-serif text-7xl lg:text-9xl leading-[0.85] tracking-tighter">
                                Commencer <br />
                                <span className="text-accent italic font-light">l'Histoire.</span>
                            </h2>
                        </div>

                        <p className="text-text-muted text-2xl font-light leading-relaxed max-w-md italic">
                            "Pour toute collaboration artistique, booking ou demande média."
                        </p>

                        <div className="space-y-12 pt-12 border-t border-white/5">
                            <div className="group cursor-pointer">
                                <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] mb-4">Emplacement</p>
                                <p className="text-white text-2xl font-serif group-hover:text-accent transition-colors">Bas de Gué Gué, Libreville, Gabon</p>
                            </div>
                            <div className="group cursor-pointer">
                                <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] mb-4">Contact Direct / WhatsApp</p>
                                <a href="https://wa.me/24107961937" className="text-white text-3xl font-serif group-hover:text-accent transition-colors">+241 07 96 19 37</a>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="glass p-12 lg:p-20 rounded-[4rem] border-white/5 shadow-2xl relative" data-aos="fade-left">
                        {/* Decorative Background Text */}
                        <div className="absolute top-10 right-10 text-8xl font-serif text-outline opacity-[0.03] pointer-events-none select-none italic">
                            Écrire
                        </div>

                        <form
                            id="contact-form"
                            action="https://submit-form.com/j4DJdUYY0"
                            method="POST"
                            className="space-y-12 relative z-10"
                        >
                            <input type="hidden" name="_redirect" value="https://eloquent-grand-b.vercel.app/" />

                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <label className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-bold ml-4">Votre Nom</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Ex: Jean Dupont"
                                        className="w-full bg-white/[0.03] border-b border-white/10 px-8 py-5 text-white focus:border-accent outline-none transition-all rounded-2xl font-light"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-bold ml-4">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="votre@email.com"
                                        className="w-full bg-white/[0.03] border-b border-white/10 px-8 py-5 text-white focus:border-accent outline-none transition-all rounded-2xl font-light"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-bold ml-4">Votre Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder="Décrivez votre projet..."
                                    className="w-full bg-white/[0.03] border-b border-white/10 px-8 py-5 text-white focus:border-accent outline-none transition-all resize-none rounded-2xl font-light"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="g-recaptcha w-full group relative py-6 overflow-hidden rounded-full border border-accent/30 transition-all duration-700"
                                data-sitekey="6Ldtk7UqAAAAACTRY3FfqZQqnBoQZNSN-fKNAgBZ"
                                data-callback="onSubmit"
                                data-action="submit"
                            >
                                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]"></div>
                                <span className="relative z-10 text-accent group-hover:text-black uppercase tracking-[0.8em] text-[10px] font-bold transition-colors">
                                    Envoyer le Message
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
