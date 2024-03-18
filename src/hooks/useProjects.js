import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getAllProjects, getProjects } from "../services/projectsApi"
import { useSearchParams } from "react-router-dom"

export function useProjects() {
  const queryClient = useQueryClient()
  const [searchParams] = useSearchParams()
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"))

  const {
    data: { data: projects = [] } = {},
    isLoading: isLoading1,
    error1
  } = useQuery({
    queryKey: ["projects", page],
    queryFn: () => getProjects(page),
    staleTime: 120000
  })

  const {
    data: { data: allProjects = [] } = {},
    count,
    isLoading: isLoading2,
    error2
  } = useQuery({
    queryKey: ["allProjects"],
    queryFn: () => getAllProjects(),
    staleTime: 120000
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

  const featuredProjects = allProjects?.length ? allProjects?.filter(proj => proj.id === 761037894 || proj.id === 718243904 || proj.id === 681357811 || proj.id === 713639474) : []

  const isLoading = isLoading1 || isLoading2

  return { projects, featuredProjects, isLoading, error1, error2, count }
}
