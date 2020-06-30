const mongoose = require('mongoose');
const CONFIG = require('./config');

module.exports = {
    connection: null,
    connect: function(){
        if(this.connection) return this.connection;
        return mongoose.connect(CONFIG.DB, {useCreateIndex:true, useNewUrlParser:true, useUnifiedTopology:true })
        .then(connection => {
            this.connection = connection;
            console.log('Connect to database');
        }).catch(error => console.log(error));
    }
}