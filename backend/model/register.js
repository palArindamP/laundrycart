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
    phone: {
        type:Number,
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
    },
    password:{
        type: String,
        require: true
    },
    cpassword:{
        type: String,
        require: true
    },
    tokens: [
        {
            token: {
                shirtcount: {
                    type: Number,
                    require: true,
                    default: 0
                }, 
                shirtwashtype: {
                    type: String,
                },
                shirtserviceprice:{
                    type: Number
                },
                
                tshirtcount: {
                    type: Number,
                    require: true,
                    default: 0
                }, 
                tshirtwashtype: {
                    type: String,
                },
                tshirtserviceprice:{
                    type: Number
                }, 

                trousercount: {
                    type: Number,
                    require: true,
                    default: 0
                }, 
                trouserwashtype: {
                    type: String,
                },
                trouserserviceprice:{
                    type: Number
                }, 
                
                jeanscount: {
                    type: Number,
                    require: true,
                    default: 0
                }, 
                jeanswashtype: {
                    type: Stringtrouser},
                jeansserviceprice:{
                    type: Number
                },
                
                boxercount: {
                    type: Number,
                    require: true,
                    default: 0
                }, 
                boxerwashtype: {
                    type: String,
                },
                boxerserviceprice:{
                    type: Number
                },  
                
                joggercount: {
                    type: Number,
                     require: true,
                     default: 0
                }, 
                joggerwashtype: {
                    type: String,
                
                },
                joggerserviceprice:{
                    type: Number
                },

                othercount: {
                    type: Number,
                     require: true,
                     default: 0
                }, 
                otherwashtype: {
                    type: String,  
                },
                otherserviceprice:{
                    type: Number
                },
                date:{
                        type: Date,
                        default: Date.now
                        },

                totalitems: {
                    type: Number
                },
                totalprice: {
                    type: Number
                }
            }
        }
    ]
})

const collection = mongoose.model("collection", schema);

module.exports = collection;