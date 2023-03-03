const mongo = require('../../lib/mongo')
const {ObjectId} = require('mongodb');
const votacionConfortModel = require('../../models/votacionConfortModel')

const updateVotacion = async(req,res)=>{
    
    try{
        const data_from_page = req.body;
        let nivelComfort = data_from_page.nivel;
        let updateComfort
        if(nivelComfort==="cold"){
            updateComfort = await votacionConfortModel.updateOne({
                    _id: new ObjectId('64001466e3be1cab6c3e8681')},
                {
                    $inc: {"votacion.cold":1}
                });
        }else if (nivelComfort==="warm"){
            updateComfort = await votacionConfortModel.updateOne({
                    _id: new ObjectId('64001466e3be1cab6c3e8681')},
                {
                    $inc: {"votacion.warm":1}
                });

        }else if(nivelComfort=== "neutral"){
            updateComfort = await votacionConfortModel.updateOne({
                _id: new ObjectId('64001466e3be1cab6c3e8681')
            },{
                $inc: {'votacion.neutral':1}
            })
        }
        res.status(201).json(updateComfort);

    }catch(err){
        console.log(err);
        res.status(500).json({
            ok:false,
            msg: 'Please inform your administrator'
        })

    }
}

module.exports = {
    updateVotacion
}