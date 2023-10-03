const express = require('express');
const meetingsRouter = express.Router();
const app = express();

app.get((req, res, next) => {
    res.send();
    next();
})

module.exports = meetingsRouter;
