import { Link } from "react-router-dom"
import SocialIcons from "./SocialIcons"

function Socials() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-5">
      <h1 className="text-center font-semibold text-lg">Socials</h1>

      <SocialIcons dimensions={"64"} classNames={"flex gap-3 md:gap-10 flex-wrap"} fillColor={"#24292f"} />
    </div>
  )
}

export default Socials
