export function checkIfImageExists(url, fn) {
  const img = new Image()
  img.src = url

  if (img.complete) {
    fn(true)
  } else {
    img.onload = () => {
      fn(true)
    }
  }

  img.onerror = () => {
    fn(false)
  }
}

export function formatName(name) {
  return name
    .split("-")
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ")
}
