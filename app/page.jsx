import { Inter_Tight } from "next/font/google";
import Image from "next/image";

const inter = Inter_Tight({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="back_main">
      <div class="mask-t pointer-events-none h-[84px] relative z-50 w-full select-none backdrop-blur-[1px]"></div>
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
        <div className="pt-20">
          <span className={`${inter.className} dark:text-white/50 text-sm font-medium block text-center`}>
            A STEP-BY-STEP PATH
          </span>
        </div>
      </section>
    </div>
  );
}
