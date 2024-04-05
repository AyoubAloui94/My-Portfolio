import { Link } from "react-router-dom"
import SocialIcons from "./SocialIcons"

function Footer() {
  return (
    <footer className=" pt-8 pb-12 px-6 sm:px-0 bg-black mt-10 text-stone-50">
      <div className="flex flex-col sm:flex-row gap-6 sm:justify-evenly sm:items-end">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold">Contact</h1>
          <span>contact@alouiayoub.com</span>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold">Socials</h1>
          <SocialIcons dimensions={"24"} classNames={"flex gap-4 "} fillColor={"#fff"} />
        </div>
        <span className="uppercase text-xs font-semibold">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Link className="hover:text-sky-500 transition-colors duration-300" to={"/home"}>
            web & it genius
          </Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer
