const express = require('express');
const path = require('path');
const router = express.Router();
const valueIteration = require('./routes/valueIteration')
const auth = require('./routes/auth')
router
.get('/',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname+'src/views/404.html'))
})
.use('/valueIterationRL',valueIteration)
.use('/auth',auth)
module.exports = router