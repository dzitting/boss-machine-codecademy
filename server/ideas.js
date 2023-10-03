const express = require('express');
const { getAllFromDatabase } = require('./db');
const app = express();
const ideasRouter = express.Router();

ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
    next();
})

module.exports = ideasRouter;
