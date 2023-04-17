const mongo = require('../../lib/mongo')
const { ObjectId } = require('mongodb');
const votacionConfortModel = require('../../models/votacionConfortModel')

const updateVotacion = async (req, res) => {

    try {
        const data_from_page = req.body;
        if(data_from_page.nivel){
            let nivelComfort = data_from_page.nivel;
            let updateComfort 
            let envio = {}
            if (nivelComfort === "cold") {
                envio["votacion.cold"] = 1
            } else if (nivelComfort === "warm") {
                envio["votacion.warm"] = 1
            } else if (nivelComfort === "neutral") {
                envio["votacion.neutral"] = 1
            }else{
                return res.status(400).send("Los parametros permitidos son cold, warm y neutral")
            }
            updateComfort = await votacionConfortModel.updateOne({
                _id: new ObjectId('64001466e3be1cab6c3e8681')
            }, {
                $inc: envio
            })
    
            res.status(201).json(updateComfort);
        }else{
            return res.status(400).send("No envia los parametros permitidos")
        }

    } catch (err) {
        console.log("Error al cargar la votacion: ",err);
        return res.status(500).send("Error al realizar la votacion")

    }
}

module.exports = {
    updateVotacion
}