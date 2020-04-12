import {model, Schema} from 'mongoose';

const productsSchema = new Schema({
  name: String,
  code: String,
  provider: String,
  amount: Number,
  updateDate: Date,
  iva: Number,
  re: Number,
});

export const ProductsModel = model('Products', productsSchema);
