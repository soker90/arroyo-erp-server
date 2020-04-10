import {model, Schema} from 'mongoose';
import {ProvidersModel} from 'models';

const deliveryOrderSchema = new Schema({
  date: Date,
  provider: String,
  products: [],
  size: Number,
  total: Number,
});

async function preSave(next) {
  if (!this.isModified('provider')) {
    next()
    return
  }

  const {name} = await ProvidersModel.findOne({_id: this.provider});
  if (name) {
    this.nameProvider = name;
    next();
  } else {
    next(new Error('No se ha encontrado el provedor'));
  }
}

deliveryOrderSchema.pre('save', preSave);

export const DeliveryOrderModel = model('DeliveryOrder', deliveryOrderSchema);
