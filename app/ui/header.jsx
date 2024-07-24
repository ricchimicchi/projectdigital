import Image from "next/image"
import Link from "next/link"



const Header = () => {
    return (
        <>
            <header className="backdrop-blur-md py-2 px-3">
                <div className="max-w-[1300px] mx-auto flex items-center justify-between">
                    <Link href={'/'}>
                        <Image src='/header_logo.svg' width={50} height={50} alt="header_logo" />
                    </Link>
                    <div className="flex items-center gap-12">
                        <Link className="text-white" href={'/courses'}>
                        Courses
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header