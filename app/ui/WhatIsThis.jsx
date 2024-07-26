import { Audiowide } from "next/font/google";

const anton = Audiowide({ subsets: ["latin"], weight: ['400'] });

const WhatIsThis = () => {
    return (
        <div className='mt-44 2xl:mt-12 px-3 py-12'>
            <div className='flex items-center justify-center flex-col'>
                <span className='block px-4 py-1 dark:text-white/70 rounded-full text-[14px] font-bold 1xl:text-sm'>
                    WHAT IS THIS ?
                </span>
                <h1 className={`${anton.className} max-w-[750px] uppercase text-center mt-3 1xl:mt-1.5 !leading-[50px] 1xl:!leading-[34px] headline text-5xl 1xl:text-3xl font-bold text-white dark:block hidden`}>Make a fresh start with Our Automation System</h1>
                <h1 className={`${anton.className} max-w-[750px] uppercase text-center mt-3 1xl:mt-1.5 !leading-[50px] 1xl:!leading-[34px] text-5xl 1xl:text-3xl font-bold text-black dark:hidden`}>Make a fresh start with Our Automation System</h1>
            </div>
        </div>
    )
}

export default WhatIsThis