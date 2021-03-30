module.exports = {
    on_connect: (io) => {
        //Listening for connections
        io.on('connection', function (socket) {
            console.log("Socket connected...")
            //listening for messages.
            socket.on('fromClient', (msg) => {
                console.log(msg)
            })
            //Emitting message to clients
            socket.emit("fromServer", "Message from server....")
        })
    }
}