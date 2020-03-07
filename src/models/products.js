import {Schema, model, Types} from 'mongoose';

const productsSchema = new Schema({
  name: String,
  provider: String,
  amount: Number,
  updateDate: {
    type: Date,
    default: Date.now
  }
});

export const ProductsModel = model('Products', productsSchema);
