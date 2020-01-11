import {Schema, model} from 'mongoose';
import bcrypt from 'bcrypt';

const authSchema = new Schema({
  username: String,
  password: String,
});

authSchema.pre('save', next => {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    })
  })
});

export const AuthModel = model('auth', authSchema);
