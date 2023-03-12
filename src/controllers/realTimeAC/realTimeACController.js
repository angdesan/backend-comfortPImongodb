const realTimeAC = require('./../../models/realTimeACModel');
const {ObjectId} = require('mongodb');
const updateRealTime = async(req,res)=>{
    try{
        const data_from_page = req.body;
        console.log(data_from_page);
        let updateRealTimeAC = await realTimeAC.updateOne({
            _id: new ObjectId('640537ce8f73273635557fbd') 
        },{
            $set: {
                statusAC: data_from_page.statusAC,
                fecha: new Date()
            }
        });
        req.io.emit('recomendation:read',JSON.stringify(data_from_page))
        res.status(201).json(updateRealTimeAC);
    }catch(err){
        console.log(err);
        res.status(500).json({
            ok:false,
            msg: 'Please inform your administrator'
        })
    }
}
module.exports = {
    updateRealTime
}