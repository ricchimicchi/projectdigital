import Image from "next/image"
import { Audiowide, Syne } from "next/font/google";
import { TbStairsUp } from "react-icons/tb";
import { RiCheckFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";



const syne = Syne({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800'] });
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
            <div className="flex items-start justify-center max-w-[1100px] mx-auto mt-20 2xl:mt-7">
                <div className="mt-12 1xl:mt-4 mr-4 3xl:mr-0">
                    <div>
                        <span className="flex items-center gap-3">
                            <TbStairsUp size={28} className="mb-5" />
                            <h3 className={`${syne.className} headline text-2xl 1xl:text-[20px] h-12 uppercase font-bold`}>Success at every step</h3>
                        </span>
                        <div className="flex flex-col gap-[17px] items-start">
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] border-[#ffffff36] bg-[#ffffff10] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="text-white/60 font-medium text-sm">
                                    World-class custom built learning application
                                </p>
                            </span>
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] border-[#ffffff36] bg-[#ffffff10] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="text-white/60 font-medium text-sm">
                                    World-class custom built learning application
                                </p>
                            </span>
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] border-[#ffffff36] bg-[#ffffff10] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="text-white/60 font-medium text-sm">
                                    World-class custom built learning application
                                </p>
                            </span>
                        </div>
                    </div>
                    <div className="hidden 3xl:block 3xl:mt-12">
                        <span className="flex items-center gap-3">
                            <FaUsers size={28} className="mb-5" />
                            <h3 className={`${syne.className} headline text-2xl h-12 uppercase font-bold mr-7 1xl:text-[20px]`}>PRIVATE NETWORK</h3>
                        </span>
                        <div className="max-w-[520px] w-full flex flex-col gap-[17px] items-start">
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] border-[#ffffff36] bg-[#ffffff10] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="text-white/60 font-medium text-sm">
                                    World-class custom built learning application
                                </p>
                            </span>
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] border-[#ffffff36] bg-[#ffffff10] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="text-white/60 font-medium text-sm">
                                    World-class custom built learning application
                                </p>
                            </span>
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] border-[#ffffff36] bg-[#ffffff10] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="text-white/60 font-medium text-sm">
                                    World-class custom built learning application
                                </p>
                            </span>
                        </div>
                    </div>
                    <div className="mt-96 3xl:mt-12">
                        <span className="flex items-center gap-3">
                            <TbStairsUp size={28} className="mb-5" />
                            <h3 className={`${syne.className} headline text-2xl h-12 uppercase font-bold 1xl:text-[20px]`}>Success at every step</h3>
                        </span>
                        <div className="flex flex-col gap-[17px] items-start">
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] border-[#ffffff36] bg-[#ffffff10] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="text-white/60 font-medium text-sm">
                                    World-class custom built learning application
                                </p>
                            </span>
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] border-[#ffffff36] bg-[#ffffff10] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="text-white/60 font-medium text-sm">
                                    World-class custom built learning application
                                </p>
                            </span>
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] border-[#ffffff36] bg-[#ffffff10] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="text-white/60 font-medium text-sm">
                                    World-class custom built learning application
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="h-[120vh] w-px bgline 3xl:hidden"></div>
                <div className="mt-[21rem] 3xl:hidden ml-4">
                    <div>
                        <span className="flex items-center gap-3">
                            <FaUsers size={28} className="mb-5" />
                            <h3 className={`${syne.className} headline text-2xl h-12 uppercase font-bold mr-7`}>PRIVATE NETWORK</h3>
                        </span>
                        <div className="max-w-[520px] w-full flex flex-col gap-[17px] items-start">
                            <span className="flex items-center !min-w-[400px] gap-3 border-[1px] border-[#ffffff36] bg-[#ffffff10] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="text-white/60 font-medium text-sm">
                                    World-class custom built learning application
                                </p>
                            </span>
                            <span className="flex items-center !min-w-[400px] gap-3 border-[1px] border-[#ffffff36] bg-[#ffffff10] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="text-white/60 font-medium text-sm">
                                    World-class custom built learning application
                                </p>
                            </span>
                            <span className="flex items-center !min-w-[400px] gap-3 border-[1px] border-[#ffffff36] bg-[#ffffff10] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="text-white/60 font-medium text-sm">
                                    World-class custom built learning application
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepByStep