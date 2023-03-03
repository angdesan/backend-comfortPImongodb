const express = require('express');
const path = require('path');
const router = express.Router();
const valueIteration = require('./routes/valueIteration')
const votacionConfort = require('./routes/votacionConfort')

router
.use('/valueIterationRL',valueIteration)
.use('/votacionComfortRL',votacionConfort)

module.exports = router