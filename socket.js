let server = require('http').Server();
let io = require('socket.io')(server);

server.listen(3000, function () {
    console.log('Sever Started... at port 3000');
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('message', function (socket) {
        io.emit('message', socket);
        console.log('Message: ' + socket.data);
    })

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});