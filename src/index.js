console.log("hello from src/index.js!")

const canvas = document.querySelector("canvas")
canvas.addEventListener("click", event => {
  // getMouseCoordinates is defined in ./src/canvas/utils.js
  const coords = getMouseCoordinates(canvas, event)

  console.log("clicked", coords)
})