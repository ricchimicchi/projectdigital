import { Audiowide, Syne } from "next/font/google";
import Link from "next/link";

const anton = Audiowide({ subsets: ["latin"], weight: ['400'] });
const syne = Syne({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800'] });

const Privacy = () => {
    return (
        <div className="mt-20 h-screen">
            <div className="max-w-[1108px] mx-auto px-2">
                <div>
                    <h1 className={`${anton.className} uppercase mt-3 1xl:mt-1.5 text-center !leading-[52px] 1xl:!leading-[31px] headline text-5xl 1xl:text-3xl font-bold text-white dark:block hidden`}>{`Privacy Policy`}</h1>
                    <h1 className={`${anton.className} uppercase mt-3 1xl:mt-1.5 text-center !leading-[52px] 1xl:!leading-[31px] text-5xl 1xl:text-3xl font-bold text-black dark:hidden`}>{`Privacy Policy`}</h1>
                </div>
                <div className="mt-6 max-w-[780px] mx-auto">
                    <h3 className={`${anton.className} uppercase mt-3 1xl:mt-1.5 text-center !leading-[52px] 1xl:!leading-[31px] text-xl 1xl:text-lg font-bold`}>{`Your Information's Security`}</h3>
                    <p className="dark:text-white/60 font-medium text-sm text-center -mt-2 1xl:mt-0.5">At danielautomation.com, protecting your personal information is our priority. We do not collect any personal information while you use our website. We do not have systems that require usernames, passwords, or other personal data.</p>
                </div>
                <div className="mt-6 max-w-[780px] mx-auto">
                    <h3 className={`${anton.className} uppercase mt-3 1xl:mt-1.5 text-center !leading-[52px] 1xl:!leading-[31px] text-xl 1xl:text-lg font-bold`}>{`Use of Information`}</h3>
                    <p className="dark:text-white/60 font-medium text-sm text-center -mt-2 1xl:mt-0.5">When you use our website, we collect some general data solely to manage the site effectively and provide you with better service. This data does not include personal information and is used only to monitor site performance.</p>
                </div>
                <div className="mt-6 max-w-[780px] mx-auto">
                    <h3 className={`${anton.className} uppercase mt-3 1xl:mt-1.5 text-center !leading-[52px] 1xl:!leading-[31px] text-xl 1xl:text-lg font-bold`}>{`Information Sharing`}</h3>
                    <p className="dark:text-white/60 font-medium text-sm text-center -mt-2 1xl:mt-0.5">Since the data we collect does not include personal information, we do not share it with third parties. Your information is securely protected and used only for the purposes stated.</p>
                </div>
                <div className="mt-6 max-w-[780px] mx-auto">
                    <h3 className={`${anton.className} uppercase mt-3 1xl:mt-1.5 text-center !leading-[52px] 1xl:!leading-[31px] text-xl 1xl:text-lg font-bold`}>{`Contact and Support`}</h3>
                    <p className="dark:text-white/60 font-medium text-sm text-center -mt-2 1xl:mt-0.5">For any questions about our privacy policy or if you need support, please contact us <Link href={'https://t.me/daniellsupport'} className="underline">here</Link> We are here to assist you.</p>
                </div>
            </div>
        </div>
    )
}

export default Privacy