// const User = require('../models/User.js');
// const bcrypt = require('bcrypt');
// const CONFIG = require('../config/config');

// const jwt = require('jsonwebtoken');


// function login(req,res){
//     let email = req.body.email;
//     let password = req.body.password;

//     User.findOne({email})
//         .then(user => {
//             if(!user) return res.status(404).send({message: 'The User Do not exist'});
//             bcrypt.compare(password, user.password)
//                 .then(match => {
//                     if(match) {
//                         payload = {
//                             email: user.email,
//                             name: user.name,
//                             role: user.role
//                         }
//                         jwt.sign(payload, CONFIG.SECRET_TOKEN, function(error, token){
//                             if(error){
//                                 res.status(500).send({error});
//                             }else{
//                                 res.status(200).send({message: 'Access',token});
//                             }
//                         })
//                     }else{
//                          res.status(200).send({message: 'Password Incorrect'});
//                     }   
//                 }).catch(error => {
//                     console.log(error);
//                     res.status(500).send({error});
//                 })
//         }).catch(error => console.log(error));

// }

// module.exports = login;