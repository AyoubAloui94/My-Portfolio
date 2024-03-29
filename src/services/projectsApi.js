import axios from "axios"

export async function getProjects(page) {
  try {
    const res = await axios.get(`${import.meta.env.VITE_GITHUB_URL}?per_page=${import.meta.env.VITE_PER_PAGE}&page=${page}`, {
      headers: {
        Authorization: `Token ${import.meta.env.VITE_GIT_TOKEN}`
      }
    })

    if (!res) throw new Error("Unable to fetch")
    const data = res.data
    return { data }
  } catch (error) {
    console.log(error)
    return { error }
  }
}

export async function getAllProjects() {
  try {
    const res = await axios.get(`${import.meta.env.VITE_GITHUB_URL}`, {
      headers: {
        Authorization: `Token ${import.meta.env.VITE_GIT_TOKEN}`
      }
    })

    if (!res) throw new Error("Unable to fetch")
    const data = res.data

    const count = data.length
    return { data, count }
  } catch (error) {
    console.log(error)
    return { error }
  }
}
