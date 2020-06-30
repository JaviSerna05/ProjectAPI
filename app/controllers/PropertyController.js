const Property = require('../models/Property');

function index(req, res){
    
}

function getProperties(req, res){
    Property.find({})
        .then(propertys => {
            if(propertys.length) return res.status(200).send({propertys});
            return res.status(204).send({message: 'Not Content'});
        }).catch(error => res.status(500).send({error}));
}

function getProperty(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.propertys) return res.status(404).send({message: 'NOT FOUND'});
    let propertys = req.body.propertys;
    return res.status(200).send({propertys});
    
}

function addProperty(req, res){
    let property = new Property(req.body);
    property.save().then(property => res.status(201).send({property}))
    .catch(error => res.status(500).send({error}));
}

function editProperty(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.propertys) return res.status(404).send({message: 'NOT FOUND'});
    let property = req.body.propertys[0];
    property = Object.assign(property, req.body);
    property.save().then(property => res.status(200).send({message: "UPDATED", property}))
    .catch(error => res.status(500).send({error}));
}

function deleteProperty(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.propertys) return res.status(404).send({message: 'NOT FOUND'});
    req.body.propertys[0].remove().then(property => res.status(200)
    .send({message: 'REMOVED', property})).catch(error => res.status(500).send({error})); 
}

function find(req, res, next){
    let query = {};
    query[req.params.id] = req.params.value;
    Property.find(query).then(propertys => {
        if(!propertys.length) return next();
        req.body.propertys = propertys;
        return next();
    }).catch(error =>{
        req.body.error = error;
        next();
    })
}

module.exports = {
    index,
    getProperties,
    getProperty,
    addProperty,
    editProperty,
    deleteProperty,
    find
}