const express = require('express');
const router = express.Router();
const deliveryVehicleController = require('../controllers/deliveryVehicleController');

router.get('/', deliveryVehicleController.getAllVehicles);
router.get('/:id', deliveryVehicleController.getVehicleById);
router.post('/', deliveryVehicleController.createVehicle);
router.put('/:id', deliveryVehicleController.updateVehicle);
router.delete('/:id', deliveryVehicleController.deleteVehicle);

module.exports = router;
