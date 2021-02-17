const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    productName: {
        type: String,
        trim: true,
        required: true,
    },
    productContent: {
        type: String,
        trim: false,
        required : false,
    },
    productImage : {
        type: String,
        required : false,
    },
    productPrice : {
        type: Number,
        required : true,
        default : 0,
    },
    createdAt: {
        type : Date,
        required : true,
        default : Date.now(),
    },
    updatedAt : {
        type : Date,
        required : true,
        default : Date.now(),
    },
    });

module.exports = schema;