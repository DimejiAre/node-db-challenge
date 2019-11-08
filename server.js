require('dotenv').config();
const express = require('express');
const helmet = require('helmet');

const resources = require('./models/resource-router');
const projects = require('./models/project-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/resources', resources);
server.use('/api/projects', projects);

server.get('/', (req,res) => {
    res.status(200).json({message: 'Welcome to my Api'})
})

module.exports = server;