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
