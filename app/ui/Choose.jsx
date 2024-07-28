import { Audiowide, Syne } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbUsersGroup } from "react-icons/tb";




const anton = Audiowide({ subsets: ["latin"], weight: ['400'] });
const syne = Syne({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800'] });

const Choose = () => {
    return (
        <div className="1xl:-mt-14 mb-44 px-2 overflow-hidden relative">
            <div>
                <span className={` dark:text-white/50 text-sm font-bold block text-center`}>
                    {`YOU MUST CHOOSE`}
                </span>
                <h1 className={`${anton.className} mt-3 1xl:mt-1.5 text-center !leading-[31px] headline text-5xl 1xl:text-3xl font-bold text-white dark:block hidden`}>{`TWO PATHS LIE BEFORE YOU`}</h1>
                <h1 className={`${anton.className} mt-3 1xl:mt-1.5 text-center !leading-[31px] text-5xl 1xl:text-3xl font-bold text-black dark:hidden`}>{`TWO PATHS LIE BEFORE YOU`}</h1>
                <div className="mt-7 flex items-center justify-center relative z-50">
                    <video src="/wkp/matrix_main_hero.mp4" className="relative pointer-events-none z-[99999] max-w-[871px] min-h-[340px] object-cover w-full rounded-2xl border-[1px] border-[#e6e3e3] dark:border-opacity-40" autoPlay loop muted playsInline></video>
                </div>
            </div>
            <Image
                src='/hero-step/ellipse_1.svg'
                className="pointer-events-none dark:opacity-20 opacity-100 -mt-96 ml-80 4xl:ml-40 2xl:ml-6 rotate-[34deg] relative -z-10"
                width={500}
                height={500}
                alt="back"
                priority={true}
            />
            <div className="flex items-center justify-center -mt-36 1xl:-mt-20 relative w-full">
                <Image
                    src='/wkp/arw.svg'
                    className="pointer-events-none dark:opacity-40 opacity-100 -mt-2 4xl:hidden"
                    width={640}
                    height={400}
                    alt="back"
                    priority={true}
                />
            </div>
            <div className="flex items-center justify-between w-full max-w-[870px] mx-auto -mt-7 4xl:hidden pb-32">
                <div>
                    <span className={` dark:text-white/50 text-sm font-medium block uppercase tracking-wider text-center`}>
                        {`fail to achieve`}
                    </span>
                    <h1 className={`${syne.className} uppercase mt-2 text-center !leading-[31px] headline text-3xl 1xl:text-2xl font-bold text-white dark:block hidden`}>{`Stay stagnant`}</h1>
                    <h1 className={`${syne.className} uppercase mt-2 text-center !leading-[31px] text-3xl 1xl:text-2xl font-bold text-black dark:hidden`}>{`Stay stagnant`}</h1>
                    <p className="max-w-[300px] text-center text-sm font-medium dark:text-white/60 leading-5 mt-2">Follow the traditional path, working for years in a job you don’t enjoy, for a boss you don’t like, earning a mediocre salary, just so you can retire in 50 years.</p>
                    <div className="px-5 py-3 rounded-sm bg-[#09131c] text-white text-sm font-medium text-center cursor-pointer mt-3.5 max-w-[200px] mx-auto">
                        Remain an Employee
                    </div>
                </div>
                <div className="w-20 h-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 82 82" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                        <circle opacity="0.1" cx="41" cy="41" r="40.25" stroke="url(#paint0_linear_829_401)" strokeWidth="1.5"></circle>
                        <path opacity="0.15" d="M32.1559 33.8879L34.0451 45.3368H34.1942L39.869 33.8879H42.7667L35.2241 48.4333H31.9712L29.2653 33.8879H32.1559ZM51.9055 37.9575C51.9245 37.2994 51.7232 36.7951 51.3018 36.4447C50.8852 36.0943 50.2862 35.9191 49.505 35.9191C48.9557 35.9191 48.4704 36.002 48.049 36.1677C47.6323 36.3287 47.2962 36.5536 47.0405 36.8424C46.7848 37.1265 46.6262 37.4509 46.5646 37.8155C46.5125 38.1137 46.5386 38.3742 46.6428 38.5967C46.7469 38.8192 46.9055 39.0086 47.1186 39.1649C47.3364 39.3211 47.5826 39.4513 47.8572 39.5555C48.1366 39.6597 48.4207 39.7473 48.7095 39.8183L50.0163 40.1592C50.5372 40.287 51.0343 40.4599 51.5078 40.6777C51.9813 40.8907 52.3909 41.1654 52.7365 41.5015C53.0869 41.833 53.3426 42.2331 53.5036 42.7018C53.6645 43.1706 53.6906 43.7198 53.5817 44.3495C53.4396 45.2018 53.0964 45.9523 52.5518 46.601C52.0121 47.2449 51.3018 47.7492 50.4212 48.1137C49.5452 48.4736 48.5249 48.6535 47.3601 48.6535C46.2332 48.6535 45.2815 48.4783 44.505 48.128C43.7285 47.7728 43.1603 47.2591 42.8004 46.5868C42.4453 45.9144 42.3317 45.0976 42.4595 44.1365H45.0518C44.9998 44.6431 45.0826 45.0645 45.3004 45.4007C45.523 45.7369 45.8426 45.9878 46.2592 46.1535C46.6759 46.3192 47.1589 46.4021 47.7081 46.4021C48.281 46.4021 48.7995 46.3169 49.2635 46.1464C49.7275 45.9712 50.1063 45.7298 50.3999 45.422C50.6982 45.1095 50.8804 44.7449 50.9467 44.3282C51.013 43.9542 50.9586 43.6417 50.7834 43.3907C50.6082 43.1398 50.3359 42.9315 49.9666 42.7657C49.602 42.5953 49.1664 42.4438 48.6598 42.3112L47.0831 41.8851C45.942 41.5726 45.0755 41.1038 44.4837 40.4788C43.8965 39.8538 43.6882 39.0205 43.8587 37.9788C44.0007 37.1171 44.3582 36.3666 44.9311 35.7274C45.504 35.0834 46.2214 34.5839 47.0831 34.2288C47.9448 33.869 48.8871 33.689 49.9098 33.689C50.942 33.689 51.8156 33.869 52.5305 34.2288C53.2502 34.5887 53.7758 35.0905 54.1072 35.7345C54.4434 36.3737 54.5547 37.1147 54.4411 37.9575H51.9055Z" fill="currentColor"></path>
                        <defs>
                            <linearGradient id="paint0_linear_829_401" x1="41" y1="4.1" x2="41" y2="82" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" stopOpacity="0"></stop>
                                <stop offset="1" stopColor="white"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="-mr-1">
                    <span className="bg-gradient-to-r from-[#ffcf23] to-[#b07c27] bg-clip-text text-transparent font-medium text-sm text-center block">PAY</span>
                    <div className="flex items-start gap-1 justify-center">
                        <span className="font-bold text-sm block mt-3 bg-gradient-to-r from-[#ffcf23] to-[#b07c27] bg-clip-text text-transparent">$</span>
                        <h1 className={`${anton.className} uppercase mt-2 text-center !leading-[31px] text-3xl 1xl:text-2xl font-bold bg-gradient-to-r from-[#ffcf23] to-[#b07c27] bg-clip-text text-transparent`}>{`24.99`}</h1>
                    </div>
                    <p className="max-w-[300px] text-center text-sm font-medium dark:text-white/60 leading-5 mt-2">Immediately tap into a reservoir of cutting-edge knowledge, positioning yourself at the vanguard of innovation and fast-tracking your path to wealth.</p>
                    <div className="relative w-full mt-3">
                        <Link href="/" className={`${anton.className} dark:bg-[#41391a] bg-[#7d6b2c3c] 1xl:rounded-xl rounded-sm border-[3px] border-[#ffca25] px-3 py-2 w-full flex items-center justify-center jn_btn`}>
                            <div className="flex items-center gap-2">JOIN THE OUR WORLD <BiMoneyWithdraw size={21} className="mb-0.5 1xl:mb-[1px]" /></div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden 4xl:flex px-2.5 relative h-full w-full mt-40 pb-32">
                <Image
                    src='/wkp/arw_res.svg'
                    className="pointer-events-none dark:opacity-40 opacity-100 4xl:block hidden -ml-6"
                    width={40}
                    height={300}
                    alt="back"
                    priority={true}
                />
                <div>
                    <div>
                        <span className={` dark:text-white/50 text-sm font-medium block uppercase tracking-wider text-start`}>
                            {`fail to achieve`}
                        </span>
                        <h1 className={`${syne.className} uppercase mt-2 text-start !leading-[31px] headline text-3xl 1xl:text-2xl font-bold text-white dark:block hidden`}>{`Stay stagnant`}</h1>
                        <h1 className={`${syne.className} uppercase mt-2 text-start !leading-[31px] text-3xl 1xl:text-2xl font-bold text-black dark:hidden`}>{`Stay stagnant`}</h1>
                        <p className="max-w-[300px] text-start text-sm font-medium dark:text-white/60 leading-5 mt-2">Follow the traditional path, working for years in a job you don’t enjoy, for a boss you don’t like, earning a mediocre salary, just so you can retire in 50 years.</p>
                        <div className="px-5 py-3 rounded-sm bg-[#09131c] text-white text-sm font-medium text-center cursor-pointer mt-3.5 max-w-[200px] flex items-start justify-center">
                            Remain an Employee
                        </div>
                    </div>
                    <div className="mt-8">
                        <span className="bg-gradient-to-r from-[#ffcf23] to-[#b07c27] bg-clip-text text-transparent font-medium text-sm text-start block">PAY</span>
                        <div className="flex items-start gap-1 justify-start">
                            <span className="font-bold text-sm block mt-3 bg-gradient-to-r from-[#ffcf23] to-[#b07c27] bg-clip-text text-transparent">$</span>
                            <h1 className={`${anton.className} uppercase mt-2 text-start !leading-[31px] text-3xl 1xl:text-2xl font-bold bg-gradient-to-r from-[#ffcf23] to-[#b07c27] bg-clip-text text-transparent`}>{`24.99`}</h1>
                        </div>
                        <p className="max-w-[300px] text-start text-sm font-medium dark:text-white/60 leading-5 mt-2">Immediately tap into a reservoir of cutting-edge knowledge, positioning yourself at the vanguard of innovation and fast-tracking your path to wealth.</p>
                        <div className="relative w-full mt-3">
                            <Link href="/" className={`${anton.className} dark:bg-[#41391a] bg-[#7d6b2c3c] 1xl:rounded-xl rounded-sm border-[3px] border-[#ffca25] px-3 py-2 w-full flex items-center justify-center jn_btn`}>
                                <div className="flex items-center gap-2">JOIN THE OUR WORLD <BiMoneyWithdraw size={21} className="mb-0.5 1xl:mb-[1px]" /></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Choose