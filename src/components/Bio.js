import Image from "next/image";
import Link from "next/link";

export default function Bio() {
    return (
        <section id="bio" className="py-60 bg-surface-accent relative overflow-hidden">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 premium-gradient opacity-30"></div>

            {/* Artistic Decoration */}
            <div className="absolute top-[10%] left-[-5%] text-[15vw] font-serif text-outline opacity-[0.03] select-none pointer-events-none -rotate-12">
                GENÈSE
            </div>

            <div className="container mx-auto px-8 lg:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-32 items-center">

                    {/* Visual Narrative Side */}
                    <div className="relative group" data-aos="fade-right">
                        <div className="relative aspect-3/4 w-full overflow-hidden rounded-[4rem] grayscale hover:grayscale-0 transition-all duration-1000 shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/5">
                            <Image
                                src="/Images/Eloquent-Grand-B_2.jpg"
                                alt="Domy Eloquent Artistic Portrait"
                                fill
                                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-[2s]"
                            />
                        </div>

                        {/* Floating Metadata */}
                        <div className="absolute -bottom-10 -right-10 glass p-10 rounded-[3rem] z-20 max-w-[300px] border-white/10 shadow-2xl" data-aos="zoom-in" data-aos-delay="500">
                            <div className="space-y-4">
                                <span className="text-accent text-[10px] uppercase tracking-[0.5em] font-bold block">Artiste Pluriel</span>
                                <h4 className="text-white text-2xl font-serif italic">"Chaque vers est une graine vers l'éveil."</h4>
                                <div className="h-px w-12 bg-accent/40 mt-4"></div>
                            </div>
                        </div>

                        {/* Decorative Geometry */}
                        <div className="absolute top-20 -left-12 h-40 w-40 border border-white/10 rounded-full z-0 animate-pulse pointer-events-none opacity-20"></div>
                        <div className="absolute top-1/2 -right-4 h-1 w-20 bg-accent/20 z-0"></div>
                    </div>

                    {/* Textual Journey Side */}
                    <div className="space-y-16">
                        <div className="space-y-8" data-aos="fade-up">
                            <div className="flex items-center gap-6">
                                <div className="h-px w-12 bg-accent"></div>
                                <span className="text-accent text-[10px] uppercase tracking-[0.8em] font-bold">La Genèse</span>
                            </div>
                            <h2 className="text-white font-serif text-6xl lg:text-8xl leading-[0.9] tracking-tighter">
                                Dompter les mots, <br />
                                <span className="text-accent italic font-light">Libérer les âmes.</span>
                            </h2>
                        </div>

                        <div className="space-y-10 text-text-muted font-light text-xl leading-relaxed max-w-xl" data-aos="fade-up" data-aos-delay="300">
                            <p className="reveal-text">
                                Artiste multidisciplinaire et autodidacte, <span className="text-white font-medium">Eloquent Grand B</span> est une figure montante de l'art Gabonais.
                                Son voyage est une quête permanente d'excellence, mêlant le slam, le chant et la poésie dans un creuset d'émotions brutes.
                            </p>
                            <p>
                                De l'Institut Français du Gabon aux scènes internationales, sa voix transcende les frontières pour inviter à une renaissance culturelle profonde.
                            </p>
                        </div>

                        {/* Awards / Dates Strip */}
                        <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5" data-aos="fade-up" data-aos-delay="500">
                            <div className="space-y-2">
                                <span className="text-white text-3xl font-serif italic">2018</span>
                                <p className="text-[10px] uppercase tracking-widest text-white/30">Début de l'Odyssée</p>
                            </div>
                            <div className="space-y-2">
                                <span className="text-white text-3xl font-serif italic">2024</span>
                                <p className="text-[10px] uppercase tracking-widest text-white/30">Consécration Gab'Kulture</p>
                            </div>
                        </div>

                        <div className="pt-8" data-aos="fade-up" data-aos-delay="700">
                            <Link
                                href="/a-propos"
                                className="group inline-flex items-center gap-10"
                            >
                                <div className="h-16 w-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-700">
                                    <i className="bx bx-right-arrow-alt text-3xl text-accent group-hover:text-black transition-colors"></i>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white text-[10px] uppercase tracking-[0.5em] font-bold group-hover:text-accent transition-colors">Découvrir le profil complet</span>
                                    <span className="text-white/20 text-[8px] uppercase tracking-[0.3em] font-medium transition-all group-hover:translate-x-2">Lire la Biographie</span>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
