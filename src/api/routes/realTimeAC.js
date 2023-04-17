const express = require('express');
const app = express();
const RealTimeAC = require('./../../controllers/realTimeAC/realTimeACController');


app.post('/realTimeAC',async(req,res)=>{
    await RealTimeAC.updateRealTime(req,res)
})
app.get('/firstStatus',async(req,res)=>{
    await RealTimeAC.firstStatus(req,res)
})
module.exports = app;
