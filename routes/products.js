const express = require('express');
const { create, getProducts, update, remove } = require('../controllers/ProductControllers');
const router = express.Router();

router.post('/product', create);
router.get('/getProducts', getProducts);
router.put('/product/:id',update);
router.delete('/product/:id', remove);



module.exports = router;