const { query } = require('express');
const mongo = require('../lib/mongo');
const insertOne = async (document)=>{
    try{
        const db = mongo.getDb();
        let created = await db.collection('comfort_usuario').insertOne(document);
        return created;
    }catch(err){
        console.log('Error al registrar el nuevo usuario');
        return undefined

    }
}
const findOne = async(query, options)=>{
    try{
        const db = mongo.getDb();
        let findOne = await db.collection('comfort_usuario').findOne(query,options);
        return findOne;
    }catch(err){
        console.log('Error al encontrar el usuario');
        return undefined
    }
}
module.exports = {
    insertOne,
    findOne
}