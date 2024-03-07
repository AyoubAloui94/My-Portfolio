import { NavLink } from "react-router-dom"

function NavItem({ children, ...props }) {
  return (
    <NavLink className={({ isActive }) => (isActive ? "underline underline-offset-8 text-gray-600 " : "text-gray-800")} {...props}>
      {children}
    </NavLink>
  )
}

export default NavItem
