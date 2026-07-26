import "./globals.css";
import Navigation from './components/Navigation/Navigation.js'
import Footer from './components/Footer/Footer.js'

export const metadata = {
  title: "portfolio de Juste Amour",
  description: "Responsable projet informatique, développeur web et mobile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
