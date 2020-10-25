const app = new App()
app.init()

// for (let i = 0; i < 20; i++) {
//   place({ x: i, y: 99, color: "black" })
// }

function place({ x, y, color }) {
  fetch("http://pixel-fetch-api.herokuapp.com/api/v1/canvas/test1", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ x, y, color })
  })
}