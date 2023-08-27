const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/', orderController.createOrderAndAssignVehicle);
router.put('/:id/deliver', orderController.markOrderDelivered);

module.exports = router;
