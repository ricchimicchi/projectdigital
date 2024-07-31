'use client'

import { blockchainOptions, crschs, stepbystepCart } from "@/app/providers/cs_data";
import { Audiowide, Syne } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { FaCircleDot } from "react-icons/fa6";
import { IoLogoBitcoin, IoClose, IoChevronDown } from 'react-icons/io5';
import { AnimatePresence, motion } from 'framer-motion';
import { MdOutlineContentCopy } from "react-icons/md";
import { PiWarningFill } from "react-icons/pi";
import Link from "next/link";

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
    payment_method_img: <Image
      src='/crypto/visa.svg'
      className="pointer-events-none mb-[2px]"
      width={26}
      height={22}
      alt="Visa"
      priority={true}
    />,
    access: true,
  },
  {
    id: 3,
    title: 'Master card',
    img_icc: <FaCircleDot />,
    payment_method_img: <Image
      src='/crypto/mastercard.svg'
      className="pointer-events-none mb-[1px] 1xl:mt-[1px]"
      width={20}
      height={20}
      alt="MasterCard"
      priority={true}
    />,
    access: true,
  }
];

const Pay = () => {
  const [activeId, setActiveId] = useState(
    crschs.find((course) => course.button_active_status).id
  );

  const handleSelect = (id) => {
    setActiveId(id);
  };

  const [selectedId, setSelectedId] = useState(1);
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

  const selectedOption = blockchainOptions.find(option => option.crypto_name === selectedBlockchain);

  const initialTime = 3 * 60 * 60 * 1000;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);


  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);


  const handleCopyAddress = () => {
    navigator.clipboard.writeText(selectedOption.crypto_address)
      .then(() => {
        alert('Copied!');
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleCopyAmount = () => {
    navigator.clipboard.writeText(selectedOption.equal_crypto_price)
      .then(() => {
        alert('Copied!');
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleCopyAddressStep = () => {
    navigator.clipboard.writeText('TZ9vfPKwzNWpZAXhLjBRR8Dtjhf7CvAf2H')
      .then(() => {
        alert('Copied!');
      })
      .catch(err => {
        console.error(err);
      });
  };


  return (
    <>
      <section className="pt-20 1xl:pt-8 relative">
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
              <div className="py-7 px-4 1xl:py-4 1xl:px-1.5 backdrop-blur-xl dark:bg-white/5 bg-[#f2f2f267] rounded-2xl 1xl:rounded-xl shadow-2xl">
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
                            alt="course image"
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
                    <div className="mt-3 grid grid-cols-3 gap-2 1xl:gap-2">
                      {pytcrs.map((e) => (
                        <button
                          key={e.id}
                          onClick={() => handleSelectPayment(e.id)}
                          className={`relative flex items-center gap-1 py-2 px-2 1xl:px-1.5 rounded-lg w-full trs_lg outline-none border-[1px] 
            ${selectedId === e.id ? 'dark:text-white dark:bg-white/5 bg-black/5 cursor-pointer dark:border-white/40' : 'cursor-pointer dark:border-white/30'}
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
                            <span>{e.payment_method_img}</span>
                            <span className={`${anton.className} font-bold text-sm 1xl:text-[11px] uppercase`}>{e.title}</span>
                          </div>
                        </button>
                      ))}
                    </div>

                    {selectedId === 1 && (
                      <div className="relative mt-2">
                        <div
                          className="flex items-center justify-between dark:border-white/40 border-[1px] dark:bg-[#15171b] dark:border-white/10' w-full py-3 px-3 rounded-lg cursor-pointer select-none"
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          {selectedOption ? (
                            <div className="flex items-center gap-3">
                              <Image
                                src={selectedOption.crypto_logo}
                                className="pointer-events-none"
                                width={24}
                                height={24}
                                alt={selectedOption.crypto_name}
                                priority={true}
                              />
                              <div className="flex items-center gap-2">
                                <span className={`${anton.className} uppercase text-xs dark:text-white`}>{selectedOption.crypto_name}</span>
                                <span className={`${anton.className} text-[10px] dark:text-white/60`}>{selectedOption.crypto_network}</span>
                              </div>
                            </div>
                          ) : (
                            <span className={`${anton.className} uppercase text-xs dark:text-white`}>{'Select a blockchain'}</span>
                          )}
                          <IoChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </div>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute z-10 w-full mt-[7px] py-2 border-[1px] dark:bg-[#15171b] bg-[#fafafa] cursor-pointer dark:border-white/40 rounded-lg shadow-lg max-h-24 overflow-y-scroll no-scrollbar"
                            >
                              {blockchainOptions.map((option) => (
                                <div
                                  key={option.id}
                                  onClick={() => handleOptionClick(option.crypto_name)}
                                  className="cursor-pointer px-4 1xl:px-2 py-2 dark:text-white"
                                >
                                  <div className="flex items-center gap-3">
                                    <Image
                                      src={option.crypto_logo}
                                      className="pointer-events-none"
                                      width={24}
                                      height={24}
                                      alt={option.crypto_name}
                                      priority={true}
                                    />
                                    <div className="flex items-center gap-2">
                                      <span className={`${anton.className} uppercase text-[10px] dark:text-white/60`}>{option.crypto_name}</span>
                                      <span className={`${anton.className} uppercase text-sm`}>{option.crypto_network}</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    <div className="mt-16 flex items-center justify-between w-full">
                      <h4 className={`${anton.className} text-sm font-semibold uppercase`}>Total Price</h4>
                      <span className={`${anton.className} text-lg font-semibold`}>$24.99 <span className="dark:text-white/60 text-[9px] uppercase">(Lifetime)</span></span>
                    </div>

                    <button
                      onClick={handleSubmit}
                      className={`${anton.className} mt-4 px-4 py-2 border-[1px] rounded-lg w-full uppercase dark:text-white dark:bg-white/5 bg-black/5 cursor-pointer dark:border-white/40`}
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
            className="fixed inset-0 dark:bg-black/50 bg-black/5 flex items-center justify-center backdrop-blur-sm z-[999999999] px-2"
          >
            <div className="p-6 1xl:p-4 backdrop-blur-xl w-full max-w-[400px] dark:bg-[#bbbbbb04] bg-white border-[1px] dark:border-white/20 border-black/10 rounded-3xl relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setPopupOpen(false)} className="text-3xl absolute top-2 right-3 dark:text-white">
                <IoClose />
              </button>
              {selectedId === 1 ? (
                <div className="">
                  {selectedOption ? (
                    <div>
                      <div className="flex items-center justify-center mt-2">
                        <Image
                          src={selectedOption.crypto_qr_img_dark}
                          className="rounded-lg p-1.5 border-[1px] dark:border-white/10 border-black/10 !pointer-events-none"
                          width={170}
                          height={170}
                          alt='crpt'
                        />
                      </div>
                      <div className="flex items-center justify-center gap-2 mt-5 1xl:mt-3">
                        <p className="text-xs font-medium dark:text-white/60">Time left to pay: </p>
                        <div className="flex items-center gap-[0.01rem]">
                          <span className="text-sm font-medium">{String(hours).padStart(2, '0')}</span>
                          <span className="text-sm font-medium">:</span>
                          <span className="text-sm font-medium">{String(minutes).padStart(2, '0')}</span>
                          <span className="text-sm font-medium">:</span>
                          <span className="text-sm font-medium">{String(seconds).padStart(2, '0')}</span>
                        </div>
                      </div>

                      <div className="mt-6 1xl:mt-3 tracking-wide">
                        <span className="text-xs font-medium dark:text-white/50">Send to this address</span>
                        <div className="flex items-center justify-between gap-6 1xl:gap-1 px-2 py-2 border-[1px] dark:border-white/10 border-black/10 rounded-lg mt-1">
                          <span className="text-[10px] 1xl:text-[9px] font-medium">{selectedOption.crypto_address}</span>
                          <button onClick={handleCopyAddress}>
                            <MdOutlineContentCopy />
                          </button>
                        </div>
                        <div className="mt-2 px-2 pt-5 pb-2 border-[1px] dark:border-white/10 border-black/10 rounded-lg">
                          <span className="block text-xs text-center tracking-wide font-medium dark:text-white text-[#18191b]">Amount to be received</span>
                          <div className="flex items-center justify-center gap-2 mt-1">
                            <Image
                              src={selectedOption.crypto_logo}
                              className="!pointer-events-none"
                              width={22}
                              height={22}
                              alt='crpt'
                            />
                            <div className="flex items-center gap-0.5">
                              <span className="text-xs font-medium dark:text-white text-[#18191b]">{selectedOption.equal_crypto_price}</span>
                              <span className="text-xs font-medium dark:text-white text-[#18191b]">{selectedOption.crypto_name}</span>
                              <span className="text-xs font-medium dark:text-white text-[#18191b]">{selectedOption.crypto_network}</span>
                            </div>
                            <button onClick={handleCopyAmount}>
                              <MdOutlineContentCopy />
                            </button>
                          </div>
                          <span className="block text-xs font-medium text-center mt-1">Please account for gas fees</span>

                          <div className="text-center mt-2">
                            <span className="flex items-center justify-center gap-2 font-semibold tracking-tight text-xs text-yellow-500">Warning <PiWarningFill /></span>
                            <p className="text-[10px] mt-1 font-medium dark:text-white/60 text-black/60">After you send the money, you need to write to the administrator.</p>
                          </div>
                          <Link href={'/'} className={`${anton.className} uppercase mt-2 px-3 py-2 text-xs font-medium text-center w-full flex items-center justify-center gap-2 border-[1px] dark:border-white/10 border-black/10 rounded-lg transition-all hover:bg-black/5`}>
                            Write Administrator
                            <Image
                              src='/social/telegram.svg'
                              className="!pointer-events-none"
                              width={22}
                              height={22}
                              alt='telegram'
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="py-5 px-1">No blockchain selected</div>
                  )}
                </div>
              ) : (
                <div className="overflow-y-scroll max-w-[340px] mx-auto mt-5 scroll_payment max-h-[500px] 1xl:max-h-[460px]">
                  <h3 className={`${anton.className} text-base uppercase font-semibold text-center`}>How to buy an Crypto App using any payment system in the world?</h3>

                  <div className="flex flex-col items-center justify-center gap-4 mt-6">
                    {
                      stepbystepCart.map(e => (
                        <div key={e.id} className="pb-5 px-2">
                          <div className="w-full h-px dark:bg-white/20 bg-black/10 mb-4" />
                          <h3 className={`${anton.className} font-semibold text-sm uppercase text-center`}>{e.title}</h3>
                          <p className="text-sm font-medium dark:text-white/60 mt-3 text-center">{e.desc}</p>
                          {
                            e.button_copy && (
                              <div className="flex mt-3 items-center justify-between gap-6 1xl:gap-4 px-2 py-2 border-[1px] dark:border-white/10 border-black/10 rounded-lg">
                                <span className="text-[10px] 1xl:text-[9px] font-medium">{e.copy_address}</span>
                                <button onClick={handleCopyAddressStep}>
                                  <MdOutlineContentCopy />
                                </button>
                              </div>
                            )
                          }
                          <div className="flex items-center justify-center">
                            <Image
                              src={e.main_img}
                              className="pointer-events-none 1xl:max-w-[200px]"
                              width={300}
                              height={700}
                              alt="back"
                              priority={true}
                            />
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence >
    </>
  );
};

export default Pay;
