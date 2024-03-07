import projects from "../data/projects.json"
import ProjectItem from "./ProjectItem"

function Projects() {
  return (
    <div className="mt-10 px-4">
      <h1 className="mb-8 text-3xl font-bold">Projects</h1>
      <div className="flex flex-col gap-8 mb-8">
        {projects.map(project => (
          <ProjectItem key={project.id} item={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
