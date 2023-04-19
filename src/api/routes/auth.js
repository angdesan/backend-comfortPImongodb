const express = require('express')
const app = express();
const Register = require('./../../controllers/auth/registerController');
const Login = require('./../../controllers/auth/loginController');
app.post('/register', async(req,res)=>{
    await Register.register(req,res)
});
app.post('/login',async(req,res)=>{
    await Login.login(req,res)
})
module.exports = app;