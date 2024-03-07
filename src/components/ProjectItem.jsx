function ProjectItem({ item }) {
  const { title, description, image } = item

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-24">
      <div className="md:basis-1/2">
        <img src={image} alt={title} className="w-96 h-72 md:h-96 md:w-full object-cover rounded-md" loading="lazy" />
      </div>
      <div className="flex flex-col gap-4 basis-1/2">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  )
}

export default ProjectItem
