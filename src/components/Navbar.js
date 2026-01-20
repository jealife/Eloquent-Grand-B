"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "À Propos", href: "/a-propos" },
        { name: "Événements", href: "/evenements" },
        { name: "Œuvres", href: "/#projets" },
        { name: "Services", href: "/#services" },
        { name: "Galerie", href: "/#gallery" }
    ];

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        document.body.style.overflow = !mobileMenuOpen ? "hidden" : "auto";
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-100 transition-all duration-700 ease-in-out px-8 lg:px-20 ${scrolled ? "py-4 bg-background/80 backdrop-blur-lg border-b border-white/5" : "py-10 bg-transparent"}`}
        >
            <div className="max-w-[1920px] mx-auto flex items-center justify-between relative">
                {/* Brand */}
                <Link
                    href="/"
                    className="group flex flex-col items-center lg:items-start relative z-101"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <div className="relative h-14 w-32 lg:h-18 lg:w-40 transition-transform duration-500 group-hover:scale-105">
                        <Image
                            src="/Logo-EGB.png"
                            alt="Eloquent Grand B Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-16 ml-auto mr-20">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/40 hover:text-white transition-all duration-500 overflow-hidden relative group"
                        >
                            <span className="block group-hover:-translate-y-full transition-transform duration-500">{link.name}</span>
                            <span className="absolute left-0 top-full block text-accent group-hover:-translate-y-full transition-transform duration-500">{link.name}</span>
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:block h-px w-20 bg-white/10 ml-auto mr-12"></div>

                <Link
                    href="/#contact"
                    className="hidden lg:flex px-10 py-4 glass rounded-full text-[9px] uppercase tracking-[0.4em] font-bold text-white hover:bg-accent hover:text-white hover:border-accent transition-all duration-500 transform active:scale-95"
                >
                    Contact
                </Link>

                {/* Mobile Toggle */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden relative z-101 h-12 w-12 flex flex-col items-center justify-center gap-1.5 group glass rounded-full"
                    aria-label="Toggle Menu"
                >
                    <div className={`h-px w-6 bg-white transition-all duration-500 ${mobileMenuOpen ? "rotate-45 translate-y-1" : ""}`}></div>
                    <div className={`h-px w-6 bg-white transition-all duration-500 ${mobileMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}></div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[#020202] z-100 transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] flex flex-col items-center justify-center lg:hidden
                    ${mobileMenuOpen ? "clip-path-circle-open" : "clip-path-circle-closed pointer-events-none"}`}
            >
                {/* Aesthetic Background Decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-accent/5 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-accent/5 blur-[120px] rounded-full"></div>
                </div>

                <div className="flex flex-col items-center gap-10 z-10 px-10">
                    {[{ name: "Accueil", href: "/" }, ...navLinks].map((link, idx) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={toggleMenu}
                            className={`text-4xl md:text-6xl font-serif text-white hover:text-accent transition-all duration-500 transform
                                ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    {/* <Link
                        href="/#contact"
                        onClick={toggleMenu}
                        className={`mt-12 px-16 py-6 glass text-accent uppercase tracking-[0.4em] text-xs font-bold rounded-full hover:bg-accent hover:text-black transition-all duration-700
                            ${mobileMenuOpen ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
                        style={{ transitionDelay: `600ms` }}
                    >
                        Contact
                    </Link> */}
                </div>

                <div className={`absolute bottom-20 flex flex-col items-center gap-8 transition-all duration-1000 delay-700 ${mobileMenuOpen ? "opacity-40" : "opacity-0"}`}>
                    <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-white mb-4">Suivez l'artiste</span>
                    <div className="flex gap-12">
                        {['Instagram', 'Youtube', 'Facebook'].map((s) => (
                            <span key={s} className="text-[8px] uppercase tracking-[0.5em] font-bold text-white hover:text-accent cursor-pointer transition-colors">{s}</span>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
