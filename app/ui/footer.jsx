'use client'
import { useTheme } from "next-themes";
import Image from "next/image"
import Link from "next/link"




const Footer = () => {

    const { theme, setTheme } = useTheme();

    return (
        <footer className="mt-32 1xl:mt-8">
            <div className="max-w-[1100px] mx-auto py-16 flex items-center justify-between gap-2 2xl:flex-col 2xl:items-center px-2">
                <Link href={'/'} className="-ml-4 1xl:-ml-3">
                    {
                        theme === 'dark' ? <Image src='/logo_white.svg' width={60} height={60} alt="header_logo" className="pointer-events-none" /> : <Image src='/logo_black.svg' width={60} height={60} alt="header_logo" className="pointer-events-none" />
                    }
                </Link>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold tracking-tight">All Right Reserved. 2023 - 24</span>
                    <span>|</span>
                    <Link href={'/privacy'} className="text-sm font-semibold tracking-tight">
                        Privacy
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer