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
const findOne = async (query,options)=>{
    const db = mongo.getDb();
    let statusAC = await db.collection('comfort_realtime').findOne(query,options);
    return statusAC;
}
module.exports = {
    updateOne,
    findOne
}