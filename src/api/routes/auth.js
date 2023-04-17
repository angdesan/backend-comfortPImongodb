const express = require('express')
const app = express();
const Register = require('./../../controllers/auth/registerController');

app.post('/register', async(req,res)=>{
    await Register.register(req,res)
});
