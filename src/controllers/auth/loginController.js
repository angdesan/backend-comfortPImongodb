const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const login = async(req,res) =>{
    try{
        const data_from_page = req.body;

    }catch(err){
        console.log("Error al encontrar el usuario",err);
        return res.status(500).send("Error al encontrar el usuario");
    }

}