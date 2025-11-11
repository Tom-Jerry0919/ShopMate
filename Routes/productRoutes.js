const express = require('express');
const {
    createproduct,
    getAllProducts,
    getProductById,
    deleteProduct,
    updateProduct
} = require('../Controllers/productController');
const { protect } = require('../Middleware/authMiddleware');

const router = express.Router();


router.route('/')
    .post(protect, createproduct)     
    .get(protect,getAllProducts);            

router.route('/:id')
    .get(protect, getProductById)     
    .put(protect, updateProduct)      
    .delete(protect, deleteProduct);  

module.exports = router;
