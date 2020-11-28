const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const { startFetchingData, myCache } = require('./dataService/fetchData')
 
app.use(cors())
 
const http = require('http')
const port = process.env.PORT || 3001
const server = http.createServer(app)

app.use(express.static(path.join(__dirname, '/build')))

app.get('/products', (req, res) => {
  res.send(myCache.get('products'))
})

app.get('/*', (req, res) => {
  console.log("hello")
    res.sendFile(__dirname + '/build/index.html')
})

startServer = async () => {
  await startFetchingData()
  server.listen({ port }, () => {
    console.log(`Server running on port ${port}`)
  })
}

startServer()

