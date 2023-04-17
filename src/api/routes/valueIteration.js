const express = require('express')
const app = express()
const ValueIteration = require('../../controllers/valueIteration/valueIterationController');
const RealTimeAC = require('../../controllers/valueIteration/realTimeACController');
const VotacionConfort = require('../../controllers/valueIteration/votacionConfortController');

// real time AC
app.post('/realTimeAC',async(req,res)=>{
    await RealTimeAC.updateRealTime(req,res)
});
app.get('/firstStatus',async(req,res)=>{
    await RealTimeAC.firstStatus(req,res)
});

// value iteration
app.post('/valueIteration', async(req,res)=>{
    await ValueIteration.createValueIteration(req,res)
});

// votacion comfort
app.post('/votacionComfort', async(req,res)=>{
    await VotacionConfort.updateVotacion(req,res)
});
module.exports = app;

