import HistoireContent from "./HistoireContent";

export const metadata = {
    title: "Cinematic Soul | L'Héritage Vidéo d'Eloquent Grand B",
    description: "Plongez dans l'univers visuel et documentaire d'Eloquent Grand B. Une immersion brute dans le voyage d'un artiste gabonais.",
    openGraph: {
        title: "Histoire & Vision | Eloquent Grand B",
        description: "Découvrez le film documentaire qui capture l'essence du sacrifice et de l'émotion artistique.",
        images: ["/Images/Eloquent-Grand-B_6.jpg"],
    }
};

export default function HistoirePage() {
    return <HistoireContent />;
}
