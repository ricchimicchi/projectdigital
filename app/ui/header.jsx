'use client'
import Image from "next/image"
import Link from "next/link"
import { LuBookMarked } from "react-icons/lu";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Header = () => {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }


    return (
        <>
            <header className="backdrop-blur-3xl py-1 1xl:h-16 2xl:px-2 fixed top-0 inset-x-0 w-full z-[9999999]">
                <div className="max-w-[1100px] mx-auto flex items-center justify-between 1xl:-mt-1">
                    <Link href={'/'} className="-ml-4 1xl:-ml-3">
                        {
                            theme === 'dark' ? <Image src='/logo_white.svg' width={60} height={60} alt="header_logo" className="pointer-events-none" /> : <Image src='/logo_black.svg' width={60} height={60} alt="header_logo" className="pointer-events-none" />
                        }
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link href={'/courses'} className="uppercase tracking-normal dark:text-white text-sm flex items-center gap-1.5 px-3 py-1.5 dark:bg-white/10 bg-black/5 font-bold rounded-full">
                            courses <LuBookMarked className="font-extrabold" />
                        </Link>

                        <button
                            className="cursor-pointer !border-none !outline-none"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            {theme === "light" ? (
                                <span>
                                    <IoMoon className="" size={21} />
                                </span>
                            ) : (
                                <span>
                                    <IoSunny size={21} />
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header