const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const { startFetchingData, myCache } = require('./dataService/fetchData')
const socket = require("socket.io")
 
app.use(cors())
 
const port = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, '/build')))

app.get('/products', (req, res) => {
  res.send(myCache.get('products'))
})

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/build/index.html')
})

let server

startServer = async () => {
  await startFetchingData()
  server = app.listen({ port }, () => {
    console.log(`Server running on port ${port}`)
  })
  const io = socket(server, {
    cors: {
      methods: ["GET", "POST"]
    }
  })
  io.on("connection", (socket) => {
    myCache.on("set", (key, value) => {
      if (key === "products") {
        socket.emit("data changed", { products: value })
      }
    })
  })
}

startServer()

module.exports = server