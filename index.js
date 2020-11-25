const express = require('express')
const app = express()

const http = require('http')
const port = process.env.PORT || 3001
const server = http.createServer(app)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen({ port }, () => {
  console.log(`Server running on port ${port}`)
})