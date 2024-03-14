import { Link } from "react-router-dom"
import { checkIfImageExists } from "../utils/helpers"
import { useCallback, useEffect, useState } from "react"

function PortfolioItem({ project }) {
  const { name, homepage: website, html_url: repoUrl, description } = project
  const [src, setSrc] = useState("")

  const test = useCallback(
    function test(exists) {
      if (exists) setSrc(`/imgs/${name}.webp`)
      else setSrc("/imgs/photo-3.webp")
    },
    [name]
  )

  useEffect(
    function () {
      checkIfImageExists(`/imgs/${name}.webp`, test)
    },
    [name, test]
  )

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-24">
      <div className="md:basis-1/2 ">
        <img src={src} alt={name} className="w-96 h-72 md:h-96 md:w-full object-cover rounded-md shadow-xl" loading="lazy" />
      </div>
      <div className="flex flex-col gap-4 basis-1/2">
        <h1 className="text-xl font-bold">{name}</h1>
        {description ? <p>{description}</p> : <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet, ligula condimentum suscipit lacinia, arcu lacus venenatis massa, eu posuere elit sem id tellus. Suspendisse eleifend velit ac volutpat commodo. Nunc mattis mauris tristique ligula posuere, sit amet vestibulum ex condimentum. Maecenas iaculis quam in arcu sodales, nec rhoncus velit consequat. Donec at ante a neque vulputate finibus et vitae lacus. Sed hendrerit posuere magna sit amet feugiat. Quisque volutpat commodo tellus non hendrerit. Donec molestie justo turpis, quis feugiat tortor molestie sed. Donec ac nulla metus. Fusce sed ornare nulla. Phasellus blandit volutpat nisl, non iaculis nisi sagittis sed. Praesent lobortis neque vel dui tristique lobortis. Aliquam auctor lobortis posuere. Mauris egestas laoreet imperdiet. Donec gravida ex at lacus vehicula, nec luctus lorem iaculis.</p>}
        <div className="flex gap-4 justify-center items-center mt-3">
          <Link className="bg-[#4f46e5] shadow-md hover:bg-[#6159f7] transition duration-300 text-gray-100 w-28 py-2 text-sm font-bold rounded-xl text-center" to={website} target="_blank" rel="noopener noreferrer">
            View App
          </Link>
          <Link className="bg-[#4f46e5] shadow-md hover:bg-[#6159f7] transition duration-300 text-gray-100 w-28 py-2 text-sm font-bold   rounded-xl text-center" to={repoUrl} target="_blank" rel="noopener noreferrer">
            Github Repo
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
