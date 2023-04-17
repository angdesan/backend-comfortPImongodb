const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('./../../models/userModel')
const env = require('./../../lib/env')
const config = env.getConfig()
const login = async(req,res) =>{
    try{
        const data_from_page = req.body;
        let user = await UserModel.findOne({
            username: data_from_page.username
        },{});
        if(!user){
            return res.status(404).send("No se encuentra el usuario solicitado");
        }
        if(!bcrypt.compareSync(body.password, user.password)){
            return res.status(404).send("Usuario o contraseña incorrecta");
        }
        let token = jwt.sign({
            _id: user._id,
            username: user.username

        },config.jwt.expiration.login,{
            expiresIn: config.jwt.secretKey
        });
        return res.status(200).json({
            ok: true,
            usuario: user,
            token:token
        })
        

    }catch(err){
        console.log("Error al encontrar el usuario",err);
        return res.status(500).send("Error al encontrar el usuario");
    }

}