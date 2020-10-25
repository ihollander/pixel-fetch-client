function debounce(fn, wait = 250) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(function() {
      timeoutId = null
      fn(...args)
    }, wait)
  }
}

function getMouseCoordinates(canvas, { clientX, clientY }) {
  const { top, left, width, height } = canvas.getBoundingClientRect()
  const scaleX = canvas.width / width
  const scaleY = canvas.height / height

  return {
    x: Math.floor((clientX - left) * scaleX),   // scale mouse coordinates after they have
    y: Math.floor((clientY - top) * scaleY)     // been adjusted to be relative to element
  }
}