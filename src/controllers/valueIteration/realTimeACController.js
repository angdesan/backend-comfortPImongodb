const realTimeACModel = require('../../models/realTimeACModel');
const {ObjectId} = require('mongodb');
const updateRealTime = async(req,res)=>{
    try{
        const data_from_page = req.body;
        let statusAC = data_from_page.statusAC;
        let realTimeCollection = await realTimeACModel.findOne({},{});
        let idRealTime = realTimeCollection._id;
        if(statusAC){
            if(typeof statusAC !== undefined && statusAC !== null){
                let updateRealTimeAC = await realTimeACModel.updateOne({
                    _id: new ObjectId(idRealTime) 
                },{
                    $set: {
                        statusAC: data_from_page.statusAC,
                        fecha: new Date()
                    }
                });
                req.io.emit('recomendation:read',JSON.stringify(data_from_page))
                res.status(201).json(updateRealTimeAC);
            }else{
                return res.status(400).send("No debe enviar parametros vacios")    
            }
        }else{
            return res.status(400).send("No envio los parametros permitidos")
        }
    }catch(err){
        console.log("Error al cargar la actualizacion del estado del AC: ",err);
        return res.status(500).send("Error al realizar la actualizacion del estado del AC")
    }
}
const firstStatus = async (req,res)=>{
    try{
        let options = {_id:0,statusAC:1};
        let statusAC = await realTimeACModel.findOne({},options);
        let status = statusAC.statusAC;
        let response = {
            statusAC : status
        }
        return res.status(201).json(response);
    }catch(err){
        return res.status(500).send('Error al obtener el estado actual del AC');
    }
}
module.exports = {
    updateRealTime,
    firstStatus
}