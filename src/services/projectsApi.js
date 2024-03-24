import axios from "axios"

export async function getProjects(page) {
  try {
    const res = await axios.get(`https://api.github.com/users/KaneWatson/repos?per_page=${import.meta.env.VITE_PER_PAGE}&page=${page}`)

    if (!res) return
    const data = res.data
    return { data }
  } catch (error) {
    console.log(error)
  }
}

export async function getAllProjects() {
  try {
    const res = await axios.get(`https://api.github.com/users/KaneWatson/repos`)

    if (!res) return
    const data = res.data
    const count = data.length
    return { data, count }
  } catch (error) {
    console.log(error)
  }
}
