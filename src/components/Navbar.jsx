import NavItem from "./NavItem"

function Navbar() {
  return (
    <div className="flex flex-wrap gap-10">
      <NavItem to={"/home"}>Home</NavItem>
      <NavItem to={"/portfolio"}>Portfolio</NavItem>
      <NavItem to={"/contact"}>Contact</NavItem>
    </div>
  )
}

export default Navbar
