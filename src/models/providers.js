import {Schema, model, Types} from 'mongoose';

const providersSchema = new Schema({
  name: String,
  address: String,
  phone: String,
  email: String,
  _id: Types.ObjectId,
});

export const ProvidersModel = model('Providers', providersSchema);
