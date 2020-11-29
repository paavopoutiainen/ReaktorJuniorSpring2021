const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const { startFetchingData, myCache } = require('./dataService/fetchData')
 
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
}

startServer()

module.export = server