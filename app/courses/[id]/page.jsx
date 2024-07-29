import { csrdd } from '@/app/providers/cs_data'
import Image from 'next/image'
import { Audiowide, Syne } from "next/font/google";
import { MdOutlineDiscount } from 'react-icons/md';
import { FaCheck } from "react-icons/fa6";
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import { boxs_dtl } from '@/app/providers/costumer_data';



const syne = Syne({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800'] });
const anton = Audiowide({ subsets: ["latin"], weight: ['400'] });

const CourseDetail = ({ params }) => {
    const dataFilter = csrdd.find(e => e.id === parseInt(params.id, 10))
    console.log(dataFilter)

    return (
        <section className='mt-10 1xl:mt-0 max-w-[1600px] mx-auto relative overflow-hidden'>
            <Image
                src='/hero-step/ellipse_1.svg'
                className="pointer-events-none dark:opacity-20 opacity-100 absolute -z-10 1xl:-top-20 1xl:-left-48"
                width={500}
                height={500}
                alt="back"
                priority={true}
            />
            <Image
                src='/hero-step/ellipse_1.svg'
                className="pointer-events-none dark:opacity-20 opacity-100 absolute right-56 1xl:right-12 top-[14rem] 1xl:top-[34rem] -z-10"
                width={500}
                height={500}
                alt="back"
                priority={true}
            />
            <Image
                src='/hero-step/ellipse_1.svg'
                className="pointer-events-none dark:opacity-20 opacity-100 absolute right-56 1xl:-right-14 bottom-[30rem] -z-10"
                width={500}
                height={500}
                alt="back"
                priority={true}
            />
            <Image
                src='/hero-step/ellipse_1.svg'
                className="pointer-events-none dark:opacity-20 opacity-100 absolute right-56 1xl:right-12 bottom-3 -z-10"
                width={500}
                height={500}
                alt="back"
                priority={true}
            />
            <div className='max-w-[1100px] mx-auto px-2'>
                <div className='grid grid-cols-2 2xl:grid-cols-1 gap-2 3xl:gap-8 mt-32'>
                    <div>
                        <Image className='pointer-events-none rounded-lg border-[1px] border-[#ffffff1c]' src={dataFilter.main_image} width={460} height={460} alt={dataFilter.title} />
                    </div>
                    <div className='mt-1 px-1'>
                        <span className='tracking-wider dark:text-white/50 font-bold text-black/60 1xl:text-sm'>{dataFilter.title_hd}</span>
                        <h1 className={`${anton.className} mt-2 1xl:mt-1 uppercase !leading-[41px] 1xl:!leading-[26px] headline text-4xl 1xl:text-2xl font-bold text-white dark:block hidden`}>{dataFilter.title}</h1>
                        <h1 className={`${anton.className} mt-2 1xl:mt-1 uppercase !leading-[41px] 1xl:!leading-[26px] text-4xl 1xl:text-2xl font-bold text-black dark:hidden`}>{dataFilter.title}</h1>
                        <p className='mt-2 1xl:mt-1 font-semibold text-lg 1xl:text-base tracking-tight'>{dataFilter.main_description}</p>
                        <div>
                            <div className='mt-3 flex items-center gap-3'>
                                <div class="circle_mm pulse green"></div>
                                <span className='dark:text-white/60 font-medium tracking-tight'><span className='font-bold dark:text-white'>856 </span> Succeeded students in the past 30 days</span>
                            </div>
                            <div className="flex items-center gap-2 mt-4 1xl:mt-2">
                                <span className={`${anton.className} text-xl font-semibold line-through dark:text-white/40`}>${dataFilter.oldPrice}</span>
                                <span className={`${anton.className} text-4xl font-semibold bg-gradient-to-r from-[#ffcf23] to-[#b07c27] bg-clip-text text-transparent`}>${dataFilter.newPrice}</span>
                                <div className="flex items-center gap-1 dark:bg-white/10 bg-black/10 px-1.5 py-1 rounded-md">
                                    <MdOutlineDiscount size={12} />
                                    <span className={`${anton.className} text-xs font-semibold tracking-tight`}>{dataFilter.discount_interest}% Sale</span>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <ul className='flex items-start gap-3 flex-col 1xl:gap-2'>
                                    <li className='flex items-center gap-2'>
                                        <FaCheck />
                                        <span className='text-base tracking-tight 1xl:text-sm font-semibold dark:text-white/60'>Escape the boring 9-to-5 routine</span>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <FaCheck />
                                        <span className='text-base tracking-tight 1xl:text-sm font-semibold dark:text-white/60'>Dedicate only 1-2 hours a day</span>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <FaCheck />
                                        <span className='text-base tracking-tight 1xl:text-sm font-semibold dark:text-white/60'>Be location independent</span>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <FaCheck />
                                        <span className='text-base tracking-tight 1xl:text-sm font-semibold dark:text-white/60'>No need for capital or expertise</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-9">
                                <Link href="/courses/pay" className={`${anton.className} dark:bg-[#41391a] bg-[#7d6b2c3c] 1xl:rounded-xl rounded-sm border-[3px] border-[#ffca25] px-3 py-2 w-full flex items-center justify-center jn_btn`}>
                                    <div className="flex items-center gap-2 text-xl">CHECKOUT <IoIosArrowForward size={22} /></div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='mt-32 1xl:mt-24'>
                    <div>
                        <div className='max-w-[700px] mx-auto'>
                            <h1 className={`${anton.className} mt-2 1xl:mt-1 uppercase text-center !leading-[51px] 1xl:!leading-[26px] headline text-5xl 1xl:text-2xl font-bold text-white dark:block hidden`}>BUT WHAT IS THIS YOUTUBE AUTOMATION?</h1>
                            <h1 className={`${anton.className} mt-2 1xl:mt-1 uppercase text-center !leading-[51px] 1xl:!leading-[26px] text-5xl 1xl:text-2xl font-bold text-black dark:hidden`}>BUT WHAT IS THIS YOUTUBE AUTOMATION?</h1>
                        </div>
                        <div className='mt-8 1xl:mt-5'>
                            <Image
                                src='/detail/detail_yt.svg'
                                className="pointer-events-none dark:opacity-35 rounded-lg border-[1px] border-[#ffffff1c]"
                                width={1095}
                                height={1000}
                                alt="back"
                                priority={true}
                            />
                        </div>
                        <div className='mt-7 1xl:mt-5'>
                            <p className='dark:text-white/70 font-medium tracking-tight text-lg text-center 1xl:text-sm'>Discover the Power of YouTube Automation: <br className='2xl:hidden' /> Earn Without Showing Your Face or Making Videos!</p>
                            <p className='dark:text-white/70 font-medium tracking-tight text-lg text-center 1xl:text-sm mt-4'>This unique business model is still under the radar but is gaining traction daily. So, when is the best time to start your own Automation channel? The time is NOW!</p>
                        </div>



                    </div>
                    <div className='mt-16 grid grid-cols-3 3xl:grid-cols-2 2xl:grid-cols-1 gap-3 1xl:gap-1.5 justify-center'>
                        {
                            boxs_dtl.map((e) => (
                                <div key={e.id} className='dark:bg-white/5 bg-black/5 flex flex-col gap-3 1xl:gap-2 items-center p-3 py-12 1xl:py-8 rounded-lg backdrop-blur-lg'>
                                    <span className='block text-5xl 1xl:text-4xl'>{e.icon}</span>
                                    <h3 className={`${anton.className} text-3xl 1xl:text-2xl font-semibold headline uppercase text-center`}>{e.title}</h3>
                                    <p className='text-base font-medium text-center dark:text-white/70 1xl:text-sm 1xl:-mt-2'>{e.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default CourseDetail