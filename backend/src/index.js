const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app =  express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

// contect database in mLab
mongoose.connect(
    'mongodb://goweek:goweek123@ds127825.mlab.com:27825/goweek-claudiuri',
    {
        useNewUrlParser: true
    }
);

app.use((req, res, next) =>{
    req.io = io;

    return next();
});

app.use(cors());  // para acessar aplicação na index
app.use(express.json());  // para conseguir enviar requisições json
app.use(require('./routes'));

server.listen(3000,() => {
    console.log('Server iniciado na porta 3000');
});