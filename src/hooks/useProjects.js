import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getProjects } from "../services/projectsApi"
import { useSearchParams } from "react-router-dom"

export function useProjects() {
  const queryClient = useQueryClient()
  const [searchParams] = useSearchParams()
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"))

  const {
    data: { data: projects, count, allData: allProjects } = {},
    isLoading,
    error
  } = useQuery({
    queryKey: ["projects", page],
    queryFn: () => getProjects(page)
  })

  const pageCount = Math.ceil(count / import.meta.env.VITE_PAGE_NUM)

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["projects", page + 1],
      queryFn: () => getProjects(page + 1)
    })
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["projects", page - 1],
      queryFn: () => getProjects(page - 1)
    })

  const featuredProjects = allProjects?.filter(proj => proj.id === 761037894 || proj.id === 718243904 || proj.id === 681357811 || proj.id === 713639474)

  return { projects, featuredProjects, isLoading, error, count }
}
