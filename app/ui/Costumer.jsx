'use client'
import { Audiowide, Syne } from "next/font/google";
import { costumer_data } from "../providers/costumer_data";
import Image from "next/image";
import { TbClick, TbUsersGroup } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { BiMoneyWithdraw } from "react-icons/bi";


const syne = Syne({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800'] });
const anton = Audiowide({ subsets: ["latin"], weight: ['400'] });

const Costumer = () => {

    const [popupCostumer, setPopupCostumer] = useState(false)
    const [popupData, setPopupData] = useState(null)
    const filteredCostumerData = costumer_data.find(e => e.id === popupData)

    const popupcostumerfunc = (id) => {
        setPopupCostumer(true)
        setPopupData(id)
    }

    return (
        <>
            <div className="mt-20 1xl:mt-2">
                <div>
                    <span className={` dark:text-white/50 text-sm font-bold block text-center`}>
                        {`SOME OF THE WINNERS`}
                    </span>
                    <h1 className={`${anton.className} mt-3 1xl:mt-1.5 text-center !leading-[31px] headline text-5xl 1xl:text-3xl font-bold text-white dark:block hidden`}>{`DANIEL'S WINNING COSTUMERS`}</h1>
                    <h1 className={`${anton.className} mt-3 1xl:mt-1.5 text-center !leading-[31px] text-5xl 1xl:text-3xl font-bold text-black dark:hidden`}>{`DANIEL'S WINNING COSTUMERS`}</h1>
                </div>
                <div className="flex items-center justify-center gap-1 mt-6 dark:text-white/50">
                    <TbClick />
                    <span className="font-semibold tracking-tighter">Click More Information</span>
                </div>

                <div className="flex items-center justify-center 1xl:grid 1xl:grid-cols-2 flex-wrap max-w-[900px] mx-auto gap-[10px] 1xl:gap-[4px] mt-6 px-2">
                    {
                        costumer_data.map((e) => (
                            <div onClick={() => popupcostumerfunc(e.id)} key={e.id} className="relative cursor-pointer max-w-[280px] dark:bg-[#040d11] bg-[#ececec99] group rounded-md hover: border-[1px] border-white/5 overflow-hidden trs_lg">
                                <Image src='/grid-back.svg' className="pointer-events-none object-cover absolute inset-0 opacity-0 1xl:opacity-100 group-hover:opacity-100 trs_lg w-[290px]" width={290} height={290} alt='costumer_images' />
                                <Image src='/hero-step/ellipse_1.svg' className="pointer-events-none object-cover absolute z-[100] -top-32 1xl:-top-24 -left-32 opacity-0 1xl:-left-16 1xl:opacity-20 group-hover:opacity-30 trs_lg w-[290px]" width={290} height={290} alt='costumer_images' />
                                <div className="py-5 px-2 flex items-center gap-2">
                                    <h2 className={`${syne.className} text-2xl 1xl:text-xl font-bold`}>{e.costumer_name} ~ {e.costumer_age}</h2>
                                    <Image src={e.costumer_flag} className="pointer-events-none rounded-sm" width={25} height={20} alt='costumer_images' />
                                </div>
                                <div className="w-[280px] h-[180px] relative z-[99]">
                                    <Image src={e.main_result_img} className="pointer-events-none object-cover w-full h-full" width={290} height={290} alt='costumer_images' />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex items-center justify-center mt-12 1xl:mt-6">
                    <div className="relative">
                        <div
                            className="absolute -inset-1 rounded-lg bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-600 0 via-red-600 0 to-amber-600 />0 opacity-50 blur-2xl"
                        ></div>
                        <div className="relative">
                            <Link href="/" className={`${anton.className} button max-w-[420px] w-full 1xl:rounded-xl flex items-center justify-center`}>
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

            <AnimatePresence>
                {
                    popupCostumer && (
                        <motion.div
                            initial={{ opacity: 0, y: "0%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: "0%" }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setPopupCostumer(false)}
                            className="fixed inset-0 dark:bg-black/50 bg-black/5 flex items-center justify-center backdrop-blur-sm z-[999999999]">
                            <div className="p-6 1xl:p-4 backdrop-blur-xl bg-black/80 rounded-lg relative" onClick={(e) => e.stopPropagation()}>
                                <button onClick={() => setPopupCostumer(false)} className="text-3xl absolute top-2 right-3 text-white">
                                    <IoClose />
                                </button>
                                <div className="grid grid-cols-2 2xl:flex 2xl:flex-col-reverse 2xl:items-center 2xl:justify-center gap-9 1xl:gap-4">
                                    <div className="w-[320px] h-[320px] 1xl:w-[300px] 1xl:h-[200px] relative z-[99]">
                                        <Image src={filteredCostumerData.main_result_img} className="pointer-events-none object-cover w-full h-full" width={290} height={290} alt='costumer_images' />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-4">
                                            <h2 className={`${syne.className} text-4xl 1xl:text-xl font-bold tracking-tighter text-white`}>{filteredCostumerData.costumer_name} ~ {filteredCostumerData.costumer_age}</h2>
                                            <Image src={filteredCostumerData.costumer_flag} className="pointer-events-none rounded-sm mt-[2px]" width={25} height={20} alt='costumer_images' />
                                        </div>
                                        <div className="mt-1">
                                            <span className="font-semibold text-sm px-[3px] text-white">{filteredCostumerData.costumer_main_join_time} <span className="italic text-white/40 text-xs font-semibold">(Join program date)</span></span>
                                            <span className="flex items-start mt-2 gap-1">
                                                <span className={`text-4xl ${anton.className} bg-gradient-to-br from-amber-500 to-yellow-400 bg-clip-text text-transparent`}>{filteredCostumerData.monthly_income}</span>
                                                <span className="text-amber-500 font-semibold tracking-tight">+/month</span>
                                            </span>
                                            <p className="max-w-[300px] font-medium text-sm tracking-tight mt-3 text-white">{filteredCostumerData.costumer_main_comment}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}

export default Costumer