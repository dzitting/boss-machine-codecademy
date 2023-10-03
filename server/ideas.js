const express = require('express');
const { getAllFromDatabase, updateInstanceInDatabase, addToDatabase, getFromDatabaseById, deleteFromDatabasebyId } = require('./db');
const app = express();
const ideasRouter = express.Router();

ideasRouter.param('ideaId', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id);
    if (idea) {
        req.idea = idea;
        next();
    }else {
        res.status(404).send();
    }
})

ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
    next();
})

ideasRouter.post('/', (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body);
    res.status(201).send(newIdea);
    next();
})

ideasRouter.get('/:ideaId', (req, res, next) => {
    const idea = req.idea;
    res.send(idea);
})

ideasRouter.put("/:ideaId", (req, res, next) => {
    const idea = req.idea;
    const updatedIdea = updateInstanceInDatabase('ideas', req.body);
})

module.exports = ideasRouter;
