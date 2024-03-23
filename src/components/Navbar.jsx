import NavItem from "./NavItem"

function Navbar() {
  return (
    <div className="flex flex-wrap gap-5 sm:gap-8">
      <NavItem to={"/home"}>Home</NavItem>
      <NavItem to={"/portfolio"}>Portfolio</NavItem>
      <NavItem to={"/about"}>About</NavItem>
      <NavItem to={"/contact"}>Contact</NavItem>
    </div>
  )
}

export default Navbar
