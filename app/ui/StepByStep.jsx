import Image from "next/image"
import { Audiowide } from "next/font/google";

const anton = Audiowide({ subsets: ["latin"], weight: ['400'] });

const StepByStep = () => {
    return (
        <div className="relative mt-20 1xl:mt-0">
            <div className="mask-l dark:mask-t pointer-events-none h-[120px] relative z-50 w-full select-none backdrop-blur-[1px] transition-all"></div>
            <Image
                src='/back-hero.svg'
                className="absolute pointer-events-none inset-0 1xl:pt-12 object-cover 2xl:h-[1000px] 2xl:-mt-8 hidden dark:block opacity-40 2xl:opacity-80"
                width={10000}
                height={2000}
                alt="back"
                priority={true}
            />
            <Image
                src='/back-hero-light.svg'
                className="absolute pointer-events-none inset-0 1xl:pt-12 object-cover 2xl:h-[1000px] 2xl:-mt-8 block dark:hidden"
                width={10000}
                height={2000}
                alt="back"
                priority={true}
            />



            <div className="-mt-8">
                <div className="flex items-center justify-center flex-col gap-5">
                    <span className={` dark:text-white/50 text-sm font-bold block text-center`}>
                        A STEP-BY-STEP PATH
                    </span>

                    <h1 className={`${anton.className} text-center !leading-[31px] headline text-5xl 1xl:text-3xl font-bold text-white dark:block hidden`}>IT DOESN’T TAKE 10 YEARS
                    </h1>
                    <h1 className={`${anton.className} text-center !leading-[31px] text-5xl 1xl:text-3xl font-bold text-black dark:hidden`}>IT DOESN’T TAKE 10 YEARS
                    </h1>
                </div>
            </div>
            <div className="flex items-start justify-between max-w-[1100px] mx-auto mt-20">
                <div>lelele</div>
                <div className="h-[100vh] w-px bgline"></div>
                <div>lelele</div>
            </div>
        </div>
    )
}

export default StepByStep