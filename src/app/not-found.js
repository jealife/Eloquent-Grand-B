import Link from "next/link";

export const metadata = {
    title: "404 - Page Introuvable | Eloquent Grand B",
    description: "Désolé, la page que vous recherchez n'existe pas ou a été déplacée.",
};

export default function NotFound() {
    return (
        <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-background overflow-hidden px-6">
            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] premium-gradient rounded-full pointer-events-none opacity-60"></div>
            <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 text-center max-w-3xl w-full" data-aos="zoom-in">
                <h1 className="text-[clamp(8rem,25vw,18rem)] font-bold text-outline leading-none mb-0 opacity-20 select-none pointer-events-none">
                    404
                </h1>

                <div className="glass p-10 md:p-16 rounded-[40px] border-white/5 -mt-10 md:-mt-24 relative overflow-hidden backdrop-blur-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-accent to-transparent opacity-50"></div>

                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                            Le verbe <br className="hidden md:block" /> s'est égaré
                        </h2>

                        <p className="text-lg md:text-xl text-text-muted font-sans max-w-md mx-auto leading-relaxed">
                            Même dans le silence, l'art continue son voyage. Mais cette page semble avoir pris un autre chemin dans l'immensité du Pindi.
                        </p>

                        <div className="pt-4">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-full font-sans font-semibold transition-all duration-500 hover:scale-105 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(232,66,58,0.3)] group"
                            >
                                <i className='bx bx-home-alt text-2xl'></i>
                                Retourner à l'essentiel
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle bottom text or artist name */}
            <div className="absolute bottom-12 text-white/10 font-serif text-xs tracking-[0.5em] uppercase select-none">
                Eloquent Grand B • Poésie & Musique
            </div>
        </main>
    );
}
