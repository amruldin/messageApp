const express = require('express');

const app = express();

const server = require('http').createServer(app);

const io = require('socket.io').listen(server);


app.set('view engine', 'ejs');
app.set('views' , 'views');

users = [];

connections = [];

server.listen(process.env.PORT || 3000);

console.log('server running');

app.get('/', (req,res, next) => {

    res.render('index');

});

io.sockets.on('connection', (socket)=>{
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length );


    connections.splice(connections.indexOf(socket),1);
    console.log('Disconnected: %s sockets connected', connections.length);
});

