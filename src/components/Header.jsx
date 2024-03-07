import Logo from "./Logo"
import Navbar from "./Navbar"

function Header() {
  return (
    <header className="flex items-center justify-between my-8 flex-wrap">
      <Logo />
      <Navbar />
    </header>
  )
}

export default Header
