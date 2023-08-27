const Order = require('../models/Order');
const DeliveryVehicle = require('../models/DeliveryVehicle');
const Customer = require('../models/Customer');
const Item = require('../models/Item');
const logger = require('../utils/logger');

const orderController = {
  createOrderAndAssignVehicle: async (req, res) => {
    try {
      const { itemId, customerId, deliveryCity } = req.body;
      
      const deliveryVehicle = await DeliveryVehicle.findOneAndUpdate(
        { city: deliveryCity, activeOrdersCount: { $lt: 2 } },
        { $inc: { activeOrdersCount: 1 } }
      );

      if (!deliveryVehicle) {
        return res.status(400).json({ error: 'No available delivery vehicle' });
      }
      const item = await Item.findById(itemId);
      if (!item) {
        return res.status(400).json({ error: 'Item not found' });
      }
      const order = new Order({
        itemId,
        price: item.price,
        customerId,
        deliveryVehicleId: deliveryVehicle._id,
      });
      await order.save();

      logger.info('Order Created and Vehicle assigned Successfully');

      res.status(201).json(order);
    } catch (error) {
      logger.error('Error in creating order:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  markOrderDelivered: async (req, res) => {
    try {
      const orderId = req.params.id;
      const order = await Order.findById(orderId);

      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }

      if (order.isDelivered) {
        return res.status(400).json({ error: 'Order is already delivered' });
      }

      order.isDelivered = true;
      await order.save();

      await DeliveryVehicle.findByIdAndUpdate(order.deliveryVehicleId, { $inc: { activeOrdersCount: -1 } });

      logger.info("Order marked as delivered successfully");
      res.json({ message: 'Order marked as delivered' });
    } catch (error) {
      logger.error('Error marking order as delivered:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = orderController;
