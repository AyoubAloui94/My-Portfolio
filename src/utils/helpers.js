export function checkIfImageExists(url, fn) {
  const img = new Image()
  img.src = url

  if (img.complete) {
    fn(true)
    console.log("yup")
  } else {
    img.onload = () => {
      fn(true)
      console.log("yup")
    }
  }

  img.onerror = () => {
    fn(false)
    console.log("nope")
  }
}
