import "./globals.css";
import Navigation from "./components/Navigation/Navigation.js";
import Footer from "./components/Footer/Footer.js";

export const metadata = {
  title: "portfolio de Juste Amour",
  description: "Responsable projet informatique, développeur web et mobile",
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    // ✅ Ajout de suppressHydrationWarning sur html et body
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
