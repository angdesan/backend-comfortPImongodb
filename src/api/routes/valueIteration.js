const express = require('express')
const app = express()
const ValueIteration = require('../../controllers/valueIteration/valueIterationController');




app.post('/valueIteration', async(req,res)=>{
    await ValueIteration.createValueIteration(req,res)
});

module.exports = app;

