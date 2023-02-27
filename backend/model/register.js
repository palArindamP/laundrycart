const mongoose = require("mongoose");
// creating schema for fetching data from landing page form

const schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    cpassword:{
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    district: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    pincode: {
        type: Number,
        require: true
    }
    
})

const collection = mongoose.model("collection", schema);

module.exports = collection;