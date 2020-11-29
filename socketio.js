const server = require('./server')
const socketio = require("socket.io")

module.export = socketio(server);