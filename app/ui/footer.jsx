'use client'
import Link from "next/link"

const Footer = () => {

    return (
        <footer className="mt-32 1xl:mt-8">
            <div className="max-w-[1100px] mx-auto py-16 flex items-center justify-center px-2">
                
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold tracking-tight">All Right Reserved. 2023 - 24</span>
                    <span>|</span>
                    <Link href={'/privacy'} className="text-sm font-semibold tracking-tight underline">
                        Privacy & Policy
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer