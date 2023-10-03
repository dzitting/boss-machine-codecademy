const express = require('express');
const { addToDatabase, getAllFromDatabase, deleteFromDatabasebyId } = require('./db');
const app = express();
const meetingsRouter = express.Router();

meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
    next();
});

meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = addToDatabase('meetings', req.body);
    res.status(201).send(newMeeting);
})

meetingsRouter.delete('/', (req, res, next) => {
    deleteFromDatabasebyId('meetings', req.body.id);
    res.status(204).send();
})

module.exports = meetingsRouter;
