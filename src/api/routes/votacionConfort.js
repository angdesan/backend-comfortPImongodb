const express = require('express')
const app = express()
const VotacionConfort = require('../../controllers/votacionComfort/votacionConfortController');




app.post('/votacionComfort', async(req,res)=>{
    await VotacionConfort.updateVotacion(req,res)
});

module.exports = app;