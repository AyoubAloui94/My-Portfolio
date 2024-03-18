export async function getProjects(page) {
  try {
    const res = await fetch(`https://api.github.com/users/KaneWatson/repos?per_page=${import.meta.env.VITE_PER_PAGE}&page=${page}`)
    const data = await res.json()

    if (!data) return

    return { data }
  } catch (error) {
    console.log(error)
  }
}

export async function getAllProjects() {
  try {
    const res = await fetch(`https://api.github.com/users/KaneWatson/repos`)
    const data = await res.json()

    if (!data) return

    const count = data.length
    return { data, count }
  } catch (error) {
    console.log(error)
  }
}
