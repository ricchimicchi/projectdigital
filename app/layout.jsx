import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./ui/header";
import { ThemeProvider } from "./providers/ThemeProvider";
import Footer from "./ui/footer";
import ScrollToTopButton from "./ui/UptoTop";

const inter = Manrope({ subsets: ["latin"], weight: ['200', '300', '400', '500', '600', '700', '800'] });

export const metadata = {
  title: "Daniel Automation",
  description: "Streamline video editing, scheduling, and analytics with our comprehensive automation strategies. Reduce workload and reach more viewers with advanced techniques.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
    <body className={`${inter.className} dark:bg-[#04080c] bg-white transition-all select-none`}>
        <ThemeProvider>
          <Header />
          <main>
            {children}
          </main>
          <ScrollToTopButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
