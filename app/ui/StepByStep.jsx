import Image from "next/image"


const StepByStep = () => {
    return (
        <div className="relative mt-20">
            <div className="mask-l dark:mask-t pointer-events-none h-[120px] relative z-50 w-full select-none backdrop-blur-[1px] transition-all"></div>
            <Image
                src='/back-hero.svg'
                className="absolute pointer-events-none inset-0 1xl:pt-12 object-cover 2xl:h-[1000px] 2xl:-mt-8 hidden dark:block opacity-40 2xl:opacity-80"
                width={10000}
                height={2000}
                alt="back"
                priority={true}
            />
            <Image
                src='/back-hero-light.svg'
                className="absolute pointer-events-none inset-0 1xl:pt-12 object-cover 2xl:h-[1000px] 2xl:-mt-8 block dark:hidden"
                width={10000}
                height={2000}
                alt="back"
                priority={true}
            />
        </div>
    )
}

export default StepByStep