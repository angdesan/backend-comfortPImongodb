const mongo = require('../lib/mongo')
const insertOne = async (document)=>{
    try{
        const db = mongo.getDb();

        let created = await db.collection('comfort_valueIteration').insertOne(document);
        let newRegister = await db.collection('comfort_valueIteration').findOne({_id:created.insertedId});
        return newRegister
    }catch(err){
        console.log('Error al registrar el evento de value iteration!');
        return undefined
    }
}

module.exports = {
    insertOne
}