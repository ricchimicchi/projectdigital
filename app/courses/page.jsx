import { Audiowide, Syne } from "next/font/google";
import Image from "next/image";
import { csrdd } from "../providers/cs_data";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineDiscount } from "react-icons/md";





const anton = Audiowide({ subsets: ["latin"], weight: ['400'] });
const syne = Syne({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800'] });

const Courses = () => {
    return (
        <div className="mt-24 h-screen 2xl:h-full relative">
            <Image
                src='/hero-step/ellipse_1.svg'
                className="pointer-events-none dark:opacity-20 opacity-100 absolute -z-10"
                width={500}
                height={500}
                alt="back"
                priority={true}
            />

            <Image
                src='/hero-step/ellipse_1.svg'
                className="pointer-events-none dark:opacity-20 opacity-100 absolute -z-10 right-11 rotate-90 -bottom-40 1xl:-bottom-5"
                width={500}
                height={500}
                alt="back"
                priority={true}
            />
            <div className="max-w-[1100px] mx-auto px-2">
                <div>
                    <span className={` dark:text-white/50 text-sm font-bold block text-center`}>
                        {`NOW IT'S DECISION TIME!`}
                    </span>
                    <h1 className={`${anton.className} mt-2 text-center !leading-[52px] 1xl:!leading-[31px] headline text-5xl 1xl:text-3xl font-bold text-white dark:block hidden`}>{`THE CHOICE IS YOURS`}</h1>
                    <h1 className={`${anton.className} mt-2 text-center !leading-[52px] 1xl:!leading-[31px] text-5xl 1xl:text-3xl font-bold text-black dark:hidden`}>{`THE CHOICE IS YOURS`}</h1>
                </div>
                <div className="mt-10 grid grid-cols-3 justify-center max-w-[900px] mx-auto gap-4 1xl:grid-cols-1">
                    {
                        csrdd.map((e) => (
                            <div key={e.id} className="relative backdrop-blur-xl p-2.5 dark:bg-white/5 dark:hover:bg-white/10 bg-black/5 trs_lg rounded-xl overflow-hidden">
                                <Image
                                    src={e.main_image}
                                    className="pointer-events-none border-[1px] border-[#ffffff1c] rounded-lg w-full"
                                    width={260}
                                    height={260}
                                    alt="back"
                                    priority={true}
                                />
                                <div className="mt-2">
                                    <span className="text-[8px] font-semibold dark:text-white/60 tracking-wider">{e.title_hd}</span>
                                    <h3 className={`${syne.className} max-w-[250px] font-bold tracking-tight leading-[18px] h-16`}>{e.title}</h3>
                                    <div className="flex items-center gap-2 -mt-4">
                                        <span className={`${anton.className} text-sm font-semibold line-through dark:text-white/40`}>${e.oldPrice}</span>
                                        <span className={`${anton.className} text-2xl font-semibold bg-gradient-to-r from-[#ffcf23] to-[#b07c27] bg-clip-text text-transparent`}>${e.newPrice}</span>
                                        <div className="flex items-center gap-1 dark:bg-white/10 bg-black/10 px-1.5 py-1 rounded-md">
                                            <MdOutlineDiscount size={12} />
                                            <span className={`${anton.className} text-xs font-semibold tracking-tight`}>{e.discount_interest}%</span>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <Link href={e.button_active_status ? `/courses/${e.id}` : `#`} className={e.button_active_status ? 'cursor-pointer dark:bg-[#41391a] bg-[#7d6b2c3c] rounded-md border-[3px] border-[#ffca25] px-3 py-2 w-full flex items-center justify-center' : 'cursor-not-allowed dark:bg-[#41391a] bg-[#7d6b2c3c] rounded-md border-[3px] border-[#ffca25] px-3 py-2 w-full flex items-center justify-center'}>
                                            <div className={`${anton.className} flex items-center gap-2`}>{e.button_text} {e.button_active_status ? <IoIosArrowForward size={21} className="mb-0.5 1xl:mb-[1px]" /> : <div>
                                                <Image
                                                    src='/loader.gif'
                                                    className="pointer-events-none"
                                                    width={16}
                                                    height={16}
                                                    alt="back"
                                                    priority={true}
                                                />
                                            </div>}</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="text-center mt-7">
                    <p className="dark:text-white/60 text-sm font-medium tracking-tight">
                        or continue your 9 - 5 <span className="font-bold">life</span>...
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Courses