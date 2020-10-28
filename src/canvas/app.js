class App {
  constructor() {
    this.canvas = new Canvas({ onMouseMove: this.handleCanvasMouseMove })
    this.scaler = new Scaler()
    
    this.coords = document.querySelector("#coords")

    this.boardId = new URLSearchParams(window.location.search).get("canvas")
  }

  init() {
    if (this.boardId) {
      this.fillCanvas()
      this.subscribeToBoardChannel()
    }
  }

  handleCanvasMouseMove = ({ x, y }) => {
    this.coords.textContent = `X: ${x} | Y: ${y}`
  }

  fillCanvas() {
    fetchBoard(this.boardId)
      .then(buffer => this.canvas.drawBoard(buffer))
      .catch(console.error)
  }

  subscribeToBoardChannel() {
    createBoardSubscription(this.boardId, {
      onConnected: () => console.log("web socket connected"),
      onDisconnected: () => console.log("web socket disconnected"),
      onRejected: () => console.log("web socket rejected"),
      onReceived: ({ coords, color }) => {
        console.log("web socket data received", { coords, color })
        this.canvas.drawPixel(coords, color)
      },
    })
  }
  
}