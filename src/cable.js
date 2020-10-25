const WS_BASE_URL = "ws://pixel-fetch-api.herokuapp.com"
// const WS_BASE_URL = "ws://localhost:3000"

const connection = ActionCable.createConsumer(`${WS_BASE_URL}/cable`)

function createBoardSubscription(id, { 
  onConnected, 
  onDisconnected, 
  onRejected, 
  onReceived 
}) {
  connection.subscriptions.create({
    channel: "BoardChannel",
    id
  },
  {
    connected: onConnected,
    disconnected: onDisconnected,
    rejected: onRejected,
    received: onReceived
  })
}
  