const express = require('express')
const cors = require('cors')
const app = express()
 
app.use(cors())
 
const { startFetchingData, myCache } = require('./dataService/fetchData')

const http = require('http')
const port = process.env.PORT || 3001
const server = http.createServer(app)

app.use(express.static('./build'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/jackets', (req, res) => {
  res.send(myCache.get('jackets'))
})

app.get('/shirts', (req, res) => {
  res.send(myCache.get('shirts'))
})

app.get('/accessories', (req, res) => {
  res.send(myCache.get('accessories'))
})

app.get('/products', (req, res) => {
  res.send(myCache.get('products'))
})

startServer = async () => {
  await startFetchingData()
  server.listen({ port }, () => {
    console.log(`Server running on port ${port}`)
  })
}

startServer()

