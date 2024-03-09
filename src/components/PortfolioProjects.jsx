import PortfolioItem from "./PortfolioItem"
import { useProjects } from "../hooks/useProjects"
import Spinner from "./Spinner"

function PortfolioProjects() {
  const { projects, isLoading } = useProjects()

  if (isLoading) return <Spinner />

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      {!projects.length ? null : (
        <div className="flex flex-col gap-8 mb-8">
          {projects.map(project => (
            <PortfolioItem key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}

export default PortfolioProjects
