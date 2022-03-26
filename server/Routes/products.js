const express = require('express');
const router = express.Router();
const {getProducts,getProductById,addProduct,updateProduct,updateQuentityProduct,deleteProduct} = require('../Controllers/productsController');


router.get('/products',getProducts)

router.get('/products/:id',getProductById)

router.post('/products/:groupName',addProduct)

router.put('/products/:id',updateProduct)

router.put('/products/:id',updateQuentityProduct)

router.delete('/products/:id/:groupName',deleteProduct)


module.exports = router;
