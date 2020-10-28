const BASE_URL = "https://pixel-fetch-api.herokuapp.com"

function fetchBoard(id) {
  return fetch(`${BASE_URL}/api/v1/canvas/${id}`)
    .then(response => {
      if (!response.ok) {
        return response.json().then(data => {
          throw new Error(data.message)
        })
      }
    
      return response.arrayBuffer()
    })
}
