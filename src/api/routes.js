const express = require('express');
const path = require('path');
const router = express.Router();
const valueIteration = require('./routes/valueIteration')

router
.use('/valueIterationRL',valueIteration)

module.exports = router