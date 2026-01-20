import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOSInit from "../components/AOSInit";

export const metadata = {
  metadataBase: new URL("https://eloquent-grand-b.com"),
  title: {
    default: "Eloquent Grand B | Artiste, Poète & Musicien Gabonais",
    template: "%s | Eloquent Grand B"
  },
  description: "Découvrez l'univers d'Eloquent Grand B, artiste gabonais d'excellence. Performance scénique, poésie urbaine, location de matériel sonore et espace de création à Libreville.",
  keywords: ["Eloquent Grand B", "Artiste Gabonais", "Slam Gabon", "Poésie Urbaine", "Location matériel sonorisation Libreville", "Studio répétition Gabon", "Pindi", "Musique Gabonaise"],
  authors: [{ name: "Eloquent Grand B" }],
  creator: "Eloquent Grand B",
  publisher: "Eloquent Grand B",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Eloquent Grand B | L'Âme du Verbe et de la Mélodie",
    description: "Plongez dans l'héritage sonore et culturel du Gabon avec Eloquent Grand B. Performances, services artistiques et locations professionnelles.",
    url: "/",
    siteName: "Eloquent Grand B",
    images: [
      {
        url: "/Images/Eloquent-Grand-B_1.jpg",
        width: 1200,
        height: 630,
        alt: "Eloquent Grand B - Performance Scénique",
      },
    ],
    locale: "fr_GA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eloquent Grand B",
    description: "Artiste, Poète & Musicien Gabonais",
    images: ["/Images/Eloquent-Grand-B_1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground antialiased overflow-x-hidden">
        <div className="grain"></div>
        <AOSInit />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
