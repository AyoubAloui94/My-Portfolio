export async function getProjects(page) {
  try {
    const allRes = await fetch(`https://api.github.com/users/KaneWatson/repos`)
    const allData = await allRes.json()

    const res = await fetch(`https://api.github.com/users/KaneWatson/repos?per_page=${import.meta.env.VITE_PER_PAGE}&page=${page}`)
    const data = await res.json()

    if (!data || !allData) return

    const count = allData.length
    return { data, allData, count }
  } catch (error) {
    console.log(error)
  }
}
