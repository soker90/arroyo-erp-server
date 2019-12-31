import {Schema, model} from 'mongoose';

const authSchema = new Schema({
  username: String,
  password: String,
});

export const authModel = model('auth', authSchema);
