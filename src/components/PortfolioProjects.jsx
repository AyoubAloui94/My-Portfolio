import PortfolioItem from "./PortfolioItem"
import { useProjects } from "../hooks/useProjects"
import Spinner from "./Spinner"
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import Pagination from "./Pagination"

function PortfolioProjects({ isHomePage = false }) {
  const { projects, isLoading, count } = useProjects()
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"))

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

  if (isLoading) return <Spinner />

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">{isHomePage ? " Featured Projects" : "Projects"}</h1>

      {!projects.length ? null : (
        <div className="flex flex-col gap-8 mb-8">
          {projects.map(project => (
            <PortfolioItem key={project.id} project={project} />
          ))}
        </div>
      )}
      {isHomePage ? null : <Pagination count={count} />}
    </div>
  )
}

export default PortfolioProjects
