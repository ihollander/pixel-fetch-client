const WS_BASE_URL = "wss://pixel-fetch-api.herokuapp.com"

const connection = ActionCable.createConsumer(`${WS_BASE_URL}/cable`)

function createBoardSubscription(id, { 
  onConnected, 
  onDisconnected, 
  onRejected, 
  onReceived 
}) {
  connection.subscriptions.create({
    channel: "CanvasChannel",
    id
  },
  {
    connected: onConnected,
    disconnected: onDisconnected,
    rejected: onRejected,
    received: onReceived
  })
}
  