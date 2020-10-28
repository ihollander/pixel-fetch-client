class Scaler {
  constructor() {
    this.element = document.querySelector("#scaler")
    this.setScale()

    window.addEventListener("resize", debounce(this.setScale, 100))
  }

  setScale = () => {
    this.scale = (Math.min(window.innerHeight, window.innerWidth) / 1.25) / 100
    this.element.style.transform = `scale(${this.scale}, ${this.scale})`
  }
}