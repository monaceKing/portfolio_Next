import { Inter, Poppins } from 'next/font/google'
import "./globals.css";
import Navigation from "./components/Navigation/Navigation.js";
import Footer from "./components/Footer/Footer.js";

// Configurer Inter pour le texte courant
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Configurer Poppins pour les titres
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});


export const metadata = {
    "title": "portfolio de Juste",
    "description": "Responsable projet informatique, développeur web et mobile"
};

export const viewport = {
    "themeColor": "#000000"
};

export default function RootLayout({ children }) {
  return (
    // ✅ Ajout de suppressHydrationWarning sur html et body
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
