import EvenementsContent from "./EvenementsContent";

export const metadata = {
    title: "Événements & Rencontres | Eloquent Grand B",
    description: "Retrouvez l'agenda officiel d'Eloquent Grand B. Concerts, festivals de slam et performances poétiques au Gabon et à l'international.",
    openGraph: {
        title: "Événements & Rencontres | Eloquent Grand B",
        description: "Vivez l'Art au Présent avec Eloquent Grand B. Découvrez les prochaines dates de concerts et rétrospectives d'événements.",
        images: ["/Images/Eloquent-Grand-B_6.jpg"],
    }
};

export default function EvenementsPage() {
    return <EvenementsContent />;
}
