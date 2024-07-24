import Image from "next/image"
import Link from "next/link"


const Header = () => {
    return (
        <>
            <header className="backdrop-blur-md py-2 px-3">
                <div className="max-w-[1300px] mx-auto">
                    <Link href={'/'}>
                        <Image src='/header_logo.svg' width={50} height={50} alt="header_logo" />
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header