//const {request, response} = require('express');
const mongo = require('../../lib/mongo')
const {ObjectId} = require('mongodb')
const valueIterationModel = require('../../models/valueIterationModel');


const createValueIteration = async (req,res)=>{
    const data = req.body;
    let lecturaValueIteration = data
    try{
        let insertValueIteration = await valueIterationModel.insertOne(lecturaValueIteration);
        res.status(201).json(insertValueIteration);


    }catch(err){
        console.log(err);
        res.status(500).json({
            ok:false,
            msg: 'Please inform your administrator'
        })

    }
}
module.exports ={
    createValueIteration
}