import { Inter_Tight, Anton } from "next/font/google";
import Image from "next/image";

const inter = Inter_Tight({ subsets: ["latin"] });
const anton = Anton({ subsets: ["latin"], weight: ['400'] });

export default function Home() {
  return (
    <div className="back_main">
      <div class="mask-l dark:mask-t pointer-events-none h-[84px] 1xl:h-[60px] relative z-50 w-full select-none backdrop-blur-[1px]"></div>
      <section className="relative -mt-20 2xl:-mt-10">
        <Image
          src='/back-hero.svg'
          className="absolute pointer-events-none inset-0 object-cover h-[1000px] 2xl:-mt-8 hidden dark:block opacity-40 2xl:opacity-80"
          width={3000}
          height={1000}
          alt="back"
        />
        <Image
          src='/back-hero-light.svg'
          className="absolute pointer-events-none inset-0 object-cover h-[1000px] 2xl:-mt-8 block dark:hidden"
          width={3000}
          height={1000}
          alt="back"
        />
        <div className="pt-8 px-2">
          <span className={`${inter.className} dark:text-white/50 text-sm font-medium block text-center mb-3`}>
            A STEP-BY-STEP PATH
          </span>
          <h1 className={`${anton.className} text-center !leading-[53px] headline text-6xl 1xl:text-5xl font-bold text-white dark:block hidden`}>2024 IS YOUR LAST CHANCE</h1>
          <h1 className={`${anton.className} text-center !leading-[53px] text-6xl 1xl:text-5xl font-bold text-black dark:hidden`}>2024 IS YOUR LAST CHANCE</h1>
        </div>
      </section>
    </div>
  );
}
