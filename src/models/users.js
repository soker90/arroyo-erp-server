import {Schema, model} from 'mongoose';
import bcrypt from 'bcrypt';

const usersSchema = new Schema({
  user: String,
  password: String,
});

usersSchema.pre('save', function (next) {
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

export const UsersModel = model('Users', usersSchema);
