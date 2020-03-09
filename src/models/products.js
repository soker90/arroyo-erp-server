import {Schema, model} from 'mongoose';

const productsSchema = new Schema({
  name: String,
  code: String,
  provider: String,
  amount: Number,
  updateDate: Date,
});

export const ProductsModel = model('Products', productsSchema);
