import React, { useState } from 'react';
import { IoLogoBitcoin, IoClose } from 'react-icons/io5';
import { RiVisaLine } from 'react-icons/ri';
import { BiLogoMastercard } from 'react-icons/bi';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCircleDot } from 'react-icons/fa6';

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

const PaymentOptions = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [blockchain, setBlockchain] = useState('');

  const handleSelect = (id) => {
    setSelectedId(id);
    setPopupOpen(false);
  };

  const handleSubmit = () => {
    setPopupOpen(true);
  };

  return (
    <div>
      <div className="mt-3 grid grid-cols-3 gap-2 1xl:gap-1-1">
        {pytcrs.map((e) => (
          <button
            key={e.id}
            onClick={() => handleSelect(e.id)}
            className={`relative flex items-center gap-1 py-2 px-2 rounded-lg w-full trs_lg outline-none border-[1px] 
            ${selectedId === e.id ? 'text-white cursor-pointer border-white' : 'cursor-pointer border-white/40'}
            `}
          >
            {selectedId === e.id ? (
              <span className="absolute top-4 right-4 text-xl 1xl:text-lg 1xl:top-1.5 1xl:right-1.5 dark:text-white trs_lg">
                {e.img_icc}
              </span>
            ) : (
              <div className="w-5 h-5 rounded-full border-[#ffffff35] border-[1px] absolute top-3 right-4 1xl:top-1.5 1xl:right-1.5"></div>
            )}
            <div className='flex flex-col gap-4 items-start'>
              <span className='text-2xl 1xl:text-lg'>{e.payment_method_img}</span>
              <span>{e.title}</span>
            </div>
          </button>
        ))}
      </div>

      {selectedId === 1 && (
        <div className="mt-4">
          <label htmlFor="blockchain" className="block text-sm font-medium text-gray-700">Select Blockchain:</label>
          <select
            id="blockchain"
            name="blockchain"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={blockchain}
            onChange={(e) => setBlockchain(e.target.value)}
          >
            <option value="">Select a blockchain</option>
            {blockchainOptions.map((option) => (
              <option key={option.id} value={option.name}>{option.name}</option>
            ))}
          </select>
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 dark:bg-white dark:text-black text-white bg-black rounded-lg w-full"
      >
        Continue
      </button>

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
                  <p>{blockchain}</p>
                </div>
              ) : (
                <div className="text-white">
                  <h2 className="text-2xl mb-4">{pytcrs.find(e => e.id === selectedId).title}</h2>
                  <p>Payment details for {pytcrs.find(e => e.id === selectedId).title}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PaymentOptions;
