const mongo = require('../lib/mongo')
const updateOne = async (id,set)=>{
    try{
        const db = mongo.getDb();

        let votacionComfort = await db.collection('comfort_votacion').updateOne(id,set);
        return votacionComfort; 


    }catch(err){
        console.log('Error al registrar la votacion de confort!');
        return undefined

    }
}
const findOne = async (query,options)=>{
    try{
        const db = mongo.getDb();
        let statusAC = await db.collection('comfort_votacion').findOne(query,options);
        return statusAC;
    }catch(err){
        console.log("Error al encontrar la votacion");
        return undefined
    }
}
module.exports ={
    updateOne,
    findOne
}