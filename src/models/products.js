import {Schema, model, Types} from 'mongoose';

const productsSchema = new Schema({
  name: String,
  provider: String,
  _id: Types.ObjectId,
});

export const ProductsModel = model('Products', productsSchema);
