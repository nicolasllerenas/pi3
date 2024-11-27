import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto py-8 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
