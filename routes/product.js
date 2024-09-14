const express = require('express');
const router = express.Router();

const productController = require('../controller/ProductController')

router.get('/list', productController.getAllProducts);

router.get('/getbyid/:id', productController.getByProductId);

router.post('/add', productController.addProduct);

router.put('/edit/:id', productController.editProduct);

router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;