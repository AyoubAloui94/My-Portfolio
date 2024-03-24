import { Link } from "react-router-dom"

function Logo() {
  return (
    <Link to={"/home"}>
      <h1 className="font-bold text-2xl text-gray-700 uppercase">alouiayoub.com</h1>
    </Link>
  )
}

export default Logo
