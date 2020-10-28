class Canvas {
  constructor(props) {
    this.props = props
    this.element = document.querySelector("canvas")
    this.width = 100
    this.height = 100

    this.element.width = this.width
    this.element.height = this.height

    this.ctx = this.element.getContext("2d")
    this.ctx.imageSmoothingEnabled = false

    this.element.addEventListener("mousemove", this.handleMouseMove)
  }

  handleMouseMove = ({ clientX, clientY }) => {
    const { x, y } = getMouseCoordinates(this.element, { clientX, clientY })
    this.props.onMouseMove({ x, y })
  }

  drawBoard = (buffer) => {
    const data = new Uint8ClampedArray(buffer)
    const image = new ImageData(data, this.width, this.height)
    this.ctx.putImageData(image, 0, 0)
  }

  drawPixel = ([x, y], color) => {
    const data = new Uint8ClampedArray(color)
    const image = new ImageData(data, 1, 1)
    this.ctx.putImageData(image, x, y)
  }

}
