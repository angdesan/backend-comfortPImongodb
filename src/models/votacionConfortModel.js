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
module.exports ={
    updateOne
}