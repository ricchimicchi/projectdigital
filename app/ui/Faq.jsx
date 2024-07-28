'use client'
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { accordionItems } from '../providers/costumer_data';
import { Audiowide, Syne } from "next/font/google";
import Image from 'next/image';



const syne = Syne({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800'] });
const anton = Audiowide({ subsets: ["latin"], weight: ['400'] });

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='mt-32 1xl:mt-14'>
            <div className="flex items-center justify-center flex-col gap-5">
                <span className={` dark:text-white/50 text-sm font-bold block text-center`}>
                    A STEP-BY-STEP PATH
                </span>

                <h1 className={`${anton.className} uppercase text-center !leading-[51px] 1xl:!leading-[32px] headline text-5xl 1xl:text-3xl font-bold text-white dark:block hidden`}>Frequently Asked Questions
                </h1>
                <h1 className={`${anton.className} uppercase text-center !leading-[51px] 1xl:!leading-[32px] text-5xl 1xl:text-3xl font-bold text-black dark:hidden`}>Frequently Asked Questions
                </h1>
            </div>
            <div className='max-w-[875px] mx-auto px-2 mt-12'>
                {accordionItems.map((item, index) => (
                    <div key={index} className="dark:bg-[#040d11] bg-[#ececec99] rounded-sm mb-1.5 group">
                        <button
                            className="flex justify-between gap-3 dark:text-white w-full py-3 px-4 overflow-hidden relative"
                            onClick={() => toggleAccordion(index)}
                        >
                            <Image src='/hero-step/ellipse_1.svg' className="pointer-events-none group-hover:opacity-100 opacity-0 1xl:opacity-100 absolute -left-32 -bottom-24 1xl:-bottom-44 trs_lg rotate-90 " width={290} height={290} alt='costumer_images' />

                            <span className={`${syne.className} leading-[40px] 1xl:leading-[20px] text-[22px] 1xl:text-[16px] font-bold tracking-tighter text-start`}>{item.title}</span>
                            <IoIosArrowDown
                                className={`dark:text-white mt-2 text-2xl 1xl:min-w-4 1xl:min-h-4 1xl:max-w-4 1xl:max-h-4 min-h-7 min-w-7 ${openIndex === index ? 'transform rotate-180' : ''
                                    } transition-transform duration-300`}
                            />
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    key="content"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <div className="pb-6 pt-2 px-4 text-[#A6B0BA] font-medium 1xl:text-sm">{item.content}</div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq