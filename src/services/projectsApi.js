export async function getProjects(page) {
  try {
    const countRes = await fetch(`https://api.github.com/users/KaneWatson/repos`)
    const countData = await countRes.json()

    const res = await fetch(`https://api.github.com/users/KaneWatson/repos?per_page=${import.meta.env.VITE_PER_PAGE}&page=${page}`)
    const data = await res.json()

    if (!data) return

    const count = countData.length
    return { data, count }
  } catch (error) {
    console.log(error)
  }
}
