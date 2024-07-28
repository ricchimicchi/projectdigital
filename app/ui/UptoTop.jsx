"use client"

import { useEffect, useState } from "react"
import { IoIosArrowUp } from "react-icons/io";


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
    }
    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      })
  }

  return (
    <button
      className={`fixed bottom-4 right-4 z-[9999999] rounded-full w-12 h-12 1xl:w-9 1xl:h-9 flex items-center justify-center outline-none transition-opacity duration-200 bg-gradient-to-r from-[#ffcf23] to-[#b07c27] ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <IoIosArrowUp className="text-3xl 1xl:text-xl" />
    </button>
  )
}

export default ScrollToTopButton