import { Audiowide, Syne } from "next/font/google";
import { FaCheck } from "react-icons/fa6";

const anton = Audiowide({ subsets: ["latin"], weight: ['400'] });
const syne = Syne({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800'] });

export const metadata = {
  title: "Payment",
  description: "Streamline video editing, scheduling, and analytics with our comprehensive automation strategies. Reduce workload and reach more viewers with advanced techniques.",
};

const Pay = () => {
  return (
    <section className="mt-20 h-screen">
      <div className="max-w-[1115px] mx-auto px-2">
        <div className="grid grid-cols-2 2xl:grid-cols-1 gap-5 mt-32 1xl:mt-14">
          <div>
            <h3 className={`${anton.className} text-3xl 1xl:text-xl 1xl:leading-[26px] uppercase font-semibold`}>Access to professional courses with a one-time payment</h3>
            <ul className='flex items-start gap-2 flex-col 1xl:gap-1 mt-6 1xl:mt-3'>
              <li className='flex items-center gap-2'>
                <FaCheck />
                <span className='text-base tracking-tight 1xl:text-sm font-semibold dark:text-white/60 text-black/70'>Profit without any risk</span>
              </li>
              <li className='flex items-center gap-2'>
                <FaCheck />
                <span className='text-base tracking-tight 1xl:text-sm font-semibold dark:text-white/60 text-black/70'>Escape the boring 9-to-5 routine</span>
              </li>
              <li className='flex items-center gap-2'>
                <FaCheck />
                <span className='text-base tracking-tight 1xl:text-sm font-semibold dark:text-white/60 text-black/70'>Dedicate only 1-2 hours a day</span>
              </li>
              <li className='flex items-center gap-2'>
                <FaCheck />
                <span className='text-base tracking-tight 1xl:text-sm font-semibold dark:text-white/60 text-black/70'>Be location independent</span>
              </li>
              <li className='flex items-center gap-2'>
                <FaCheck />
                <span className='text-base tracking-tight 1xl:text-sm font-semibold dark:text-white/60 text-black/70'>No need for capital or expertise</span>
              </li>
            </ul>
            <div className="w-full h-[1px] dark:bg-white/40 bg-black/10 my-6" />

          </div>
          <div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Pay