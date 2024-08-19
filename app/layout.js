import "./globals.css";
import './pages-styles.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { CartProvider } from '@/context/CartContext';
import { UserProvider } from "@/context/UserContext";

// Import Montserrat font from Google Fonts
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Origatune Merchandise",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}> {/* Use Montserrat className */}
        <UserProvider>
        <CartProvider>
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
        </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
