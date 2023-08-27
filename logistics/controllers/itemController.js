const Item = require('../models/Item');
const logger = require('../utils/logger');

const itemController = {
  getAllItems: async (req, res) => {
    try {
      const items = await Item.find();
      logger.info('Fetched all items');
      res.json(items);
    } catch (error) {
      logger.error('Error fetching items:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getItemById: async (req, res) => {
    try {
      const itemId = req.params.id;
      const item = await Item.findById(itemId);
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      logger.info(`Fetched item with ID ${itemId}`);
      res.json(item);
    } catch (error) {
      logger.error('Error fetching item:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  createItem: async (req, res) => {
    try {
      const { name, price } = req.body;
      const newItem = new Item({ name, price });
      await newItem.save();
      logger.info('Created a new item:', newItem);
      res.status(201).json(newItem);
    } catch (error) {
      logger.error('Error creating item:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  updateItem: async (req, res) => {
    try {
      const itemId = req.params.id;
      const { name, price } = req.body;
      const updatedItem = await Item.findByIdAndUpdate(itemId, { name, price }, { new: true });
      if (!updatedItem) {
        return res.status(404).json({ error: 'Item not found' });
      }
      logger.info(`Updated item with ID ${itemId}:`, updatedItem);
      res.json(updatedItem);
    } catch (error) {
      logger.error('Error updating item:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  deleteItem: async (req, res) => {
    try {
      const itemId = req.params.id;
      const deletedItem = await Item.findByIdAndRemove(itemId);
      if (!deletedItem) {
        return res.status(404).json({ error: 'Item not found' });
      }
      logger.info(`Deleted item with ID ${itemId}`);
      res.json({ message: 'Item deleted successfully' });
    } catch (error) {
      logger.error('Error deleting item:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = itemController;
