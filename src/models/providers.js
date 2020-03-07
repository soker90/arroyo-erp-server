import {Schema, model, Types} from 'mongoose';

const providersSchema = new Schema({
  name: String,
  address: String,
  phone: String,
  email: String,
});

export const ProvidersModel = model('Providers', providersSchema);
