import {Schema, model, Types} from 'mongoose';
import {ProvidersModel} from '../models/providers';

const productsSchema = new Schema({
  name: String,
  provider: Types.ObjectId(ProvidersModel._id),
  _id: Types.ObjectId,
});

export const ProvidersModel = model('Products', productsSchema);
