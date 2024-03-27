import axios from "axios"

export async function getProjects(page) {
  try {
    const res = await axios.get(`${import.meta.env.VITE_GITHUB_URL}?per_page=${import.meta.env.VITE_PER_PAGE}&page=${page}`, {
      headers: {
        Authorization: `Token ${import.meta.env.VITE_GIT_TOKEN}`
      }
    })

    if (!res) return
    const data = res.data
    return { data }
  } catch (error) {
    console.log(error)
  }
}

export async function getAllProjects() {
  try {
    const res = await axios.get(`${import.meta.env.VITE_GITHUB_URL}`, {
      headers: {
        Authorization: `Token ${import.meta.env.VITE_GIT_TOKEN}`
      }
    })
    console.log(res)
    if (!res) return
    const data = res.data
    console.log(res)
    const count = data.length
    return { data, count }
  } catch (error) {
    console.log(error)
  }
}
