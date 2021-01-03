const mongoose = require('mongoose');


const productsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    category:{
        type: String,
        required: true,
        trim: true
    },
    slug:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true,
        trim: true
    },
    regularPrice:{
        type: Number,
        required: true,
        trim: true
    },
    brand:{
        type: String,
        required: true,
        trim: true,
    },
    mpnId:{
        type: String,
    },
     status: {
        type: Boolean,
        default: true
    },
    productShortDescription: String,
    productSpecification: String,
    productDescription: String,
    productReview: String


    },{
    timestamps:true
})

module.exports = mongoose.model('Product', productsSchema)