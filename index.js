const express = require('express')
const app = express()
const { startFetchingData } = require('./dataService/fetchData')

const http = require('http')
const port = process.env.PORT || 3001
const server = http.createServer(app)


app.get('/', (req, res) => {
  res.send('Hello World!')
})


startServer = async () => {
  await startFetchingData()
  server.listen({ port }, () => {
    console.log(`Server running on port ${port}`)
  })
}

startServer()

