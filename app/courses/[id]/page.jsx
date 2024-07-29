import { csrdd } from '@/app/providers/cs_data'
import Image from 'next/image'
import { Audiowide, Syne } from "next/font/google";
import { MdOutlineDiscount } from 'react-icons/md';


const syne = Syne({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800'] });
const anton = Audiowide({ subsets: ["latin"], weight: ['400'] });

const CourseDetail = ({ params }) => {
    const dataFilter = csrdd.find(e => e.id === parseInt(params.id, 10))
    console.log(dataFilter)

    return (
        <section className='mt-20 1xl:mt-12'>
            <div className='max-w-[1100px] mx-auto px-2'>

                <div className='grid grid-cols-2 2xl:grid-cols-1 gap-5 3xl:gap-10 mt-32'>
                    <div>
                        <Image className='pointer-events-none rounded-lg border-[1px] border-[#ffffff1c]' src={dataFilter.main_image} width={460} height={460} alt={dataFilter.title} />
                    </div>
                    <div className='mt-1'>
                        <span className='tracking-wider dark:text-white/50 font-bold text-black/60'>{dataFilter.title_hd}</span>
                        <h1 className={`${anton.className} mt-2 uppercase !leading-[41px] 1xl:!leading-[31px] headline text-4xl 1xl:text-3xl font-bold text-white dark:block hidden`}>{dataFilter.title}</h1>
                        <h1 className={`${anton.className} mt-2 uppercase !leading-[41px] 1xl:!leading-[31px] text-4xl 1xl:text-3xl font-bold text-black dark:hidden`}>{dataFilter.title}</h1>
                        <p className='mt-2 font-semibold text-lg'>{dataFilter.main_description}</p>
                        <div>
                            <div className="flex items-center gap-2 mt-4">
                                <span className={`${anton.className} text-xl font-semibold line-through dark:text-white/40`}>${dataFilter.oldPrice}</span>
                                <span className={`${anton.className} text-4xl font-semibold bg-gradient-to-r from-[#ffcf23] to-[#b07c27] bg-clip-text text-transparent`}>${dataFilter.newPrice}</span>
                                <div className="flex items-center gap-1 dark:bg-white/10 bg-black/10 px-1.5 py-1 rounded-md">
                                    <MdOutlineDiscount size={12} />
                                    <span className={`${anton.className} text-xs font-semibold tracking-tight`}>{dataFilter.discount_interest}% Sale</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
        </section>
    )
}

export default CourseDetail