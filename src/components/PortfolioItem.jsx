import { Link } from "react-router-dom"
import { formatName } from "../utils/helpers"

function PortfolioItem({ project, projectIndex }) {
  const { name, homepage: website, html_url: repoUrl, description } = project
  // const [src, setSrc] = useState("")

  // const test = useCallback(
  //   function test(exists) {
  //     if (exists) setSrc(`/imgs/${name}.webp`)
  //     else setSrc("/imgs/photo-3.webp")
  //   },
  //   [name]
  // )

  // useEffect(
  //   function () {
  //     checkIfImageExists(`/imgs/${name}.webp`, test)
  //   },
  //   [name, test]
  // )

  //formatName(name)

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-24">
      <div className="md:basis-1/2 ">
        <img src={`/imgs/${name}.webp`} alt={name} className="w-96 h-72 md:h-96 md:w-full object-cover rounded-md shadow-xl" loading={projectIndex === 0 ? "eager" : "lazy"} />
      </div>
      <div className="flex flex-col gap-4 basis-1/2">
        <h1 className="text-xl font-bold">{formatName(name)}</h1>
        {description ? <p>{description}</p> : <p>No description yet.</p>}
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
