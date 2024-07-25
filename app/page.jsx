import { Inter_Tight, Zen_Dots } from "next/font/google";
import Image from "next/image";
import Link from "next/link";


const inter = Inter_Tight({ subsets: ["latin"] });
const anton = Zen_Dots({ subsets: ["latin"], weight: ['400'] });

export default function Home() {
  return (
    <div className="back_main">
      <div className="mask-l dark:mask-t pointer-events-none h-[84px] 1xl:h-[40px] -mt-5 relative z-50 w-full select-none backdrop-blur-[1px] transition-all"></div>
      <section className="relative -mt-20 2xl:-mt-10">
        <Image
          src='/back-hero.svg'
          className="absolute pointer-events-none inset-0 object-cover h-[1000px] 2xl:-mt-8 hidden dark:block opacity-40 2xl:opacity-80"
          width={3000}
          height={1000}
          alt="back"
          priority={true}
        />
        <Image
          src='/back-hero-light.svg'
          className="absolute pointer-events-none inset-0 object-cover h-[1000px] 2xl:-mt-8 block dark:hidden"
          width={3000}
          height={1000}
          alt="back"
          priority={true}
        />
        <div className="pt-20 2xl:pt-10 px-2">
          <span className={`${inter.className} dark:text-white/50 text-sm font-medium block text-center mb-3`}>
            A STEP-BY-STEP PATH
          </span>
          <h1 className={`${anton.className} text-center !leading-[40px] headline text-5xl 1xl:text-4xl font-bold text-white dark:block hidden`}>2024 IS YOUR LAST CHANCE</h1>
          <h1 className={`${anton.className} text-center !leading-[40px] text-5xl 1xl:text-4xl font-bold text-black dark:hidden`}>2024 IS YOUR LAST CHANCE</h1>
          <p className={`${inter.className} dark:text-white/50 font-medium text-center mt-2 mb-3`}>We have already passed the halfway point of 2024, and you! <br className="2xl:hidden" /> You must change your life now.</p>
          <div className="mt-7 flex items-center justify-center">
            <video src="/hero-main-images/hero_main_mm.mp4" className="relative pointer-events-none z-[9999] max-w-[900px] min-h-[340px] object-cover w-full rounded-2xl" autoPlay loop muted playsInline></video>
          </div>
          <div className="flex items-center justify-center mt-12">



          <Link href="/" className={`${anton.className} button`}>
              <div className="button_text 2xl:text-sm">JOIN THE REAL WORLD</div>
              <div className="circle"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
