import PortfolioItem from "./PortfolioItem"
import { useProjects } from "../hooks/useProjects"
import Spinner from "./Spinner"
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import Pagination from "./Pagination"
import { Helmet } from "react-helmet-async"

function PortfolioProjects({ isHomePage = false }) {
  const { projects, isLoading, count, featuredProjects, error } = useProjects()
  console.log(projects)

  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"))
  const displayProjects = isHomePage ? featuredProjects : projects

  useEffect(
    function () {
      if (!isHomePage) {
        if (count && Math.ceil(count / import.meta.env.VITE_PER_PAGE) < currentPage && currentPage > 1) {
          searchParams.set("page", currentPage - 1)
          setSearchParams(searchParams)
        } else return
      }
    },
    [count, currentPage, searchParams, setSearchParams, isHomePage]
  )

  if (isLoading)
    return (
      <div className="flex flex-grow flex-col">
        <Spinner />
      </div>
    )

  if (error)
    return (
      <>
        {isHomePage ? null : (
          <>
            <div className="flex flex-grow flex-col justify-center items-center">
              <div className="text-lg text-center border-red-700 border-2 text-red-700 font-semibold py-3 px-4 rounded-md mx-8">
                <p>Unable to fetch projects :( please check your internet and try again later</p>
                <p className="italic text-sm font-normal">{error}</p>
              </div>
            </div>
          </>
        )}
      </>
    )

  return (
    <>
      {!isHomePage && (
        <Helmet prioritizeSeoTags>
          <meta charSet="utf-8" />
          <title>alouiayoub.com | My Portfolio</title>
          <meta name="description" content="Welcome to my portfolio page! This is a non exhaustive list of some of the projects I had fun building. From simple apps that took a day or an afternoon to build to some pretty complex apps that took a lot of research, time and documentation to build." />
          <link rel="canonical" href="https://alouiayoub.com/portfolio" />
        </Helmet>
      )}
      <h1 className="text-2xl text-center md:text-start md:text-3xl font-bold mb-8">{isHomePage ? " Featured Projects" : "Projects"}</h1>

      {!displayProjects.length ? (
        <div className="flex flex-grow flex-col"></div>
      ) : (
        <div className="flex flex-col gap-10 mb-8">
          {displayProjects.map((project, index) => (
            <PortfolioItem key={project.id} project={project} projectIndex={index} />
          ))}
        </div>
      )}
      {isHomePage ? null : count > import.meta.env.VITE_PER_PAGE ? <Pagination count={count} /> : null}
    </>
  )
}

export default PortfolioProjects
