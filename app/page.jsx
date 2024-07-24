import { Inter_Tight } from "next/font/google";
import Image from "next/image";

const inter = Inter_Tight({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="back_main">
      <section className="mt-12 relative">
        <Image 
          src='/back-hero.svg' 
          className="absolute inset-0 object-cover h-[1000px] hidden dark:block"
          width={3000}
          height={1000} 
          alt="back"
        />
        <Image 
          src='/back-hero-light.svg' 
          className="absolute inset-0 object-cover h-[1000px] block dark:hidden"
          width={3000}
          height={1000} 
          alt="back"
        />
        <span className={`${inter.className} dark:text-white/50 text-sm font-medium block text-center`}>
          A STEP-BY-STEP PATH
        </span>
      </section>
    </div>
  );
}
