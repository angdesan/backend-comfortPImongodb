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
module.exports = {
    insertOne
}