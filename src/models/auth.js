import {Schema, model} from 'mongoose';

const authSchema = new Schema({
  username: String,
  password: String,
});

export const AuthModel = model('auth', authSchema);
