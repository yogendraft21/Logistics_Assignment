const express = require('express');
const router = express.Router();

const itemRoutes = require('./itemRoutes');
const customerRoutes = require('./customerRoutes');
const deliveryVehicleRoutes = require('./deliveryVehicleRoutes');
const orderRoutes = require('./orderRoutes');
const authenticationMiddleware = require('../middleware/authenticationMiddleware');

router.use('/customers', customerRoutes);
router.use(authenticationMiddleware);
router.use('/items', itemRoutes);
router.use('/vehicles', deliveryVehicleRoutes);
router.use('/orders', orderRoutes);

module.exports = router;
