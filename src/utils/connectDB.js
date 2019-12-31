import mongoose from 'mongoose';

/**
 *  Crea la conexión con la base de datos
 */
export const connectDB = () => {
  mongoose.set('useFindAndModify', false);
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/arroyoErp', {useUnifiedTopology: true, useNewUrlParser: true});
};
