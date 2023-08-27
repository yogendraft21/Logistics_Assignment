const Customer = require('../models/Customer');
const logger = require('../utils/logger');

const customerController = {
  getAllCustomers: async (req, res) => {
    try {
      const customers = await Customer.find();
      res.json(customers);
    } catch (error) {
      logger.error('Error fetching customers:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getCustomerById: async (req, res) => {
    try {
      const customerId = req.params.id;
      const customer = await Customer.findById(customerId);
      if (!customer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
      res.json(customer);
    } catch (error) {
      logger.error('Error fetching customer by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  createCustomer: async (req, res) => {
    try {
      const { name, city } = req.body;
      const newCustomer = new Customer({ name, city });
      await newCustomer.save();
      logger.info('Created a new customer:', newCustomer);
      res.status(201).json(newCustomer);
    } catch (error) {
      logger.error('Error creating customer:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  updateCustomer: async (req, res) => {
    try {
      const customerId = req.params.id;
      const { name, city } = req.body;
      const updatedCustomer = await Customer.findByIdAndUpdate(
        customerId,
        { name, city },
        { new: true }
      );
      if (!updatedCustomer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
      logger.info('Updated customer:', updatedCustomer);
      res.json(updatedCustomer);
    } catch (error) {
      logger.error('Error updating customer:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  deleteCustomer: async (req, res) => {
    try {
      const customerId = req.params.id;
      const deletedCustomer = await Customer.findByIdAndRemove(customerId);
      if (!deletedCustomer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
      logger.info(`Deleted customer with ID ${customerId}`);
      res.json({ message: 'Customer deleted successfully' });
    } catch (error) {
      logger.error('Error deleting customer:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = customerController;
