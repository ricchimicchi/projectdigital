import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header";
import { ThemeProvider } from "./providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daniel Automation",
  description: "Streamline video editing, scheduling, and analytics with our comprehensive automation strategies. Reduce workload and reach more viewers with advanced techniques.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
    <body className={`${inter.className} dark:bg-[#060d14] bg-white transition-all select-none`}>
        <ThemeProvider>
          <Header />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
