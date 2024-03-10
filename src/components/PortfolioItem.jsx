import { Link } from "react-router-dom"
import { checkIfImageExists } from "../utils/helpers"
import { useState } from "react"

function PortfolioItem({ project }) {
  const { name, homepage: website, html_url: repoUrl, description } = project
  const [src, setSrc] = useState("")

  function test(exists) {
    if (exists) setSrc(`/imgs/${name}.png`)
    else setSrc("/imgs/photo-3.webp")
  }

  checkIfImageExists(`/imgs/${name}.png`, test)

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-24">
      <div className="md:basis-1/2">
        <img src={src} alt={name} className="w-96 h-72 md:h-96 md:w-full object-cover rounded-md" loading="lazy" />
      </div>
      <div className="flex flex-col gap-4 basis-1/2">
        <h1 className="text-xl font-bold">{name}</h1>
        {description ? <p>{description}</p> : null}
        <Link to={website} target="_blank" rel="noopener noreferrer">
          View app
        </Link>
        <Link to={repoUrl} target="_blank" rel="noopener noreferrer">
          View project repository
        </Link>
      </div>
    </div>
  )
}

export default PortfolioItem
