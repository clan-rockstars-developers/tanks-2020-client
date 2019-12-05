const WebSocketClient = require('websocket').client

const socket = new WebSocketClient()

socket.on('connect', function(connection){
  console.log('Connected')
  connection.sendUTF('Привет')
  
  connection.on('message', function(message) {
    if (message.type === 'utf8') {
      console.log("Server: '" + message.utf8Data + "'")
    }
  })
  connection.on('close', function(){
    console.log('Disconnected')
  })
})

socket.on('event', function(data){
  console.log('Event')
  console.log(JSON.stringify(data))
})



socket.connect('ws://localhost:9001')