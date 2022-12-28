const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const DogSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    breed: {
        type : String,
        required : true
    },
    color: {
        type : String,
        required :true
    },
    age: {
        type : String,
        required : true
    },
    image: {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('dog', DogSchema);