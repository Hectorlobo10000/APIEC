'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const  themeRoutes = require('./routes/theme.route');

const mongoose = require('mongoose');

const connectionString = 'mongodb://HectorLobo:.Nomejodaspendejo10@cluster0-shard-00-00-pxpbj.mongodb.net:27017,cluster0-shard-00-01-pxpbj.mongodb.net:27017,cluster0-shard-00-02-pxpbj.mongodb.net:27017/EscribeloCorrectoDB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
mongoose.connect(connectionString ,{
    useMongoClient: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

mongoose.connection.on('error', (err) => {
    console.log('Error while connecting to mongoDB', err);
});

server.connection({
    port: process.env.PORT,
    host: '0.0.0.0',
    routes: {
        cors: true
    }
});

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply){
        reply('Api For Escribelo Correcto');
    }
});

server.route(themeRoutes);

server.start((err) => {
    if(err){
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});