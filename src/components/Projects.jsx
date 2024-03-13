import projects from "../data/projects.json"
import PortfolioProjects from "./PortfolioProjects"
import ProjectItem from "./ProjectItem"

function Projects() {
  return (
    <div className="mt-10 px-4">
      <PortfolioProjects isHomePage={true} />
    </div>
  )
}

export default Projects
