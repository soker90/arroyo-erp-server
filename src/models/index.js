import mongoose from 'mongoose'
import {authModel} from './auth';

mongoose.set('useFindAndModify', false);

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/clientes', {useNewUrlParser: true});

export {authModel}
