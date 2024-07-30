'use client'

import { crschs } from "@/app/providers/cs_data";
import { Audiowide, Syne } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { FaCircleDot } from "react-icons/fa6";



const anton = Audiowide({ subsets: ["latin"], weight: ['400'] });
const syne = Syne({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800'] });


const Pay = () => {

  const [activeId, setActiveId] = useState(
    crschs.find((course) => course.button_active_status).id
  );

  const handleSelect = (id) => {
    setActiveId(id);
  };


  return (
    <section className="pt-20 relative">
      <div className="main_bg dark:block hidden"></div>
      <div className="max-w-[1115px] mx-auto">
        <div className="grid grid-cols-2 2xl:grid-cols-1 gap-12 pt-16 1xl:pt-14">
          <div className="px-2">
            <h3 className={`${anton.className} text-3xl 1xl:text-xl 1xl:leading-[26px] uppercase font-semibold`}>Access to professional courses with a one-time payment</h3>
            <ul className='flex items-start gap-2 flex-col 1xl:gap-1 mt-6 1xl:mt-3'>
              <li className='flex items-center gap-2'>
                <FaCheck />
                <span className='text-base tracking-tight 1xl:text-sm font-medium dark:text-white/60 text-black/70'>Profit without any risk</span>
              </li>
              <li className='flex items-center gap-2'>
                <FaCheck />
                <span className='text-base tracking-tight 1xl:text-sm font-medium dark:text-white/60 text-black/70'>Escape the boring 9-to-5 routine</span>
              </li>
              <li className='flex items-center gap-2'>
                <FaCheck />
                <span className='text-base tracking-tight 1xl:text-sm font-medium dark:text-white/60 text-black/70'>Dedicate only 1-2 hours a day</span>
              </li>
              <li className='flex items-center gap-2'>
                <FaCheck />
                <span className='text-base tracking-tight 1xl:text-sm font-medium dark:text-white/60 text-black/70'>Be location independent</span>
              </li>
              <li className='flex items-center gap-2'>
                <FaCheck />
                <span className='text-base tracking-tight 1xl:text-sm font-medium dark:text-white/60 text-black/70'>No need for capital or expertise</span>
              </li>
            </ul>
            <div className="w-full h-[1px] dark:bg-white/20 bg-black/10 my-6 1xl:my-3.5" />
            <p className=" dark:text-white/60 text-black/70 1xl:text-sm font-medium 1xl:leading-[18px]">Join our team of ambitious individuals committed to unlocking the secrets of wealth and success.</p>
          </div>
          <div className="px-1 1xl:-mt-4">
            <div className="py-7 px-4 1xl:py-5 1xl:px-2.5 backdrop-blur-xl dark:bg-white/5 bg-[#f2f2f267] rounded-2xl 1xl:rounded-xl">
              <span className={`${anton.className} uppercase text-xl`}>Choose Course :</span>
              <div className="mt-3 flex flex-col gap-2">
                {crschs.map((e) => (
                  <button
                    key={e.id}
                    onClick={() => handleSelect(e.id)}
                    className={`relative flex items-center gap-1 py-4 px-4 1xl:px-3 1xl:py-3 rounded-lg w-full trs_lg outline-none border-[1px] 
          ${e.button_active_status ? (activeId === e.id ? 'dark:text-white dark:bg-white/5 bg-black/5 cursor-pointer dark:border-white/40' : 'cursor-pointer  dark:border-white/20 dark:text-white/60') : 'bg-white/5 opacity-30 cursor-not-allowed  dark:border-white/10'}
          `}
                    disabled={!e.button_active_status}
                  >
                    {activeId === e.id ? (
                      <span className="absolute top-4 right-4 text-2xl 1xl:text-xl 1xl:top-2.5 1xl:right-2.5 dark:text-white trs_lg">
                        <FaCircleDot />
                      </span>
                    ) : (
                      <div className="w-6 h-6 1xl:h-5 1xl:w-5 rounded-full  dark:border-[#ffffff35] border-[1px] absolute top-3 right-4 1xl:top-2.5 1xl:right-2.5"></div>
                    )}
                    <div>
                      <div className={`font-semibold tracking-wider text-start max-w-[200px] text-[8px]`}>{e.title_hd}</div>
                      <div className="flex items-center gap-3 1xl:gap-2.5">
                        <div className={`${syne.className} font-bold text-xl tracking-tighter text-start max-w-[200px]`}>{e.title}</div>
                        <Image
                          src={e.course_dd_img}
                          className="pointer-events-none mb-[1px] 1xl:mt-[1px]"
                          width={18}
                          height={18}
                          alt="back"
                          priority={true}
                        />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pay