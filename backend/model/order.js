const mongoose = require("mongoose");
// creating schema for fetching data from landing page form

const orderDetails = new mongoose.Schema({
    items: {
        type: Array,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    datadate:{
        type: Date,
        default: Date.now
    },
    dataphone: {
        type: Number,
        require: true
    },
    datalocation: {
        type: String,
        require: true
    },
    datatotalitems: {
        type: Number,
        require: true
    },
    dataaddress: {
        type: String,
        require: true
    },
    dataprice: {
        type: Number,
        require: true
    },
    datawashtype: {
        type: Array,
        require: true
    }
})

const details = mongoose.model("details", orderDetails);

module.exports = details;