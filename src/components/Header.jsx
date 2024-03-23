import { useEffect, useState } from "react"
import Logo from "./Logo"
import Navbar from "./Navbar"

function Header() {
  const [sticky, setSticky] = useState("")

  useEffect(
    function () {
      window.addEventListener("scroll", isSticky)

      return () => {
        window.removeEventListener("scroll", isSticky)
      }
    },
    [sticky]
  )

  function isSticky() {
    const scrollTop = window.scrollY

    const stickyClass = scrollTop >= 100 ? "sticky top-0 bg-gray-50 py-3 z-10 shadow-2xl" : ""
    setSticky(stickyClass)
  }

  return (
    <header className={`flex gap-2 flex-col sm:flex-row items-center sm:justify-between my-4 sm:my-8 px-6 ${sticky}`}>
      <Logo />
      <Navbar />
    </header>
  )
}

export default Header
