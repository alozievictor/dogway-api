const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DogOwnerSchema = new Schema({
    username: {
        type : String,
        required: true
    },
    password: {
        type : String,
        required : true
    },
    image: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    country: {
        type : String,
        required : true
    },
    state: {
        type : String,
        required : true
    },
    address: {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    }
})

module.exports = mongoose.model('DogOwnerSchema', DogOwnerSchema);