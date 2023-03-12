const mongo = require('./../lib/mongo');
const updateOne = async(id,set) =>{
    try{
        const db = mongo.getDb();
        let realTimeAC = await db.collection('comfort_realtime').updateOne(id,set);
        return realTimeAC;

    }catch{
        console.log('Error al registrar el estado del AC');
        return undefined;
    }
}
module.exports = {
    updateOne
}