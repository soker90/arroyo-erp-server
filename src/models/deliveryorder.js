import {Schema, model} from 'mongoose';

const deliveryOrderSchema = new Schema({
  date: Date,
  provider: String,
  products: [],
});

export const DeliveryOrderModel = model('DeliveryOrder', deliveryOrderSchema);
