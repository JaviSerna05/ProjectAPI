const User = require('../models/User');

function index(req, res){
    User.find({})
        .then(users => {
            if(users.length) return res.status(200).send({users});
            return res.status(204).send({message: 'Not Content'});
        }).catch(error => res.status(500).send({error}));
}

function getUsers(req, res){

}

function getUser(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.users) return res.status(404).send({message: 'NOT FOUND'});
    let users = req.body.users;
    return res.status(200).send({users});
    
}

function addUser(req, res){
    let user = new User(req.body);
    user.save().then(user => res.status(201).send({user}))
    .catch(error => res.status(500).send({error}));
}

function editUser(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.users) return res.status(404).send({message: 'NOT FOUND'});
    let user = req.body.users[0];
    user = Object.assign(user, req.body);
    user.save().then(user => res.status(200).send({message: "UPDATED", user}))
    .catch(error => res.status(500).send({error}));
}

function deleteUser(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.users) return res.status(404).send({message: 'NOT FOUND'});
    req.body.users[0].remove().then(user => res.status(200)
    .send({message: 'REMOVED', user})).catch(error => res.status(500).send({error})); 
}

function find(req, res, next){
    let query = {};
    query[req.params.id] = req.params.value;
    User.find(query).then(users => {
        if(!users.length) return next();
        req.body.users = users;
        return next();
    }).catch(error =>{
        req.body.error = error;
        next();
    })
}

module.exports = {
    index,
    getUsers,
    getUser,
    addUser,
    editUser,
    deleteUser,
    find
}