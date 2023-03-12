require('dotenv').config()
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const mongo = require('./lib/mongo');
const routes = require('./api/routes');
const config = require('./lib/env').getConfig()
const env = config.env
const app = express();
const path = require('path');
const port = process.env.PORT || config.server.port;
const server = require('http').createServer(app);
const io = require('socket.io')(server,{
    cors: {
        origin: ['http://localhost:5173'],
        methods: ['GET','POST'] 
    }
});
const { Socket } = require('dgram');
const recomendation = require('./sockets/recomendationSocket')


//Middlewares de Express
app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended:true}));
app.use((req,res,next)=>{
    req.io = io
    next();
});

//Manejo de rutas
app.use('/api/V1',routes);

io.on('connection',(socket)=>{
    console.log("Cliente online",socket.id);
    socket.on('disconect',()=>{
        console.log('Cliente desconectado', socket.id );
    });
    socket.on('recomendation:read',recomendation(io).readUpdateAC);
})
// Si no encuentra rutas las envia a 404

// app.use(function (req, res, next) {
//     res.status(404).sendFile(path.join(__dirname + '/views/404.html'))
//   })
mongo.connectToServer((err)=>{
    if(err){
        console.log(err);
        process.exit()
    }
    server.listen(port, ()=>{
        console.log(`✔ Express server listening on port ${port}`);
    })
})

