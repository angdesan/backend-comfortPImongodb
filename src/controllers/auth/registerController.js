const bcrypt = require('bcrypt');
const RegisterModel = require('./../../models/registerModel')
const register = async (req, res) =>{
    try{
        const data_from_page = req.body;
        let {username, email,password} = data_from_page;
        let insertUser = await RegisterModel.insertOne({
            username: username,
            email: email,
            password: bcrypt.hashSync(password,10),
            createdAt: new Date()
        });
        res.status(201).json(insertUser);
    }catch(err){
        console.log("Error al registrar el usuario",err);
        return res.status(500).send("Error al realizar el registro del usuario");
    }

}
module.exports = {
    register
}