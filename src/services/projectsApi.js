export async function getProjects() {
  try {
    const res = await fetch("https://api.github.com/users/KaneWatson/repos")
    const data = await res.json()

    if (!data) return

    return data
  } catch (error) {
    console.log(error)
  }
}
