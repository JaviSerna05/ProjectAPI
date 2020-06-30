const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    }, 
    type: {
       type: String,
       required: true,
       enum: ['House', 'Aparment', 'Room', 'Building' ]
    }, 
    address: {
        type: String,
        required: true,

    },
    rooms: {
       type: Number,
       required: true,
    },
    price: {
       type: Number,
       required: true
    },
    area:{
        type: Number,
        required: true
    }

});

const Property = mongoose.model('Property', PropertySchema);

module.exports = Property;