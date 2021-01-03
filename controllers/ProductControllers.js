const Product = require('../models/product.model');
const _ = require('lodash');



exports.create = (req,res,next) =>{
    const {
        title,
        category,
        slug,
        price,
        regularPrice,
        brand,
        mpnId,
        status,
        productShortDescription,
        productSpecification,
        productDescription,
        productReview
    } = req.body;

    const newProduct = new Product({
        title,
        category,
        slug,
        price,
        regularPrice,
        brand,
        mpnId,
        status,
        productShortDescription,
        productSpecification,
        productDescription,
        productReview
    })
    newProduct.save((err,product)=>{
        if(err) return console.log(err)
        res.json(product)
    })
}


exports.getProducts = async (req,res)=>{
    const products = await Product.find({})
    res.send(products);
}


exports.update = async (req,res)=>{
    const productId = req.params.id;
    const newProduct = req.body;

    (await Product.findOne({_id: productId})).execPopulate((err,product)=>{
        if(err) return res.send(err);
        product = _.merge(product,newProduct);

        product.save((error,success)=>{
            if(error) return res.send(error);

            res.json(success);
        })
    })
}


exports.remove = async (req,res)=>{
    const productId = req.params.id;

    Product.findOneAndDelete({_id: productId}).exec((err,success)=>{
        if(err) return res.json(err);
        res.json({msg: "Delete success!"})
    })
}