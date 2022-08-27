const express = require('express');
const router = express.Router();
const NewController = require('../controllers/newController')
const MyMid = require('../middlewares/NewMiddleware')

router.post('/createProduct', NewController.createProduct)
router.post('/createUser', MyMid.headerCheck, NewController.createUser)
router.post('/orderPurchase', MyMid.headerCheck, NewController.orderPurchase)


module.exports = router;