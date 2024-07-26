import { Audiowide } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbUsersGroup } from "react-icons/tb";
import WhatIsThis from "./ui/WhatIsThis";




const anton = Audiowide({ subsets: ["latin"], weight: ['400'] });

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
        <div className="pt-32 px-2">
          <span className={` dark:text-white/50 text-sm font-bold block text-center mb-3`}>
            A STEP-BY-STEP PATH
          </span>
          <h1 className={`${anton.className} text-center !leading-[31px] headline text-5xl 1xl:text-3xl font-bold text-white dark:block hidden`}>2024 IS YOUR LAST CHANCE</h1>
          <h1 className={`${anton.className} text-center !leading-[31px] text-5xl 1xl:text-3xl font-bold text-black dark:hidden`}>2024 IS YOUR LAST CHANCE</h1>
          <p className={`dark:text-white/50 font-medium text-center mt-2 mb-3`}>We have already passed the halfway point of 2024, and you! <br className="2xl:hidden" /> You must change your life now.</p>
          <div className="mt-7 flex items-center justify-center px-2">
            <video src="/hero-main-images/hero_main_mm.mp4" className="relative pointer-events-none z-[9999] max-w-[900px] min-h-[340px] object-cover w-full rounded-2xl" autoPlay loop muted playsInline></video>
          </div>
          <div className="flex items-center justify-center mt-12 1xl:mt-6">




            <div className="relative">
              <div
                className="absolute -inset-1 rounded-lg bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-600 0 via-red-600 0 to-amber-600 />0 opacity-50 blur-2xl"
              ></div>
              <div className="relative">
                <Link href="/" className={`${anton.className} button max-w-[400px] w-full 1xl:rounded-xl`}>
                  <div className="button_text 2xl:text-sm dark:bg-[#41391a] bg-[#7d6b2c3c] 1xl:rounded-xl">JOIN THE OUR WORLD <BiMoneyWithdraw size={21} className="mb-0.5 1xl:mb-[1px]" /></div>
                  <div className="circle"></div>
                </Link>
                <div className="flex items-center gap-2 mt-3 1xl:mt-2 justify-center">
                  <TbUsersGroup size={21} />
                  <span className="dark:text-white/60 1xl:text-sm font-medium tracking-tight flex items-center gap-1">
                    <span className="dark:text-white text-black/60 font-bold">10000+ </span>
                    Students in the our world
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WhatIsThis />
      </section>
    </div>
  );
}
