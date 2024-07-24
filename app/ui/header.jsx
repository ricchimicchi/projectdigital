'use client'
import Image from "next/image"
import Link from "next/link"
import { FaTelegramPlane } from "react-icons/fa";
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
            <header className="backdrop-blur-md py-2 px-3">
                <div className="max-w-[1300px] mx-auto flex items-center justify-between">
                    <Link href={'/'}>
                        {
                            theme === 'dark' ? <Image src='/header_logo.svg' width={50} height={50} alt="header_logo" /> : <Image src='/header_logo_b.svg' width={50} height={50} alt="header_logo" />
                        }
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link href={'/'} className="dark:text-white flex items-center gap-2 px-3 py-1 dark:bg-white/15 bg-black/15 font-medium rounded-full">
                            Join <FaTelegramPlane />
                        </Link>

                        <button
                            className="cursor-pointer"
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