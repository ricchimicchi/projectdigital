import Image from "next/image"
import { Audiowide, Syne } from "next/font/google";
import { TbStairsUp } from "react-icons/tb";
import { RiCheckFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";




const syne = Syne({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800'] });
const anton = Audiowide({ subsets: ["latin"], weight: ['400'] });

const StepByStep = () => {
    return (
        <div className="relative mt-20 1xl:mt-0 overflow-hidden pb-20">
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
            <Image
                src='/hero-step/ellipse_1.svg'
                className="absolute pointer-events-none top-[12rem] 1xl:-left-16 1xl:top-0 opacity-10 1xl:pt-12 2xl:-mt-8 "
                width={500}
                height={500}
                alt="back"
                priority={true}
            />
            <Image
                src='/hero-step/ellipse_2.svg'
                className="absolute pointer-events-none right-0 bottom-40 1xl:pt-12 2xl:-mt-8 opacity-10 "
                width={500}
                height={500}
                alt="back"
                priority={true}
            />

            <Image
                src='/hero-step/ellipse_1.svg'
                className="absolute pointer-events-none left-[7rem] -bottom-40 1xl:pt-12 2xl:-mt-8 opacity-10 -rotate-45"
                width={500}
                height={500}
                alt="back"
                priority={true}
            />



            <div>
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
            <div className="flex items-start justify-center max-w-[1100px] mx-auto mt-20 2xl:mt-7 px-2">
                <div className="mt-12 1xl:mt-4 mr-4 3xl:mr-0">
                    <div>
                        <span className="flex items-center gap-3 ml-1">
                            <TbStairsUp size={28} className="mb-5" />
                            <h3 className={`${syne.className} headline text-2xl 1xl:text-[20px] h-12 uppercase font-bold dark:block hidden`}>Success at every step</h3>
                            <h3 className={`${syne.className} text-2xl 1xl:text-[20px] h-12 uppercase font-bold dark:text-white dark:hidden block`}>Success at every step</h3>
                        </span>
                        <div className="flex flex-col gap-[17px] items-start">
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] dark:border-[#ffffff36] border-[#b2acac41] dark:bg-[#ffffff10] bg-[#a19f9f25] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="dark:text-white/60 font-medium text-sm">
                                    World-class custom built learning application
                                </p>
                            </span>
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] dark:border-[#ffffff36] border-[#b2acac41] dark:bg-[#ffffff10] bg-[#a19f9f25]  px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="dark:text-white/60 font-medium text-sm">
                                    Scale from <span className="dark:text-white text-black/80 font-bold">Zero to $10k/month</span> as fast as possible
                                </p>
                            </span>
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] dark:border-[#ffffff36] border-[#b2acac41] dark:bg-[#ffffff10] bg-[#a19f9f25]  px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="dark:text-white/60 font-medium text-sm">
                                    Master skills you need to <span className="dark:text-white text-black/80 font-bold">maximize your income</span>
                                </p>
                            </span>
                        </div>
                    </div>
                    <div className="hidden 3xl:block 3xl:mt-12">
                        <span className="flex items-center gap-3 ml-2">
                            <FaUsers size={28} className="mb-5" />
                            <h3 className={`${syne.className} headline text-2xl h-12 uppercase font-bold mr-7 1xl:text-[20px] dark:block hidden`}>PRIVATE NETWORK</h3>
                            <h3 className={`${syne.className} text-2xl h-12 uppercase font-bold mr-7 1xl:text-[20px] dark:text-white dark:hidden block `}>PRIVATE NETWORK</h3>
                        </span>
                        <div className="max-w-[520px] w-full flex flex-col gap-[17px] items-start">
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] dark:border-[#ffffff36] border-[#b2acac41] dark:bg-[#ffffff10] bg-[#a19f9f25] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="dark:text-white/60 font-medium text-sm">
                                    <span className="dark:text-white text-black/80 font-bold">Celebrate your wins</span> with people who understand
                                </p>
                            </span>
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] dark:border-[#ffffff36] border-[#b2acac41] dark:bg-[#ffffff10] bg-[#a19f9f25] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="dark:text-white/60 font-medium text-sm">
                                    Make <span className="dark:text-white text-black/80 font-bold">like-minded friends</span> on your journey
                                </p>
                            </span>
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] dark:border-[#ffffff36] border-[#b2acac41] dark:bg-[#ffffff10] bg-[#a19f9f25] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="dark:text-white/60 font-medium text-sm">
                                    <span className="dark:text-white text-black/80 font-bold">Meet people</span> in our official group
                                </p>
                            </span>
                        </div>
                    </div>
                    <div className="mt-96 3xl:mt-12">
                        <span className="flex items-center gap-3 ml-2">
                            <FaUserCheck size={28} className="mb-5" />
                            <h3 className={`${syne.className} headline text-2xl h-12 uppercase font-bold mr-7 1xl:text-[20px] dark:block hidden`}>ACCESS TO OUR TEAM</h3>
                            <h3 className={`${syne.className} text-2xl h-12 uppercase font-bold mr-7 1xl:text-[20px] dark:text-white dark:hidden block `}>ACCESS TO OUR TEAM</h3>
                        </span>
                        <div className="flex flex-col gap-[17px] items-start">
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] dark:border-[#ffffff36] border-[#b2acac41] dark:bg-[#ffffff10] bg-[#a19f9f25] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="dark:text-white/60 font-medium text-sm">
                                    Mentors are <span className="dark:text-white text-black/80 font-bold">hyper-successful</span> experts in their field
                                </p>
                            </span>
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] dark:border-[#ffffff36] border-[#b2acac41] dark:bg-[#ffffff10] bg-[#a19f9f25] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="dark:text-white/60 font-medium text-sm">
                                    Get <span className="dark:text-white text-black/80 font-bold">mentored every step</span> of your journey
                                </p>
                            </span>
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] dark:border-[#ffffff36] border-[#b2acac41] dark:bg-[#ffffff10] bg-[#a19f9f25] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="dark:text-white/60 font-medium text-sm">
                                    <span className="dark:text-white text-black/80 font-bold">1-on-1 advice</span> from industry experts
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="h-[123vh] w-px bgline 3xl:hidden"></div>
                <div className="mt-[21rem] 3xl:hidden ml-4">
                    <div>
                        <span className="flex items-center gap-3 ml-2">
                            <FaUsers size={28} className="mb-5" />
                            <h3 className={`${syne.className} headline text-2xl h-12 uppercase font-bold mr-7 1xl:text-[20px] dark:block hidden`}>PRIVATE NETWORK</h3>
                            <h3 className={`${syne.className} text-2xl h-12 uppercase font-bold mr-7 1xl:text-[20px] dark:text-white dark:hidden block `}>PRIVATE NETWORK</h3>
                        </span>
                        <div className="max-w-[520px] w-full flex flex-col gap-[17px] items-start">
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] dark:border-[#ffffff36] border-[#b2acac41] dark:bg-[#ffffff10] bg-[#a19f9f25] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="dark:text-white/60 font-medium text-sm">
                                    <span className="dark:text-white text-black/80 font-bold">Celebrate your wins</span> with people who understand
                                </p>
                            </span>
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] dark:border-[#ffffff36] border-[#b2acac41] dark:bg-[#ffffff10] bg-[#a19f9f25] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="dark:text-white/60 font-medium text-sm">
                                    Make <span className="dark:text-white text-black/80 font-bold">like-minded friends</span> on your journey
                                </p>
                            </span>
                            <span className="flex items-center !min-w-[400px] 1xl:!min-w-[300px] gap-3 border-[1px] dark:border-[#ffffff36] border-[#b2acac41] dark:bg-[#ffffff10] bg-[#a19f9f25] px-3 py-2 rounded-full -mt-2">
                                <RiCheckFill size={23} />
                                <p className="dark:text-white/60 font-medium text-sm">
                                    <span className="dark:text-white text-black/80 font-bold">Meet people</span> in our official group
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