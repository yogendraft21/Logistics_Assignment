const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, unique: true },
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  price: { type: Number, required: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  deliveryVehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'DeliveryVehicle' },
  isDelivered: { type: Boolean, default: false },
});

module.exports = mongoose.model('Order', orderSchema);
