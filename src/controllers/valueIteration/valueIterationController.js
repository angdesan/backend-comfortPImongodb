//const {request, response} = require('express');
const mongo = require('../../lib/mongo')
const {ObjectId} = require('mongodb')
const valueIterationModel = require('../../models/valueIterationModel');


const createValueIteration = async (req,res)=>{
    try{
        const data = req.body;
        let lecturaValueIteration = data
        let insertValueIteration = await valueIterationModel.insertOne(lecturaValueIteration);
        res.status(201).json(insertValueIteration);


    }catch(err){
        console.log("Error al cargar la insercion: ",err);
        return res.status(500).send("Error al realizar la insercion de la data de value iteration")
    }
}
module.exports ={
    createValueIteration
}