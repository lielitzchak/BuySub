const Group = require('../Models/Group');
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

   const group = await Group.findOne({groupName : req.params.groupName});
   console.log(group);
   const newProduct = await Product.create(req.body);

   group.products.push(newProduct._id);
   
   await group.save();
   
   res.send({message :'The Product added and Linked Sucessfully',newProduct})  
};



let updateProduct = async (req,res) => {
   await Product.findByIdAndUpdate({_id : req.params.id},req.body).then(() => {
        Product.findOne({_id : req.params.id}).then((data) => {
            res.send(data)
        })
})};

let updateQuentityProduct = async (req,res) => {
   await Product.findOne({_id : req.params.id}).then(async(product) => {
      console.log(req.body);
      product.quantity = req.body.productToEdit 
     await product.save();
        Product.findOne({_id : req.params.id}).then((data) => {
            res.send(data)
        })
})
};


let deleteProduct = async (req,res) => {

   const productToDelete = await Product.findByIdAndRemove({_id : req.params.id})

   console.log(productToDelete);
   await Group.findOne({groupName: req.params.groupName}).then((groupProducts) => {
      const groupProduct = groupProducts.products;
      groupProduct.splice(groupProduct.indexOf(productToDelete._id),1)
      groupProducts.save();
      res.send({Message : `The Product ${productToDelete.productName} Deleted`})
    })  
     
};



module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    updateQuentityProduct,
    deleteProduct
};

