'use client'

import { crschs } from "@/app/providers/cs_data";
import { Audiowide, Syne } from "next/font/google";
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
    <section className="pt-20 h-screen relative">
      <div className="main_bg dark:block hidden"></div>
      <div className="max-w-[1115px] mx-auto px-2">
        <div className="grid grid-cols-2 2xl:grid-cols-1 gap-5 pt-16 1xl:pt-14">
          <div>
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
          <div>
            <div className="py-7 px-4 backdrop-blur-xl bg-white/5 rounded-2xl">
              <span className={`${anton.className} uppercase text-xl`}>Choose Course :</span>
              <div className="mt-3 flex flex-col gap-1">
                {crschs.map((e) => (
                  <button
                    key={e.id}
                    onClick={() => handleSelect(e.id)}
                    className={`relative flex items-center gap-1 py-4 px-4 rounded-lg w-full trs_lg outline-none border-[1px] 
          ${e.button_active_status ? (activeId === e.id ? 'text-white cursor-pointer border-white' : 'cursor-pointer border-white/40') : 'bg-white/5 opacity-30 cursor-not-allowed border-white/10'}
          `}
                    disabled={!e.button_active_status}
                  >
                    {activeId === e.id ? (
                      <span className="absolute top-3 right-4 text-xl text-white trs_lg">
                        <FaCircleDot />
                      </span>
                    ) : (
                      <div className="w-5 h-5 rounded-full border-[#ffffff35] border-[1px] absolute top-3 right-4"></div>
                    )}
                    <div className="text-start max-w-[200px]">{e.title}</div>
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