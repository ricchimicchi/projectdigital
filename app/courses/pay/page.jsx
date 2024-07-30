'use client'

import { crschs } from "@/app/providers/cs_data";
import { Audiowide, Syne } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { FaCircleDot } from "react-icons/fa6"
import { IoLogoBitcoin, IoClose, IoChevronDown } from 'react-icons/io5';
import { RiVisaLine } from 'react-icons/ri';
import { BiLogoMastercard } from 'react-icons/bi';
import { AnimatePresence, motion } from 'framer-motion';

const anton = Audiowide({ subsets: ["latin"], weight: ['400'] });
const syne = Syne({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800'] });

export const pytcrs = [
  {
    id: 1,
    title: 'Crypto',
    img_icc: <FaCircleDot />,
    payment_method_img: <IoLogoBitcoin />,
    access: true,
  },
  {
    id: 2,
    title: 'Visa',
    img_icc: <FaCircleDot />,
    payment_method_img: <RiVisaLine />,
    access: true,
  },
  {
    id: 3,
    title: 'Master card',
    img_icc: <FaCircleDot />,
    payment_method_img: <BiLogoMastercard />,
    access: true,
  }
];

const blockchainOptions = [
  { id: 1, name: 'Ethereum' },
  { id: 2, name: 'Binance Smart Chain' },
  { id: 3, name: 'Polygon' },
];

const Pay = () => {

  const [activeId, setActiveId] = useState(
    crschs.find((course) => course.button_active_status).id
  );

  const handleSelect = (id) => {
    setActiveId(id);
  };

  const [selectedId, setSelectedId] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [blockchain, setBlockchain] = useState('');

  const handleSelectPayment = (id) => {
    setSelectedId(id);
    if (id !== 1) {
      setBlockchain('');
    }
    setPopupOpen(false);
  };

  const handleSubmit = () => {
    setPopupOpen(true);
  }

  const [selectedBlockchain, setSelectedBlockchain] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (name) => {
    setSelectedBlockchain(name);
    setBlockchain(name);
    setIsOpen(false);
  }

  return (
    <>
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
              <div className="py-7 px-4 1xl:py-5 1xl:px-2.5 backdrop-blur-xl dark:bg-white/5 bg-[#f2f2f267] rounded-2xl 1xl:rounded-xl shadow-2xl">
                <span className={`${anton.className} uppercase text-xl 1xl:text-base`}>Choose Course</span>
                <div className="mt-3 flex flex-col gap-2">
                  {crschs.map((e) => (
                    <button
                      key={e.id}
                      onClick={() => handleSelect(e.id)}
                      className={`relative flex items-center gap-1 py-4 px-4 1xl:px-3 1xl:py-3 rounded-lg w-full trs_lg outline-none border-[1px] ${e.button_active_status ? (activeId === e.id ? 'dark:text-white dark:bg-white/5 bg-black/5 cursor-pointer dark:border-white/40' : 'cursor-pointer  dark:border-white/20 dark:text-white/60') : 'bg-white/5 opacity-30 cursor-not-allowed  dark:border-white/10'}`}
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
                <div className="mt-5">
                  <span className={`${anton.className} uppercase text-xl 1xl:text-base`}>Payment method</span>
                  <div>
                    <div className="mt-3 grid grid-cols-3 gap-2 1xl:gap-1">
                      {pytcrs.map((e) => (
                        <button
                          key={e.id}
                          onClick={() => handleSelectPayment(e.id)}
                          className={`relative flex items-center gap-1 py-2 px-2 rounded-lg w-full trs_lg outline-none border-[1px] 
            ${selectedId === e.id ? 'dark:text-white cursor-pointer dark:border-white border-black/50 bg-[#f5f5f5] dark:bg-white/5' : 'cursor-pointer dark:border-white/30'}
            `}
                        >
                          {selectedId === e.id ? (
                            <span className="absolute top-2.5 right-2.5 text-xl dark:text-white trs_lg 1xl:top-1.5 1xl:right-1.5">
                              {e.img_icc}
                            </span>
                          ) : (
                            <div className="w-5 h-5 rounded-full dark:border-[#ffffff35] border-[#cdcdcd57] border-[1px] absolute top-2.5 right-2.5 1xl:top-1.5 1xl:right-1.5"></div>
                          )}
                          <div className='flex flex-col gap-4 items-start'>
                            <span className='text-2xl 1xl:text-lg'>{e.payment_method_img}</span>
                            <span className={`${syne.className} font-bold tracking-[-1px] 1xl:text-sm`}>{e.title}</span>
                          </div>
                        </button>
                      ))}
                    </div>

                    {selectedId === 1 && (
                      <div className="relative mt-5">
                        <div
                          className="flex items-center justify-between w-full py-2 px-3 border border-gray-300 bg-black text-white rounded-md cursor-pointer select-none"
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          <span>{selectedBlockchain || 'Select a blockchain'}</span>
                          <IoChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </div>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute z-10 w-full mt-1 py-2 border border-gray-300 bg-black rounded-md shadow-lg"
                            >
                              {blockchainOptions.map((option) => (
                                <div
                                  key={option.id}
                                  onClick={() => handleOptionClick(option.name)}
                                  className="cursor-pointer hover:bg-gray-700 px-4 py-2 text-white"
                                >
                                  {option.name}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    <button
                      onClick={handleSubmit}
                      className="mt-4 px-4 py-2 dark:bg-white dark:text-black text-white bg-black rounded-lg w-full"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {popupOpen && (
          <motion.div
            initial={{ opacity: 0, y: "0%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "0%" }}
            transition={{ duration: 0.3 }}
            onClick={() => setPopupOpen(false)}
            className="fixed inset-0 dark:bg-black/50 bg-black/5 flex items-center justify-center backdrop-blur-sm z-[999999999]"
          >
            <div className="p-6 1xl:p-4 backdrop-blur-xl bg-black/80 rounded-lg relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setPopupOpen(false)} className="text-3xl absolute top-2 right-3 text-white">
                <IoClose />
              </button>
              {selectedId === 1 ? (
                <div className="text-white">
                  <h2 className="text-2xl mb-4">Selected Blockchain</h2>
                  <p>{blockchain || 'No blockchain selected'}</p>
                </div>
              ) : (
                <div className="text-white">
                  <h2 className="text-2xl mb-4">Payment Details</h2>
                  <p>Payment details for {pytcrs.find((item) => item.id === selectedId)?.title}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}

export default Pay;
