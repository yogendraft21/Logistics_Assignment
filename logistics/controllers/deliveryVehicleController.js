const DeliveryVehicle = require('../models/DeliveryVehicle');
const logger = require('../utils/logger');

const deliveryVehicleController = {
  getAllVehicles: async (req, res) => {
    try {
      const vehicles = await DeliveryVehicle.find();
      logger.info("Fetched All Vehicles")
      res.json(vehicles);
    } catch (error) {
      logger.error('Error fetching delivery vehicles:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getVehicleById: async (req, res) => {
    try {
      const vehicleId = req.params.id;
      const vehicle = await DeliveryVehicle.findById(vehicleId);
      if (!vehicle) {
        return res.status(404).json({ error: 'Vehicle not found' });
      }
      logger.info("fetching vehicle with ID ",vehicleId)
      res.json(vehicle);
    } catch (error) {
      logger.error('Error fetching vehicle by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  createVehicle: async (req, res) => {
    try {
      const { registrationNumber, vehicleType, city } = req.body;
      const newVehicle = new DeliveryVehicle({ registrationNumber, vehicleType, city });
      await newVehicle.save();
      logger.info('Created a new delivery vehicle:', newVehicle);
      res.status(201).json(newVehicle);
    } catch (error) {
      logger.error('Error creating delivery vehicle:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  updateVehicle: async (req, res) => {
    try {
      const vehicleId = req.params.id;
      const { registrationNumber, vehicleType, city } = req.body;
      const updatedVehicle = await DeliveryVehicle.findByIdAndUpdate(
        vehicleId,
        { registrationNumber, vehicleType, city },
        { new: true }
      );
      if (!updatedVehicle) {
        return res.status(404).json({ error: 'Vehicle not found' });
      }
      logger.info('Updated delivery vehicle:', updatedVehicle);
      res.json(updatedVehicle);
    } catch (error) {
      logger.error('Error updating delivery vehicle:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  deleteVehicle: async (req, res) => {
    try {
      const vehicleId = req.params.id;
      const deletedVehicle = await DeliveryVehicle.findByIdAndRemove(vehicleId);
      if (!deletedVehicle) {
        return res.status(404).json({ error: 'Vehicle not found' });
      }
      logger.info(`Deleted delivery vehicle with ID ${vehicleId}`);
      res.json({ message: 'Vehicle deleted successfully' });
    } catch (error) {
      logger.error('Error deleting delivery vehicle:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = deliveryVehicleController;
