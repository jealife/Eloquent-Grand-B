import AProposContent from "./AProposContent";

export const metadata = {
    title: "À Propos | L'Odyssée d'Eloquent Grand B",
    description: "Découvrez le parcours de Domy Eloquent BILIMBE B'IBOUANGH, alias Eloquent Grand B. Un artiste multidisciplinaire engagé pour l'excellence culturelle du Gabon.",
    openGraph: {
        title: "À Propos | Eloquent Grand B",
        description: "De 2018 à aujourd'hui, suivez l'évolution d'un sculpteur de mots et d'émotions. L'histoire d'une renaissance artistique gabonaise.",
        images: ["/Images/Eloquent-Grand-B_2.jpg"],
    }
};

export default function APropos() {
    return <AProposContent />;
}
