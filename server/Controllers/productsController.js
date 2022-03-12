const Product = require('../Models/Product');

let getProducts = async (req,res) => {
   await Product.find({}).then((data) => {
        res.send(data)
})};

let getProductById = async (req,res) => {
   await Product.findOne(req.params.id).then((data) => {
        res.send(data)
})};


let addProduct = async (req,res) => {
   await Product.create(req.body).then((data) => { 
    res.send(data)
})};


let updateProduct = async (req,res) => {
   await Product.findByIdAndUpdate({_id : req.params.id},req.body).then(() => {
        Product.findOne({_id : req.params.id}).then((data) => {
            res.send(data)
        })
})};

let deleteProduct = async (req,res) => {
   await Product.findByIdAndRemove({_id : req.params.id}).then((data) => {
        res.send(data)
})};



module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
};

