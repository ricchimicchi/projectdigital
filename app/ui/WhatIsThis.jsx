import { Audiowide } from "next/font/google";
import Image from "next/image";

const anton = Audiowide({ subsets: ["latin"], weight: ['400'] });

const WhatIsThis = () => {
    return (
        <div className='mt-44 2xl:mt-16 px-1.5 py-12 -mb-8'>
            <div className='flex items-center justify-center flex-col'>
                <span className='block px-4 dark:text-white/70 rounded-full text-[14px] font-bold 1xl:text-sm'>
                    WHAT IS THIS ?
                </span>
                <h1 className={`${anton.className} max-w-[750px] uppercase text-center mt-3 1xl:mt-1.5 !leading-[50px] 1xl:!leading-[30px] headline text-5xl 1xl:text-[26px] font-bold text-white dark:block hidden`}>Make a fresh start with Our Automation System</h1>
                <h1 className={`${anton.className} max-w-[750px] uppercase text-center mt-3 1xl:mt-1.5 !leading-[50px] 1xl:!leading-[30px] text-5xl 1xl:text-[26px] font-bold text-black dark:hidden`}>Make a fresh start with Our Automation System</h1>
                <p className="max-w-[700px] dark:text-white/50 font-medium text-center mt-3 1xl:text-sm leading-[18px]">Our project is specially designed to free you from the complex world of the<span className="dark:text-white text-black/60 tracking-tighter font-extrabold underline mx-1">Matrix</span>in a short time and help you achieve a more liberated, more comfortable life.</p>

                <div className="flex items-center justify-center mt-8 1xl:mt-5">
                    <Image
                        src='/hero-two-main/hero-tw.svg'
                        className="pointer-events-none block rounded-2xl 3xl:hidden border-[2px] 1xl:border-[1px] border-white/40"
                        width={1100}
                        height={800}
                        alt="back"
                        priority={true}
                    />

                    <Image
                        src='/hero-two-main/hero-two-mobile.svg'
                        className="pointer-events-none rounded-2xl 3xl:block hidden border-[2px] 1xl:border-[1px] border-white/40"
                        width={1100}
                        height={800}
                        alt="back"
                        priority={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default WhatIsThis